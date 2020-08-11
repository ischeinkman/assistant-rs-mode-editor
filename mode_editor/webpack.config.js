const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        chunkFilename : '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'], sideEffects: true, },
            { test: /\.handlebars$/, loader: "handlebars-loader" }
        ],
    },
    optimization: {
        usedExports: true,
        minimize : false, 
    },
};