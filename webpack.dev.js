const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		watchContentBase: true,
		open: true,
		port: 9000,
		host: "0.0.0.0",
		hot: true,
		compress: true,
		historyApiFallback: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},
	devtool: "eval-source-map",
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development"),
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
})
