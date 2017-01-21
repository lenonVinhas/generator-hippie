const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const NAME = 'generator-hippie';

class App extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('elemName', { type: String, required: true });
    this.destinationRoot(`hippie-${this.options.elemName}`);
  }
  prompting() {
    this.log(yosay(`${NAME} do AfonsoPaciferDoCssCastShow(ufaaa!)`));
  }
  writing() {
    const indexFile = 'index.html';
    const indexFileTest = `test/${indexFile}`;
    const hippieElmFile = 'hippie-element-boilerplate.html';
    const bowerFile = 'bower.json';

    // indexFile
    this.fs.copyTpl(
      this.templatePath(indexFile),
      this.destinationPath(indexFile),
      {name:this.options.elemName}
    );
    // indexFile test
    this.fs.copyTpl(
      this.templatePath(indexFileTest),
      this.destinationPath(indexFileTest),
      {name:this.options.elemName}
    );
    // hippie-element-boilerplate
    this.fs.copyTpl(
      this.templatePath(hippieElmFile),
      this.destinationPath(`hippie-${this.options.elemName}.html`),
      {name:this.options.elemName}
    );
    // hippie-element-boilerplate tests
    this.fs.copyTpl(
      this.templatePath('test/hippie-element-boilerplate_test.html'),
      this.destinationPath(`test/hippie-${this.options.elemName}_test.html`),
      {name:this.options.elemName}
    );
    this.fs.copyTpl(
      this.templatePath(bowerFile),
      this.destinationPath(bowerFile),
      {name:this.options.elemName}
    );
  }
}
module.exports = App;
