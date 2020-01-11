const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/myEntry.js",
    // devtool: "none",
    output: {
        filename: "afterBuilding.js",
        path: path.resolve(__dirname, "myBuildFolder")
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"]
            // },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }

}