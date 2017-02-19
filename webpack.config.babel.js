import path from 'path';
import webpack from 'webpack';

import {
	output,
	scriptLoader,
	fileLoader,
	resolve,
} from './webpack.config.base';

const devtool = 'inline-source-map';
const entry = [
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server',
	path.join(__dirname, 'src/index'),
];
const devServer = {
	contentBase: path.resolve(__dirname, 'src'),
	quiet: false,
	noInfo: false,
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: false,
		timings: false,
		chunks: false,
		chunkModules: false,
	},
};
const plugins = [new webpack.HotModuleReplacementPlugin()];

export default {
	devtool,
	entry,
	output,
	devServer,
	module: {
		loaders: [
			scriptLoader,
			fileLoader,
		],
	},
	plugins,
	resolve,
};
