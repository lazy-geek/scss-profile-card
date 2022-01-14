const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: "[name].css",
            }
        ),
        new CopyPlugin({
            patterns: [
                { from: "*.html", context: path.resolve(__dirname, 'src') },
                { from: "assets", to: "./assets", context: path.resolve(__dirname, 'src') },
            ],
        }),
    ],
    entry: path.resolve(__dirname, 'src','scss','style.scss'),
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //   publicPath: "./",
                        // },
                      },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};