import electron from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
	mainWindow = new BrowserWindow({width: 800, height: 600, show: false})

	mainWindow.setMenu(null)

	mainWindow.loadURL(`file://${__dirname}/index.html`)

	if(process.env.NODE_ENV === 'development') {
		devtron.install()
		installExtension(REACT_DEVELOPER_TOOLS)
		installExtension(REDUX_DEVTOOLS)
		mainWindow.webContents.openDevTools()
	} else {
		mainWindow.setAlwaysOnTop(true)
	}

	mainWindow.on('closed', function () {
		mainWindow = null
	})

	mainWindow.once('ready-to-show', function () {
		mainWindow.show()
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow()
	}
})

