module.exports = function(grunt) {
    grunt.initConfig({
        jsdoc : {
            dist : {
                src: ['js/*.js', 'test/*.js'],
                options: {
                    destination: 'doc',
                    template : "node_modules/ink-docstrap/template",
                    configure : "node_modules/ink-docstrap/template/jsdoc.conf.json"
                }
            }
        },
        watch: {
          scripts: {
            files: ['js/*.js'],
            tasks: ['jsdoc'],
            options: {
              spawn: false,
            },
          },
        },
    });

    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-watch');
}