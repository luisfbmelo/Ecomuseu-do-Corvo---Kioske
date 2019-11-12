const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;
 
let win;

function createWindow () {
 /*  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize */
  // Create the browser window.
  Menu.setApplicationMenu(null);

  win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: false
    }
  });
  
  /* win.setFullScreen(true); */
 
  // and load the index.html of the app.
  if(process.env.NODE_ENV === 'development'){
    win.loadURL('http://localhost:3000');
  }else{
    win.loadFile('build/index.html');
  }
  
  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });
  
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