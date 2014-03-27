module.exports = function(grunt) {
  grunt.initConfig({
    // Copy boxsizing polyfile for IE 7 (if you need it...)
    copy: {
      main: {
        expand: true,
        flatten: true,
        cwd: 'less/',
        src: ['boxsizing.htc'],
        dest: 'css/'
      }
    },
    // compile LESS
    less: {
      development: {
        files: {
          "css/startingblock.css": "less/startingblock.less",
          "css/demo-page.css": "less/demo-page.less" // this can be removed
        }
      }
    },
    // compile LESS and reload page as you code.
    watch: {
      css: {
        files: ['less/*.less', 'less/*/*.less'],
        tasks: ['less'],
        options: {
          livereload: true
        }
      },
      html: {
        files: 'index.html',
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Just grunt and work
  grunt.registerTask('default', ['copy', 'less', 'watch']);
};