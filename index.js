'use strict';
var path = require('path');

module.exports = {
  name: 'ember-bourbon',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },
  treeForStyles: function() {
    var bourbonPath = path.join(this.app.bowerDirectory, 'bourbon', 'dist');
    var bourbonTree = this.pickFiles(this.treeGenerator(bourbonPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return bourbonTree;
  }
};
