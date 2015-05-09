'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: "app/amd",
                    include: ['build', 'base/common', 'module/view', 'util/date'],
                    out: 'app/dist/js/main.min.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // plugin's task(s), then test the result.
    grunt.registerTask('build', ['requirejs']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);

};