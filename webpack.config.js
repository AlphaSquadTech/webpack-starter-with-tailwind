const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ],
            },
        ]
    },
    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
