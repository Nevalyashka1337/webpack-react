console.log(`*****************
MODE: ${process.env.NODE_ENV}
*****************
`)

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const friendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = () => {
	return {
		mode: process.env.NODE_ENV,
		entry: path.join(__dirname, 'src', 'index.js'),
		output: {
			filename: 'build.js'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					use: 'babel-loader'
				},
				{
					test: /\.scss$/,
					use: [
						{ loader: 'style-loader' },
						{ loader: 'css-loader', options: { sourceMap: true } },
						{ loader: 'sass-loader', options: { sourceMap: true} }
					]
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: 'file-loader'
				}
			]
		},
		devServer: {
			contentBase: path.join(__dirname, 'src', 'index.js'),
			port: 3000,
			open: true,
			clientLogLevel: 'none',
			hot: true,
			watchContentBase: true,
			quiet: true
		},
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				Components: path.resolve(__dirname, 'src/components/')
			}
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, 'public', 'index.html')
			}),
			new webpack.HotModuleReplacementPlugin(),
			new friendlyErrorsPlugin()
		]
	}
}