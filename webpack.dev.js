const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    // devtool: "none",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "myBuildFolder")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. inject styles into dom
                    "css-loader", //2. turn css to common.js
                    "sass-loader" //1. turn sass to css
                ]
            },
        ]
    }
})