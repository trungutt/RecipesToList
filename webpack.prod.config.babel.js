import path from 'path';
import webpack from 'webpack';

import {
	output,
	scriptLoader,
	fileLoader,
	resolve,
} from './webpack.config.base';

const devtool = 'source-map';
const entry = [
	path.join(__dirname, 'src/index'),
];
const plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
	new webpack.optimize.UglifyJsPlugin()
	];

export default {
	devtool,
	entry,
	output,
	module: {
		loaders: [
			scriptLoader,
			fileLoader,
		],
	},
	plugins,
	resolve,
};
