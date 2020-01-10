const path = require("path");

module.exports = {
    entry: "./src/myEntry.js",
    output: {
        filename: "afterBuilding.js",
        path: path.resolve(__dirname, "myBuildFolder")
    }
}