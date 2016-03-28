module.exports = function (grunt) {
    const src = {
        main: "src/**/*",
        ts: "src/**/*.ts",
        indexFile: "src/index.html",
        lib:[
            "node_modules/angular/angular.js"
        ]
    };
    const dist = {
        main: "dist/",
        libDir: "dist/lib/",
        libFile: "dist/lib.js",
        tsDir: "dist/ts/",
        indexFile: "dist/index.html",
        productFile: "dist/product.js"
    };

    grunt.initConfig({
        clean: {
            folder: dist.main
        },
        'ts': {
            default: {
                src: [src.ts],
                outDir: dist.tsDir
            }
        },
        'copy': {
            index: {
                src: [src.indexFile],
                dest: dist.indexFile
            },
            lib: {
                src: src.lib,
                dest: dist.libDir
            }
        },
        concat: {
            product: {
                src: dist.tsDir + "/**/*.js",
                dest: dist.productFile
            },
            lib: {
                src: src.lib,
                dest: dist.libFile
            }
        },
        'sails-linker': {
            dev: {
                options: {
                    startTag: '<!--SCRIPTS-->',
                    endTag: '<!--SCRIPTS END-->',
                    fileTmpl: '<script type="text/javascript" src="%s"></script>',
                    appRoot: dist.main
                },
                files: {
                    // Target-specific file lists and/or options go here.
                    'dist/index.html': [dist.libDir + "/**/*.js", dist.tsDir + "/**/*.js"]
                }
            },
            default: {
                options: {
                    startTag: '<!--SCRIPTS-->',
                    endTag: '<!--SCRIPTS END-->',
                    fileTmpl: '<script type="text/javascript" src="%s"></script>',
                    appRoot: dist.main
                },
                files: {
                    // Target-specific file lists and/or options go here.
                    'dist/index.html': [dist.libFile, dist.productFile]
                }
            }
        },
        watch: {
            all: {
                files: src.main,
                tasks: "default"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sails-linker');
    grunt.loadNpmTasks('grunt-sails-linker');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask("dev", ["clean", "ts", "copy", "sails-linker:dev"]);
    grunt.registerTask("default", ["clean", "ts", "copy","concat", "sails-linker:default"]);
};
