// @flow
import { app, BrowserWindow, Menu, shell } from 'electron';

export default class MenuBuilder {
  private mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  public build() {
    const template = this.buildTemplate(process.platform);

    const menu = Menu.buildFromTemplate(template as []);
    this.mainWindow.setMenu(menu);

    return menu;
  }

  private buildTemplate(platform: string) {
    switch (platform) {
      case 'darwin':
        return this.darwinTemplate();
      default:
        return this.defaultTemplate();
    }
  }

  private darwinTemplate() {
    const subMenuAbout = {
      label: 'BlockEQ',
      submenu: [
        { label: 'About Binobi', selector: 'orderFrontStandardAboutPanel:' },
        { type: 'separator' },
        { label: 'Services', submenu: [] },
        { type: 'separator' },
        { label: 'Hide Binobi', accelerator: 'Command+H', selector: 'hide:' },
        { label: 'Hide Others', accelerator: 'Command+Shift+H', selector: 'hideOtherApplications:' },
        { label: 'Show All', selector: 'unhideAllApplications:' },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'Command+Q', click: () => { app.quit(); } }
      ]
    };
    const subMenuEdit = {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'Command+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+Command+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'Command+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'Command+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'Command+V', selector: 'paste:' },
        { label: 'Select All', accelerator: 'Command+A', selector: 'selectAll:' }
      ]
    };
    const subMenuViewDev = {
      label: 'View',
      submenu: [
        { label: 'Reload', accelerator: 'Command+R', click: () => { this.mainWindow.webContents.reload(); } },
        { label: 'Toggle Full Screen', accelerator: 'Ctrl+Command+F', click: () => { this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()); } },
        { label: 'Toggle Developer Tools', accelerator: 'Alt+Command+I', click: () => { this.mainWindow.webContents.toggleDevTools(); } }
      ]
    };
    const subMenuViewProd = {
      label: 'View',
      submenu: [
        { label: 'Toggle Full Screen', accelerator: 'Ctrl+Command+F', click: () => { this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen()); } }
      ]
    };
    const subMenuWindow = {
      label: 'Window',
      submenu: [
        { label: 'Minimize', accelerator: 'Command+M', selector: 'performMiniaturize:' },
        { label: 'Close', accelerator: 'Command+W', selector: 'performClose:' },
        { type: 'separator' },
        { label: 'Bring All to Front', selector: 'arrangeInFront:' }
      ]
    };
    const subMenuHelp = {
      label: 'Help',
      submenu: [
        { click: () => { shell.openExternal('http://binobi.io'); }, label: 'About us'},
      ]
    };
    const subMenuView = process.env.NODE_ENV === 'development' ? subMenuViewDev : subMenuViewProd;

    return [
      subMenuAbout,
      subMenuEdit,
      subMenuView,
      subMenuWindow,
      subMenuHelp
    ];
  }

  private defaultTemplate() {
    const subMenuFile = {
      label: '&File',
      submenu: [{
        accelerator: 'Ctrl+O',
        label: '&Open',
      }, {
        accelerator: 'Ctrl+W',
        click: () => {
          this.mainWindow.close();
        },
        label: '&Close',
      }],
    };
    const subMenuHelp = {
      label: 'Help',
      submenu: [{
        click: () => {
          shell.openExternal('http://binobi.io');
        },
        label: 'About us',
      }],
    };
    const subMenuViewDev = {
      label: '&View',
      submenu: [{
        accelerator: 'Ctrl+R',
        click: () => {
          this.mainWindow.webContents.reload();
        },
        label: '&Reload',
      }, {
        accelerator: 'F11',
        click: () => {
          this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        },
        label: 'Toggle &Full Screen',
      }, {
        accelerator: 'Alt+Ctrl+I',
        click: () => {
          this.mainWindow.webContents.toggleDevTools();
        },
        label: 'Toggle &Developer Tools',
      }],
    };
    const subMenuViewProd = {
      label: '&View',
      submenu: [{
        accelerator: 'F11',
        click: () => {
          this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
        },
        label: 'Toggle &Full Screen',
      }],
    };
    const subMenuView = process.env.NODE_ENV === 'development' ? subMenuViewDev : subMenuViewProd;

    return [
      subMenuFile,
      subMenuView,
      subMenuHelp
    ];
  }
}
