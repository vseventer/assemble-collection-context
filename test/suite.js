// Imports.
var fs = require('fs');

// Test suite.
describe('assemble-collection-context', function() {
  // Set-up.
  before(function() {
    this.pages   = fs.readFileSync(__dirname + '/actual/pages-test.html', { encoding: 'utf-8' });
    this.tags    = fs.readFileSync(__dirname + '/actual/tags-test.html', { encoding: 'utf-8' });
    this.widgets = fs.readFileSync(__dirname + '/actual/widgets-test.html', { encoding: 'utf-8' });
  });

  // Cleanup.
  after(function() {
    delete this.pages;
    delete this.tags;
    delete this.widgets;
  });

  // Tests.
  it('should have collection: pages context.', function() {
    if(-1 === this.pages.indexOf('Post Title')) {
      throw new Error('Output is missing post title.');
    }
  });
  it('should have collection: tags context.', function() {
    var _this = this;
    [ 'post', 'test' ].forEach(function(tag) {
      if(-1 === _this.tags.indexOf(tag)) {
        throw new Error('Output is missing tag: ' + tag);
      }
    });
  });
  it('should have collection: widgets (custom) context.', function() {
    var _this = this;
    [ 'foo', 'bar' ].forEach(function(widget) {
      if(-1 === _this.widgets.indexOf(widget)) {
        throw new Error('Output is missing widget: ' + widget);
      }
    });
  });
});