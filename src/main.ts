import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import MenuBuilder from './menu';

let mainWindow: BrowserWindow | null;

const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

    return Promise.all(
        extensions.map(name => installer.default(installer[name], forceDownload))
    ).catch(console.log);
};

const createWindow = () => {
    mainWindow = new BrowserWindow({
        show: true,
        width: 800,
        height: 600,
        resizable: true,
        titleBarStyle: 'hiddenInset',
        frame: true
    });

    mainWindow.setContentProtection(false);

    if (process.env.NODE_ENV !== 'production') {
        mainWindow.loadURL(`http://localhost:2003`);
    } else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file:',
                slashes: true
            })
        );
    }

    if (process.env.NODE_ENV !== 'production') {
        // Open DevTools
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    return mainWindow;
};

app.on('ready', async () => {
    if (process.env.NODE_ENV !== 'production') {
        await installExtensions();
    }

    mainWindow = createWindow();
    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.build();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        mainWindow = createWindow();
        const menuBuilder = new MenuBuilder(mainWindow);
        menuBuilder.build();
    }
});
