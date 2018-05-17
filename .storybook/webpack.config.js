const path = require('path');

const appDirectory = path.resolve(__dirname, '../');

const babelLoaderConfiguration = {
  test: /\.js$/,
  include: [path.resolve(appDirectory, 'src')],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: ['react-native-web'],
      presets: ['react-native'],
    },
  },
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
  },
};
