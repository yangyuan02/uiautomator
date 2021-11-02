import { cmdPath, resolve } from './utils'
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
			'@content_script': resolve('src/content_script')
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

export default config;
