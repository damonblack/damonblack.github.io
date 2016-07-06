var config = {
  context: __dirname + '/src/client/app',
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/bin',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']//, 'react-hmre']
        },
      }
    ],
  },
};

module.exports = config;
