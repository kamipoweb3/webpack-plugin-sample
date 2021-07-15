const { FileListPlugin } = require('./file-list-plugin.js');

// Use the plugin in your webpack configuration:
module.exports = {
  mode: "development",
  entry: './src/index.ts',
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  plugins: [
    // Adding the plugin with the default options
    // new FileListPlugin(),

    // OR:

    // You can choose to pass any supported options to it:
    new FileListPlugin({
      outputFile: 'my-assets.md',
    }),
  ],
};