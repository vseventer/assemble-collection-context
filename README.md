# assemble-collection-context [![NPM version](https://badge.fury.io/js/assemble-collection-context.png)](http://badge.fury.io/js/assemble-collection-context)
> Assemble.io plugin for sharing collection context between build targets.

## Getting Started
In the command line, run:

```bash
npm install assemble-collection-context --save
```

To register the plugin with Assemble, adjust your project’s Gruntfile.

```js
module.exports = function(grunt) {
  // Configuration.
  grunt.initConfig({
    assemble: {
      options: {
        plugins : [ 'assemble-collection-context', 'other/plugins/*.js' ]
        context : { dest: '.tmp/' }
      },
      blog: {
        'dist/': [ 'templates/*.hbs' ]
      },
      pages: {
        options : { data: '.tmp/*.json' },
        'dist/' : [ 'index.html' ]
      }
    }
  });
};
```

In your `index.html`, you can now access the categories, pages, and tags (plus any custom collections you might have) from the `blog` target:

```html
{{#each blog.pages}}
  {{ data.title }}
{{/each}}
```

Note the collection context is generated only for targets you run. This means that only running `assemble:pages` will not work, the `.tmp/blog.json` file will only be available if you ran `assemble:blog` prior.

## Options

### dest
Destination of collection context. Required.

## License
    The MIT License (MIT)

    Copyright (c) 2014 Mark van Seventer

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.