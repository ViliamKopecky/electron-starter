var webpack = require("webpack");
var webpackConfig = require('./webpack.config.development.js');

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
		'./src/**/*.test.js'
		],
		exclude: [
		'./node_modules'
		],
		preprocessors: {
			'./src/**/*.test.js': ['webpack', 'sourcemap']
		},
		webpack: {
			devtool: 'inline-source-map',
			module: webpackConfig.module,
			stylus: webpackConfig.stylus,
			externals: {
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true
			}
		},
		reporters: ['mocha'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		// browsers: ['Chrome', 'Electron'],
		singleRun: false,
		plugins: [
		'karma-sourcemap-loader',
		"karma-chrome-launcher",
		"karma-phantomjs-launcher",
		"karma-electron-launcher",
		"karma-jasmine",
		"karma-mocha-reporter",
		"karma-webpack"
		]
	});
};
