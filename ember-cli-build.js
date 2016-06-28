/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  if (app.env === 'development'){
    app.import('bower_components/metisMenu/dist/metisMenu.css')
    app.import('bower_components/metisMenu/dist/metisMenu.js')
    app.import('bower_components/datatables/media/css/dataTables.bootstrap.css')
    app.import('bower_components/datatables/media/js/jquery.dataTables.js')
    app.import('bower_components/datatables/media/js/dataTables.bootstrap.js')
    app.import('bower_components/jquery.easing/js/jquery.easing.js')
    app.import('bower_components/bootstrap/js/scrollspy.js')
  }
  if (app.env === 'test'){

  }
  if (app.env === 'production'){
    app.import('bower_components/metisMenu/dist/metisMenu.min.css')
    app.import('bower_components/metisMenu/dist/metisMenu.min.js')
    app.import('bower_components/datatables/media/css/dataTables.bootstrap.min.css')
    app.import('bower_components/datatables/media/js/jquery.dataTables.min.js')
    app.import('bower_components/datatables/media/js/dataTables.bootstrap.min.js')
    app.import('bower_components/jquery.easing/js/jquery.easing.js')
    app.import('bower_components/bootstrap/js/scrollspy.js')
  }

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
