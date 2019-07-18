var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'./test/index.jsx'
	],

	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'test'),
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	
	mode:'development',

	module: {
		rules: [{
			test: /\.jsx?$/,
			use: [
				{ loader: 'babel-loader' },
				{
					loader: './loader/index.js',
					options: { directory: path.resolve(__dirname, 'svgs') }
				}],
			exclude: /node_modules/
		}]
	}

};
