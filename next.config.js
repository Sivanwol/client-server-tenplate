const path = require('path');
const Dotenv = require("dotenv-webpack");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    })

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: [
        'graphql-tag/loader',
        'graphql-let/schema/loader'
      ],
    })

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    })

    config.resolve.alias["@"] = path.resolve(__dirname);
    config.plugins.push(new Dotenv({ silent: true }));
    return config
  },
}
