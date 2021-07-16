import * as webpack from 'webpack';

class FileListPlugin {
  static defaultOptions = {
    outputFile: 'assets.md',
  };

  options: any = {}

  // Any options should be passed in the constructor of your plugin,
  // (this is a public API of your plugin).
  constructor(options = {}) {
    // Applying user-specified options over the default options
    // and making merged options further available to the plugin methods.
    // You should probably validate all the options here as well.
    this.options = { ...FileListPlugin.defaultOptions, ...options };
  }

  apply(compiler: webpack.Compiler) {
    console.log(((compiler.options.module.rules[0] as webpack.RuleSetRule).use as any).options);

    ((compiler.options.module.rules[0] as webpack.RuleSetRule).use as any).options = {
      aaa: "xxx"
    }
  }
}

export default FileListPlugin;
