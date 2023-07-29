// eslint-disable-next-line
const path = require('path');

const libConfig = {
    target: 'node',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /setupTests\.ts/, /\.test\./, /demo/],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },
};

const demoConfig = {
    target: 'node',
    devtool: 'source-map',
    entry: {
        'GlobalScope': './demo/GlobalScope/index.tsx',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'demo/build/'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /setupTests\.ts/, /\.test\./],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = [libConfig, demoConfig];