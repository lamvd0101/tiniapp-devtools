const path = require('path');
const {extensionConfig} = require('../../configs/webpack.config');

/**
 * @typedef {import('webpack').Configuration} WebpackConfig
 */
module.exports = (_env, _argv) => {
  return extensionConfig(
    /**@type WebpackConfig*/ {
      entry: './src/index.ts',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
      },
    },
  );
};
