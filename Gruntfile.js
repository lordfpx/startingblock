/*global module:false */

module.exports = function (grunt) {

  var gruntConfig = {};

  var pkg = 'package.json';

  gruntConfig.pkg = grunt.file.readJSON(pkg);

  gruntConfig.bumpup = {
    files: ['package.json', 'bower.json']
  };

  gruntConfig.tagrelease = {
    file: pkg,
    commit:  true,
    message: 'Release %version%',
    prefix:  'v',
    annotate: false
  };

  gruntConfig.less = {
    build: {
      files: {
        'css/startingblock.css': 'less/startingblock.less'
      }
    }
  };

  gruntConfig.copy = {
    polyfiles: {
      files: [
        {
          src: ["**/*"], expand: true,
          cwd: "less/*.htc",
          dest: "css/"
        }
      ]
    }
  };

  gruntConfig.watch = {
    less: {
      files: ['less/*.less'],
      tasks: ['less:build']
    }
  };

  gruntConfig.concurrent = {
    start: {
      tasks: ['watch'],
      options: { logConcurrentOutput: true }
    }
  };

  grunt.initConfig(gruntConfig);

  grunt.registerTask('build', [
    'less', 'copy'
  ]);
  grunt.registerTask('default', ['build']);
};
