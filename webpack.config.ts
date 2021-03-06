import * as path from 'path';
import * as webpack from 'webpack';
import FileListPlugin from "./filelist_plugin"

const config: webpack.Configuration = {
  mode: "development",
  entry: ['./src/index.ts', './src/second.ts'],
  module: {
    rules: [
      { 
        test: /\.ts$/,
        use: {
          loader: path.resolve(__dirname, "./loader/index.ts"),
          options: {
            hoge: "foo"
          }
        },
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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

export default config;
