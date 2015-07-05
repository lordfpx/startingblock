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

    // copy LESS files for distribution
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/less/',
            src: ['**', '!demo-page.less'],
            dest: 'dist/less/',
            filter: 'isFile'
          },
        ],
      },
    },

    // compile LESS and reload page as you code.
    watch: {
      less: {
        files: ['src/less/*.less'],
        tasks: ['less', 'copy'],
        options: {
          livereload: true
        }
      },
      jade: {
        files: 'src/**/*.jade',
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
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Just grunt and work
  grunt.registerTask('default', ['less', 'copy', 'jade', 'watch']);
};