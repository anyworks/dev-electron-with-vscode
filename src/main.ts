
const electron = require("electron");


const app = electron.app;
const path = require("path");
const fs = require("fs");

const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});


app.on('ready', function () {

  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL('file://' + __dirname + '/ui/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });


});

electron.ipcMain.on('checkFileAvailable', async function (event: any, name: string, url: string) {
  fs.readdir(url, (err: any, files: string) => {
    event.sender.send("checkAvailableRes", { name: name, state: err == undefined });
  });
});
