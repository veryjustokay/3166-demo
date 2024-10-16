module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      // sass config
      sass: {
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
              'css/style.css': 'sass/style.scss'
          }
        }
      },
      // watch config
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
      }
    });
  
    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default', ['watch','sass']);
  
  };