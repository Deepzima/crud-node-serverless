const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require("webpack-node-externals");
module.exports = {
    target: 'node',
    entry: slsw.lib.entries,
    mode: slsw.lib.webpack.isLocal ? "development" : "production",
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
    performance: {
        // Turn off size warnings for entry points
        hints: false
    },
    devtool: 'source-map',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: "[name].js",
        sourceMapFilename: "[file].map"
    }
};
