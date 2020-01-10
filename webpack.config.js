const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/myEntry.js",
    // devtool: "none",
    output: {
        filename: "afterBuilding.js",
        path: path.resolve(__dirname, "myBuildFolder")
    }
}