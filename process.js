//  ========================================================
//  Require packages
//  ========================================================
const electron = require('electron');
require('electron-reload');
const { app, BrowserWindow, Menu, powerMonitor, ipcMain } = electron;


//  Mock version on development for auto updater
if(process.env.NODE_ENV === 'development'){
  const {version} = require('./package.json');
  app.getVersion = ()=> version;
}

//  Init auto updater
const { autoUpdater } = require('electron-updater');
autoUpdater.allowPrerelease = true;

//  Init persistent store
const Store = require('electron-store');
const store = new Store();

//  Init generic packages
const path = require('path');
const url = require('url');
//  ========================================================
//  END Require packages
//  ========================================================

//  Set default store values
if(!store.has('settings:resettime')){
  store.set('settings:resettime', 300);
}

let win;

function createWindow () {
  // Create the browser window.
  if(process.env.NODE_ENV !== 'development')
    Menu.setApplicationMenu(null);

  win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js',
      webviewTag: true
    }
  });

  //  Check for updates
  autoUpdater.checkForUpdatesAndNotify();

  //  Enter full screen if not development
  if(process.env.NODE_ENV !== 'development')
    win.setFullScreen(true);
  
  const startUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : url.format({
    pathname: path.join(__dirname, '/index.html'),
    protocol: 'file:',
    slashes: true
  });

  win.loadURL(startUrl);
  
  // Open the DevTools.
  if(process.env.NODE_ENV === 'development')
    win.webContents.openDevTools();
    

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });

  win.once('ready-to-show', () => {
    win.show()
  })

  //  =====================================================
  //  Custom code
  //  =====================================================
  //  Check idle time of system
  setInterval(function() {
    const resetWarn = parseInt(store.get('settings:resettime'))-10;    //  Seconds
    const resetTime = parseInt(store.get('settings:resettime'));    //  Seconds

    const totalIdle = powerMonitor.getSystemIdleTime();

    if(totalIdle>=resetWarn && totalIdle<resetTime){
      win.webContents.send('reset:warn', resetTime-totalIdle);
    }

    if(totalIdle===resetTime){
      win.webContents.send('reset:command', totalIdle);
    }

    if(totalIdle<resetWarn){
      win.webContents.send('reset:invalid');
    }

    console.log(`idle for ${powerMonitor.getSystemIdleTime()} seconds`);

  }, 1000);
}
 
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
})

//  =====================================================
//  Handle app updates
//  =====================================================
ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});

autoUpdater.on('update-available', () => {
  if (win !== null)
    win.webContents.send('update:available');
});
autoUpdater.on('download-progress', (progressObj) => {
  if (win !== null)
    win.webContents.send('update:progress', progressObj);
});
autoUpdater.on('update-downloaded', () => {
  if (win !== null)
    win.webContents.send('update:downloaded');
});

ipcMain.on('app:restart', () => {
  autoUpdater.quitAndInstall();
});

ipcMain.on('reset:reload', () => {
  if (win !== null)
    win.reload();
});

//  =====================================================
//  Handle Settings
//  =====================================================
//  Settings request from renderer
ipcMain.on('settings:request', (event) => {
  event.sender.send('settings:receive', {
    resettime: store.get('settings:resettime')
  });
});

//  Set settings
ipcMain.on('settings:set', (evt, data) => {
  store.set(`settings:${data.key}`, data.value);
});