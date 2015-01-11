# grunt-td-background-outlook

> Replace background on td with fallback code for outlook. Code based on http://backgrounds.cm/

## Getting Started

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-td-background-outlook --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-td-background-outlook');
```

## The "td_background_outlook" task

### Overview

In your project's Gruntfile, add a section named `td_background_outlook` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  td_background_outlook: {
    files: {
      'tmp/sample.html': 'test/fixtures/sample.html'
    }
  },
})
```

### Usage Examples

#### Default Options

Have a look at test/fixtures/sample.html and test/expected/sample.html to see what gets added.

```js
grunt.initConfig({
  td_background_outlook: {
    files: {
      'tmp/sample.html': 'test/fixtures/sample.html'
    },
  },
})
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

v0.0.1 first package
v0.0.2 dev dependencies removed
v0.0.3 stale soup removed
v0.0.4 docs updated

## License

Copyright (c) 2015 Peter Droogmans. Licensed under the MIT license.
