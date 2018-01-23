const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	module: {
		rules: [
			// CSS (modules)
			{
				test: /components(\/|\\).*\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?modules&importLoaders=1&localIdentName=purr_[name]__[local]___[hash:base64:5]!postcss-loader",
				}),
			},
			// CSS
			{
				test: /assets(\/|\\).*\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?importLoaders=1!postcss-loader",
				}),
			},
		],
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "assets/stylesheets/[name].[hash].css",
			allChunks: true,
		}),
	],
	externals: {
		jsdom: "window",
		cheerio: "window",
		"react/lib/ExecutionEnvironment": true,
		"react/lib/ReactContext": "window",
		"react/addons": true,
	},
}
