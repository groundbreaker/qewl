const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  node: {
    net: "empty"
  },
  plugins: [new UglifyJsPlugin()],
  externals: ["react"]
};
