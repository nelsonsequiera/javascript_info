# javascript_info

Java Script tutorial: https://javascript.info/

LINTER for sublime:

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