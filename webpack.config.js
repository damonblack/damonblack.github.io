var config = {
  context: __dirname + "/src/client/app",
  entry: "./index.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/src/client/public",
  }
};

module.exports = config;
