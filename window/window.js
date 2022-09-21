const { BrowserWindow } = require('electron');
const { join } = require('path');

//instantiate window
exports.createWindow = () => 
{
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: join(__dirname, '../src/public/preload.js')
        }
    });

    window.loadFile(join(__dirname, '../src/public/index.html'));
}