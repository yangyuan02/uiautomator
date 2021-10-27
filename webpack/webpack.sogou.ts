import path from "path";
import webpack from "webpack";
import webpackConfig from "./webpack.base";
import CopyWebPackPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import { merge as webpackMerge } from "webpack-merge";
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
		new HtmlWebPackPlugin({
			chunks: ["background-server"],
			filename: "background.html",
		}),
		new CopyWebPackPlugin({
			patterns: [
				{
					from: "logo-128.png",
					to: path.resolve(__dirname, "dist"),
				},
				{
					from: "logo-48.png",
					to: path.resolve(__dirname, "dist"),
				},
				{
					from: "icon-32.png",
					to: path.resolve(__dirname, "dist/default-big.png"),
				},
				{
					from: "icon-16.ico",
					to: path.resolve(__dirname, "dist/default.ico"),
				},
				{
					from: "manifest.sogou.xml",
					to: path.resolve(__dirname, "dist/manifest.xml"),
				},
			],
		}),
	],
});
export default config;
