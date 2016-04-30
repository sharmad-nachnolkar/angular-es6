var webpack = require('webpack');

module.exports = {
    entry: {
        app: "./index.js"
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
               {
                  test: /\.js?$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'babel', // 'babel-loader' is also a legal name to reference,
                  exclude: /(node_modules)/,
                  query: {
                    presets: ['es2015']
                  }
               }
        ],
    },
    resolve: {
        extensions: ['', '.js']
    }
};