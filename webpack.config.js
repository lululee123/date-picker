const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].[contenthash].js',

	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	performance: {
		hints: false,
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(scss)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
						},
					},
					{
						loader: 'sass-loader',
					},
					{
						loader: 'sass-resources-loader',
						options: {
							resources: './src/global.scss',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: './index.css',
		}),
	],
};
