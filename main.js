const { Tray, app, Menu, BrowserWindow, ipcMain } = require('electron')

const path = require('path')
// const url = require('url')
const isDev = require("electron-is-dev")
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024, height: 768, frame: false,
    icon: path.join(__dirname, './public/favicon.ico'), autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      nodeIntegrationInWorker: true,
      enableRemoteModule: true
      // preload: path.join(__dirname, './src/electron/preload.js')
    }
    // , titleBarStyle: 'hidden'
  })
  // if (isDev)
  //   mainWindow.openDevTools()
  global.mainWindow = mainWindow
  const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
  mainWindow.maximize()
  mainWindow.loadURL(startURL);

  let tray = null;
  mainWindow.on('minimize', function (event) {
    event.preventDefault();
    mainWindow.setSkipTaskbar(true);
    tray = createTray();
  });

  mainWindow.on('restore', function (event) {
    mainWindow.show();
    mainWindow.setSkipTaskbar(false);
    tray.destroy();
  });
}

function createTray() {
  let appIcon = new Tray(path.join(__dirname, "./public/favicon.ico"));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show', click: function () {
        mainWindow.show();
      }
    },
    {
      label: 'Exit', click: function () {
        app.isQuiting = true;
        app.quit();
      }
    }
  ]);

  appIcon.on('double-click', function (event) {
    mainWindow.show();
  });
  appIcon.setToolTip('AC Student');
  appIcon.setContextMenu(contextMenu);
  return appIcon;
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('close-main-window', () => {
  app.quit();
})