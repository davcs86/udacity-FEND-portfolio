// Generated on 2015-11-04 using
// generator-webapp 1.1.0
'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= config.app %>/scripts/{,*/}*.js'],
                tasks: ['eslint']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['sass', 'postcss']
            },
            styles: {
                files: ['<%= config.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'postcss']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        eslint: {
            target: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/{,*/}*.js',
                '!<%= config.app %>/scripts/vendor/*'
            ]
        },

        // Compiles Sass to CSS and generates necessary files if requested
        sass: {
            options: {
                sourceMap: true,
                sourceMapEmbed: true,
                sourceMapContents: true,
                includePaths: ['.']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/styles',
                    src: ['*.{scss,sass}'],
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    // Add vendor prefixed styles
                    require('autoprefixer')({
                        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
                    })
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        wiredep: {
            app: {
                src: ['<%= config.app %>/index.html'],
                exclude: ['bootstrap.js'],
                ignorePath: /^(\.\.\/)*\.\./
            },
            sass: {
                src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: /^(\.\.\/)+/
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: [
                    '<%= config.dist %>',
                    '<%= config.dist %>/images',
                    '<%= config.dist %>/styles'
                ]
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        responsive_images: {
            dist: {
                options: {
                    engine: 'im',
                    sizes: [
                        {
                            width: 245,
                            suffix: '_1x',
                            quality: 50
                        },{
                            width: 245,
                            suffix: '_2x',
                            quality: 70
                        },
                        {
                            width: 320,
                            suffix: '_1x',
                            quality: 50
                        },{
                            width: 320,
                            suffix: '_2x',
                            quality: 70
                        },
                        {
                            width: 360,
                            suffix: '_1x',
                            quality: 60
                        },
                        {
                            width: 360,
                            suffix: '_2x',
                            quality: 80
                        },
                        {
                            width: 522,
                            suffix: '_1x',
                            quality: 60
                        },
                        {
                            width: 522,
                            suffix: '_2x',
                            quality: 80
                        },
                        {
                            width: 752,
                            suffix: '_2x',
                            quality: 80
                        },
                        {
                            width: 1160,
                            suffix: '_1x',
                            quality: 70
                        },
                        {
                            width: 1160,
                            suffix: '_2x',
                            quality: 90
                        }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: ['{,*/}*.{gif,jpeg,jpg,png}','!fixed/*','!banner/*'],
                    dest: '<%= config.dist %>/images'
                }]
            },
            banner: {
                options: {
                    engine: 'im',
                    sizes: [
                        {
                            width: 320,
                            suffix: '_1x',
                            quality: 50
                        },{
                            width: 320,
                            suffix: '_2x',
                            quality: 70
                        },
                        {
                            width: 522,
                            suffix: '_1x',
                            quality: 50
                        },{
                            width: 522,
                            suffix: '_2x',
                            quality: 70
                        },
                        {
                            width: 752,
                            suffix: '_1x',
                            quality: 60
                        },
                        {
                            width: 752,
                            suffix: '_2x',
                            quality: 80
                        },
                        {
                            width: 1160,
                            suffix: '_1x',
                            quality: 70
                        },
                        {
                            width: 1160,
                            suffix: '_2x',
                            quality: 90
                        }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images/banner',
                    src: ['{,*/}*.{gif,jpeg,jpg,png}'],
                    dest: '<%= config.dist %>/images/banner'
                }]
            }
        },

        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images/fixed',
                    src: ['{,*/}*.{gif,jpeg,jpg,png}'],
                    dest: '<%= config.dist %>/images/fixed'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    // true would impact styles with attribute selectors
                    removeRedundantAttributes: false,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    //dot: true,
                    cwd: '.',
                    src: [
                        'bower_components/bootstrap-sass/assets/fonts/bootstrap/*',
                        'bower_components/polymer/polymer*.html',
                        'bower_components/paper-*/{-,*/}*.*',
                        'bower_components/paper-*/*',
                        'bower_components/neon-*/{-,*/}*.*',
                        'bower_components/neon-*/*',
                        'bower_components/iron-*/{-,*/}*.*',
                        'bower_components/iron-*/*',
                        'bower_components/font-*/*',
                        'bower_components/web-animations-js/web-*.js'
                    ],
                    dest: '<%= config.dist %>'
                }]
            }
        },

        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            dist: {
                devFile: 'bower_components/modernizr/modernizr.js',
                outputFile: '<%= config.dist %>/scripts/vendor/modernizr.js',
                files: {
                    src: [
                        '<%= config.dist %>/scripts/{,*/}*.js',
                        '<%= config.dist %>/styles/{,*/}*.css',
                        '!<%= config.dist %>/scripts/vendor/*'
                    ]
                },
                uglify: true
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'sass'
            ],
            dist: [
                'sass',
                'responsive_images',
                'responsive_images:banner',
                'imagemin',
                'svgmin'
            ]
        }
    });

    grunt.registerTask('default', [
        'newer:eslint',
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'postcss',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'modernizr',
        //'filerev',
        'usemin',
        'htmlmin'
    ]);
};
