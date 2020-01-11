const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    // devtool: "none",
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        })
    ],
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "myBuildFolder")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. extract css into files
                    "css-loader", //2. turn css to common.js
                    "sass-loader" //1. turn sass to css
                ]
            },
        ]
    }
})