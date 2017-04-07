module.exports = function (grunt) {

grunt.initConfig({
  critical: {
    dist: {
      options: {
        base: './'
      },
      // The source file
       src: '*.html',
      dest:  'dist/'
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');

  // Default tasks.
  grunt.registerTask('default', ['critical']);
};
