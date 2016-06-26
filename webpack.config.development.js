var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var poststylus = require('poststylus');

var config = {
	entry: [
	'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
	'./src/index',
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
		}, {
			test: /\.styl$/,
			loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
		}, {
			test: /\.png|\.jpg|\.svg$/,
			loaders: ['file-loader']
		}]
	},
	stylus: {
		use: [
			poststylus([ 'autoprefixer' ])
		]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: 'http://localhost:9000/dist/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	plugins: [
	new webpack.HotModuleReplacementPlugin(),
	]
};

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
