var babelOptions = require('./webpack.babel');
module.exports = {
  context: __dirname + "/src",
  entry: "./entry",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: babelOptions
    }]
  }
}
