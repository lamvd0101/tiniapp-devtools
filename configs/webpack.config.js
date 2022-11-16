//@ts-check
'use strict';

const merge = require('merge-options');

/**
 * @typedef {import('webpack').Configuration} WebpackConfig
 */
function extensionConfig(/**@type WebpackConfig*/ extConfig) {
  /** @type WebpackConfig */
  const defaultConfig = {
    target: 'node',
    mode: 'none',

    output: {
      libraryTarget: 'commonjs2',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'node-loader',
            },
            {
              loader: 'ts-loader',
            },
          ],
        },
      ],
    },
  };

  return merge(defaultConfig, extConfig);
}

module.exports = {extensionConfig};
