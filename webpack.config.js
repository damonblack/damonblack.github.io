var config = {
  context: __dirname + "/src/client/app",
  entry: "./index.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/bin",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ],
  },
};

module.exports = config;
