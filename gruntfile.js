'use strict';

module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assets: grunt.file.readJSON('config/assets.json'),
        watch: {
            js: {
                files: ['gruntfile.js', 'server.js', 'app/**/*.js', 'public/js/**', 'test/**/*.js'],
                tasks: ['jshint'],
                options: {
                    // livereload: true
                }
            },
            html: {
                files: ['public/views/**', 'app/views/**'],
                options: {
                    // livereload: true
                }
            },
            css: {
                files: ['public/brackets/css/style.default.scss'],
                tasks: ['sass:dev'],
                options: {
                    // livereload: true
                }
            }
        },
        jshint: {
            all: {
              // src: ['gruntfile.js', 'server.js', 'app/**/*.js', 'public/js/**', 'test/**/*.js', '!test/coverage/**/*.js'],
                src: [],
                options: {
                    jshintrc: true
                }
            }
        },
        uglify: {
            production: {
                files: '<%= assets.js %>'
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            all: {
                // src: ['public/css/**/*.css']
                src: []
            }
        },
        cssmin: {
            combine: {
                files: '<%= assets.css %>'
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    args: [],
                    ignore: ['public/**'],
                    ext: 'js,html',
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        mochaTest: {
            options: {
                reporter: 'spec',
                require: 'server.js'
            },
            src: ['test/mocha/**/*.js']
        },
        env: {
            test: {
                NODE_ENV: 'test'
            }
        },
        karma: {
            unit: {
                configFile: 'test/karma/karma.conf.js'
            }
        },
        sass: {                              // Task
            dev: {                            // Target
              options: {                       // Target options
                style: 'expanded',
                lineNumbers: true,

              },
              files: {                         // Dictionary of files
                'public/build/css/dist.min.css': 'public/brackets/css/style.default.scss'       // 'destination': 'source'
              }
            },
            dist: {                            // Target
              options: {                       // Target options
                style: 'compressed'
              },
              files: {                         // Dictionary of files
                'public/build/css/dist.min.css': 'public/brackets/css/style.default.scss'       // 'destination': 'source'
              }
            }
        }
    });

    //Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-env');

    //Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    //Default task(s).
    if (process.env.NODE_ENV === 'production') {
        grunt.registerTask('default', ['jshint', 'csslint', 'sass:dist', 'uglify', 'concurrent']);
    } else {
        grunt.registerTask('default', ['jshint', 'csslint', 'sass:dev', 'concurrent']);
    }

    //Test task.
    grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
};
