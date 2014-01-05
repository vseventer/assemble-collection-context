// Exports.
module.exports = function(grunt) {
  // Configuration.
  grunt.initConfig({
    jshint: {
      options : { jshintrc: true },
      all     : [ '*.js', 'test/*.js' ]
    },

    assemble: {
      options: {
        plugins: [ './index.js' ],
        context: { dest: '.tmp/' }
      },
      test: {
        options : { collections: [ 'widgets' ] },
        expand  : true,
        flatten : true,
        src     : 'test/fixtures/post.hbs',
        dest    : 'test/actual'
      },
      pages: {
        options : { data: '.tmp/test.json' },
        expand  : true,
        flatten : true,
        src     : 'test/fixtures/*-test.hbs',
        dest    : 'test/actual'
      }
    },
    cafemocha: {
      src: 'test/*.js'
    },
    clean: {
      all: [ '.tmp', 'test/actual/*' ]
    }
  });

  // Load tasks.
  [
    'assemble',
    'grunt-cafe-mocha',
    'grunt-contrib-clean',
    'grunt-contrib-jshint'
  ].forEach(grunt.loadNpmTasks);

  // Tasks.
  grunt.registerTask('default', [ 'jshint', 'assemble', 'cafemocha', 'clean' ]);
};