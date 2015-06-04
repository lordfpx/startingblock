module.exports = function(grunt) {
  grunt.initConfig({
    // Copy boxsizing polyfile for IE 7 (if you need it...)
    copy: {
      main: {
        expand: true,
        flatten: true,
        cwd: 'src/less/',
        src: ['boxsizing.htc'],
        dest: 'dist/css/'
      }
    },

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
      css: {
        files: ['src/less/*.less'],
        tasks: ['less'],
        options: {
          livereload: true
        }
      },
      html: {
        files: 'src/index.jade',
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Just grunt and work
  grunt.registerTask('default', ['copy', 'less', 'jade', 'watch']);
};