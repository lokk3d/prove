const Generator = require('yeoman-generator');
const {
  List,
  RawList,
  CheckList,
  Input,
  InputValidate,
  Confirm
} = require("@webpack-cli/webpack-scaffold");
const createDevConfig = require('./dev-config');


module.exports = class WebpackGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
    opts.env.configuration = {
      dev: {
        topScope: [],
        webpackOptions: {}
      }
    }
  }

  prompting() {
    const done = this.async();
    this.prompt([
      List('confirm', 'Welcome to the demo scaffold! Are you ready?', ['y', 'n']),
      Input('entry', 'What is the entry point in your app?'),
      Input('output', 'What is the output folder of your app?'),

    ]
      .then((answer) => {
        if (answer.confirm === "y") {
          console.log("Let's start scaffolding!");
          this.options.env.configuration.dev.webpackOptions = createDevConfig(answer);
          this.options.env.configuration.dev.topScope = [
            'const path = require("path")',
            'const webpack = require("webpack")'
          ];
          done();
        }
        done(); // to end questioning
      })
  }
  /**
   * writing()
   * @description write files in user directory
   */
  writing() {
    this.config.set('configuration', this.options.env.configuration);

  }

  /**
   * install()
   * @description install dependencies in user directory
   */
  install() {
    this.installDependencies();
  }
};