# javascript_info

Java Script tutorial: https://javascript.info/


### LINTER for sublime:

* ESLint:
https://packagecontrol.io/packages/ESLint

* SublimeOnSaveBuild:
https://github.com/alexnj/SublimeOnSaveBuild

user preferences:
```
{
	"node_path": "/Users/nelsonsequiera/Packages/homebrew/bin/",
	"node_modules_path": "/Users/nelsonsequiera/Packages/homebrew/lib/node_modules",
}
```

.eslintrc file in root of JS directory.
contents:
```
{
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "no-console": 0,
  },
}
```

### Documentation generator:
* JsDoc: https://github.com/jsdoc3/jsdoc
* grunt-jsdoc: https://github.com/krampstudio/grunt-jsdoc
* grunt-watch: https://github.com/gruntjs/grunt-contrib-watch

```
npm init
npm install --save-dev jsdoc

npm install -g grunt-cli
npm install grunt --save-dev
npm install grunt-jsdoc --save-dev

// in Gruntfile.js
grunt.loadNpmTasks('grunt-jsdoc');
grunt.initConfig({
    jsdoc : {
        dist : {
            src: ['js/*.js', 'test/*.js'],
            options: {
                destination: 'doc'
            }
        }
    }
});

npm install --save-dev ink-docstrap
template : "node_modules/ink-docstrap/template",
configure : "node_modules/ink-docstrap/template/jsdoc.conf.json"

npm install grunt-contrib-watch --save-dev
grunt.loadNpmTasks('grunt-contrib-watch');
watch: {
  scripts: {
    files: ['js/*.js'],
    tasks: ['jshint'],
    options: {
      spawn: false,
    },
  },
}

grunt watch jsdoc
```