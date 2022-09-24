const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotReloadMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');

const compile = (app) => {
  const compiler = webpack(webpackConfig);
  app.use(
    devMiddleware(compiler, {
      // noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }),
  );

  app.use(hotReloadMiddleware(compiler));
};

module.exports = { compile };
