const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');
const fs = require('fs-extra');
describe('generator-hippie:app', () => {
    before(() => {
        return (
            helpers
            .run(path.join(__dirname, '../generators/app'))
            .inTmpDir(function(dir) {
                let done = this.async();
                fs.copySync(path.join(__dirname, '../generators/app/templates'), dir, done)
            })
            .withArguments(['afonso'])
        );
    });

    it('Create Files', () => {
        assert.file([
            'index.html',
            'hippie-afonso.html',
            'bower.json',
            'test/index.html',
            'test/hippie-afonso_test.html'
        ]);
    });

    it('File Content', () => {
        assert.fileContent([
            ['index.html', '<title>hippie-afonso</title>'],
            ['hippie-afonso.html', '<dom-module id="hippie-afonso">'],
            ['test/index.html', '<title>hippie-afonso tests</title>'],
            ['test/hippie-afonso_test.html', '<test-fixture id="hippie-afonso">']
        ]);
        assert.jsonFileContent('bower.json', {name: 'hippie-afonso'});
    });
});
