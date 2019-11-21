const electron = require('electron');
require('electron-reload');
const { app, BrowserWindow, Menu, powerMonitor } = electron;

const path = require('path');
const url = require('url');

let win;

function createWindow () {
 /*  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize */
  // Create the browser window.
  /* Menu.setApplicationMenu(null); */

  win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js',
      webviewTag: true
    }
  });
  
  /* win.setFullScreen(true); */
  
  const startUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : url.format({
    pathname: path.join(__dirname, 'build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  win.loadURL(startUrl);
  
  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });

  //  =====================================================
  //  Custom code
  //  =====================================================
  //  Check idle time of system
  setInterval(function() {
    if(powerMonitor.getSystemIdleTime()>5){
      win.webContents.send('reset:warn', powerMonitor.getSystemIdleTime());
    }

    if(powerMonitor.getSystemIdleTime()===10){
      win.webContents.send('reset:command', powerMonitor.getSystemIdleTime());
    }
    console.log(`idle for ${powerMonitor.getSystemIdleTime()} seconds`)
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


