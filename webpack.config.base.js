import path from 'path';


export const output = {
	path: path.resolve(__dirname, 'src'),
	filename: 'bundle.js',
	publicPath: '/',
};
export const scriptLoader = {
	loader: 'babel-loader',
	include: path.resolve(__dirname, 'src'),
	exclude: /node_modules/,
	test: /\.js$/,
};
export const fileLoader = {
	loaders: ['url-loader'],
	test: /\.jpg$/,
};
export const resolve = {
	extensions: ['.js'],
};
