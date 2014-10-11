'use strict';
var path = require('path');
var pickFiles = require('broccoli-static-compiler');
var unwatchedTree  = require('broccoli-unwatched-tree');

module.exports = {
  name: 'ember-bourbon',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },
  treeForStyles: function() {
    var bourbonPath = path.join(this.app.bowerDirectory, 'bourbon', 'dist');
    var bourbonTree = pickFiles(unwatchedTree(bourbonPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return bourbonTree;
  }
};
