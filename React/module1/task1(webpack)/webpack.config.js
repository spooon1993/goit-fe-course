const path = require('path');
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-decorators-legacy',
                        'transform-class-properties']
                    }
                }
            }
        ]
    },
    devServer: {
        port: 3000,
        stats: 'errors-only',  // выводит только ошибки в консоль
        clientLogLevel: 'warning',
        compress: true
    }
};
module.exports = config;

