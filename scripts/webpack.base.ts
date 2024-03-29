import { cmdPath, resolve } from './utils'
import path from 'path'
import webpack from "webpack";
const config: webpack.Configuration = {
	mode: "production",
	entry: {
		popup: "./src/popup/main.ts",
		content_script: "./src/content_script/main.ts",
		background_script: "./src/background_script/main.ts",
	},
	output: {
		path: cmdPath("dist"),
		filename: "[name].min.js",
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		alias: {
			vue: "vue/dist/vue.js",
			"@": cmdPath('src')
		},
		extensions: [".tsx", ".ts", ".js", ".vue"],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: "commons",
					chunks: "initial",
					minChunks: 2,
				},
			},
		},
	},
};

console.log(cmdPath('./src'), '222')

export default config;
