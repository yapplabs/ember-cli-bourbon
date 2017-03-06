/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-bourbon',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.bourbonPath = path.dirname(require.resolve('bourbon'));
    return app;
  },

  treeForStyles: function() {
    return new Funnel(this.bourbonPath, {
      srcDir: 'app/assets/stylesheets',
      destDir: 'app/styles',
      annotation: 'Funnel (bourbon)'
    });
  }
};
