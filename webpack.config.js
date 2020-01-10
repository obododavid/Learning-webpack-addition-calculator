const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/myEntry.js",
    output: {
        filename: "afterBuilding.js",
        path: path.resolve(__dirname, "myBuildFolder")
    }
}