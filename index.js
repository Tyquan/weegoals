const { app, BrowserWindow } = require('electron');
const EventEmitter = require('node:events');
const window = require('./window/window');

// on electrons app initial load
app.whenReady()
    .then(() => {

        window.createWindow();

        //Open a window if none are open (macOS)
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0)
            {
                window.createWindow();
            }
        });

    })
    .catch((error) => {
        const emitter = new EventEmitter();
        emitter.emit('error', new Error(`Electronjs whenReady() error (createWindow() function error in main.js): \n ${error}`))
    });

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})