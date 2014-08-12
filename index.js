// Imports.
var path = require('path');

// Exports.
module.exports = function(params, callback) {
  var assemble = params.assemble;
  var grunt    = params.grunt;
  var target   = grunt.task.current.target;

  // Write target collection data (categories, pages, tags) to file.
  if(null != assemble.options.context && null != assemble.options.context.dest) {
    // Extract collections from context.
    var data = { pages: assemble.options.pages };
    for(var collection in assemble.options.collections) {
      if(assemble.options.collections.hasOwnProperty(collection) && 'pages' !== collection) {
        data[collection] = assemble.options.collections[collection].items;
      }
    }

    // Assign to current context.
    if(null == assemble.options.data[target]) {
      assemble.options.data[target] = data;
    }

    // Write to file.
    var basename = path.join(assemble.options.context.dest, target);
    var name     = basename + '.json';

    grunt.log.write('Generating ' + name.cyan + ' ');
    grunt.file.write(name, JSON.stringify(data, null, 2));
    grunt.log.ok();
  }

  // Continue.
  callback();
};

// Hook into render:post:pages.
module.exports.options = { stage: 'render:post:pages' };