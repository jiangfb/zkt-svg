var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./component/ZktSvg.jsx',
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},

	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist/'),
		libraryTarget: 'umd',
		library: 'zkt-svg'
	},
	externals: {
		'react': 'react',
		'react-dom': 'react-dom'
	},

	module: {
		rules: [{
			test: /\.jsx?$/,
			use: ['babel-loader'],
			exclude: /node_modules/
		}]
	}

};
