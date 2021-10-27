import webpack from "webpack";
import webpackConfig from "./webpack.base";
import CopyWebPackPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { merge as webpackMerge } from "webpack-merge";
import { cmdPath } from './utils'
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const config: webpack.Configuration = webpackMerge(webpackConfig, {
	plugins: [
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			Gbrowser: JSON.stringify("chrome"),
		}),
		new HtmlWebPackPlugin({
			chunks: ["popup"],
			template: "./src/popup/index.html",
			filename: "popup.html",
		}),
		new CopyWebPackPlugin({
			patterns: [
				{
					from: cmdPath("./icons/logo-48.png"),
					to: cmdPath("dist"),
				},
				{
					from: cmdPath("./icons/logo-128.png"),
					to: cmdPath("dist"),
				},
				{
					from: cmdPath("./manifest/manifest.json"),
					to: cmdPath("dist"),
				},
			],
		}),
	],
});
export default config;
