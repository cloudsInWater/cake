const { resolve } = require('path');
const entry = require('./partials/entry');
const modules = require('./partials/module');
const plugins = require('./partials/plugins');
const optimization = require('./partials/optimization');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry,
  module: modules,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      app: resolve('./web/app'),
      components: resolve('./web/components'),
      config: resolve('./web/config'),
      extension: resolve('./web/extension'),
      i18n: resolve('./web/i18n'),
      models: resolve('./web/models'),
      pages: resolve('./web/pages'),
      services: resolve('./web/services'),
      utils: resolve('./web/utils'),
    },
    modules: ['node_modules'],
  },
  output: {
    path: resolve('./server/app/public'),
    publicPath: isDevelopment ? '/' : './',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  plugins,
  devServer: {
    hot: true,
    noInfo: true,
    open: isDevelopment,
    host: '0.0.0.0',
    useLocalIp: true,
    port: 9000,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/index.html' },
      ],
    },
  },
  devtool: isDevelopment ? 'cheap-module-eval-source-map' : false,
  optimization,
  mode: isDevelopment ? 'development' : 'production',
  performance: { hints: false },
};
