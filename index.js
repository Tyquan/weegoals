const { app, BrowserWindow } = require('electron');
const path = require('path');
const EventEmitter = require('node:events');

function createWindow()
{
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'public/preload.js')
        }
    });

    window.loadFile(path.join(__dirname, 'public/index.html'));
}

app.whenReady()
    .then(() => {
        createWindow();

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0)
            {
                createWindow();
            }
        });

    })
    .catch((error) => {
        const emitter = new EventEmitter();
        emitter.emit('error', new Error(`Electronjs whenReady() error (createWindow() function error in main.js): \n ${error}`))
    });