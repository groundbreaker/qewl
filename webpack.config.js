const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname),
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
  plugins: [new UglifyJsPlugin()],
  externals: ["react"]
};
