const glob = require("glob-all")
const merge = require("webpack-merge")
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const PurifyCSSPlugin = require("purifycss-extended-webpack")
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin")

const common = require("./webpack.common.js")

module.exports = merge(common, {
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "assets/scripts/vendor.[hash].js",
			minChunks(module) {
				return module.context && module.context.indexOf("node_modules") >= 0
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true,
			},
			output: {
				comments: false,
			},
		}),
		new webpack.HashedModuleIdsPlugin(),
		new PurifyCSSPlugin({
			purifyOptions: {
				whitelist: ["body", "html", "*purr*"],
			},
			minimize: true,
			paths: glob.sync([
				path.join(__dirname, "src/components/**/*.js"),
				path.join(__dirname, "src/components/**/*.jsx"),
				path.join(__dirname, "src/assets/css/**/*.css"),
			]),
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			excludeChunks: ["base"],
			filename: "index.html",
			minify: {
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
			},
		}),
		new StyleExtHtmlWebpackPlugin({
			minify: true,
		}),
	],
})
