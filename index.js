// Imports.
var path = require('path');

// Exports.
module.exports = function(params, callback) {
  var assemble = params.assemble;
  var grunt    = params.grunt;

  // Write target collection data (categories, pages, tags) to file.
  if(null != assemble.options.context && null != assemble.options.context.dest) {
    // Extract collections from context.
    var data = { pages: assemble.options.pages };
    for(var collection in assemble.options.collections) {
      if(assemble.options.collections.hasOwnProperty(collection) && 'pages' !== collection) {
        data[collection] = assemble.options.collections[collection].items;
      }
    }

    // Write to file.
    var basename = path.join(assemble.options.context.dest, grunt.task.current.target);
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