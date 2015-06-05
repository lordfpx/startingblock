module.exports = function(grunt) {
  grunt.initConfig({
    // compile JADE
    jade: {
      main: {
        files: {
          "dist/index.html": "src/index.jade"
        }
      }
    },

    // compile LESS
    less: {
      main: {
        files: {
          "dist/css/startingblock.css": "src/less/startingblock.less",
          "dist/css/demo-page.css": "src/less/demo-page.less" // this can be removed
        }
      }
    },

    // compile LESS and reload page as you code.
    watch: {
      less: {
        files: ['src/less/*.less'],
        tasks: ['less'],
        options: {
          livereload: true
        }
      },
      jade: {
        files: 'src/index.jade',
        tasks: ['jade'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Just grunt and work
  grunt.registerTask('default', ['less', 'jade', 'watch']);
};