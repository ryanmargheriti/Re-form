module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'gh-pages': {
      options: {
        base: 'site'
      },
      src: ['**']
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['copy:demo'],
        options: {
          spawn: false,
        },
      },
    },
    copy: {
      demo: {
        files: [
          {expand: true, src: ['scripts/*'], dest: 'site/', filter: 'isFile'},
        ]
      }
    }
    // sass: {
    //   dist: {
    //     files: {
    //       'dist/styles/demo.css': 'src/styles/demo.scss'       // 'destination': 'source'
    //     }
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt.registerTask('deploy', ['githubPages:target']);
  grunt.registerTask('default', ['copy:demo']);
  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('deploy', ['gh-pages']);

};
