console.log(`*****************
MODE: ${process.env.NODE_ENV}
*****************
`)

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = () => {
	return {
		mode: process.env.NODE_ENV,
		devtool: 'source-map',
		entry: path.join(__dirname, 'src', 'index.js'),
		output: {
			filename: 'js/bundle.js',
			path: path.join(__dirname, 'build')
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
						{ loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
						{ loader: 'css-loader' },
						{ loader: 'postcss-loader' },
						{ loader: 'sass-loader' }
					]
				},
				{
					test: /\.(png|svg|jpe?g|gif)$/,
					use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'img' } } ]
				}
			]
		},
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				Components: path.resolve(__dirname, 'src/components/')
			}
		},
		plugins: [
			new CleanWebpackPlugin('build'),
			new HtmlWebpackPlugin({
				template: path.join(__dirname, 'public', 'index.html')
			}),
			new MiniCssExtractPlugin({
				filename: 'css/[name].css',
				chunkFilename: 'css/[id].css',
			}),
			new BundleAnalyzerPlugin()
		]
	}
}