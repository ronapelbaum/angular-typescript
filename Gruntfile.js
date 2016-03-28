module.exports = function (grunt) {
    const src = {
        ts: "src/**/*.ts",
        index: "src/index.html"
    };
    const dist = {
        main: "dist/",
        lib: "dist/lib/",
        ts: "dist/ts",
        index: "dist/index.html"
    };

    grunt.initConfig({
        clean: {
            folder: dist.main
        },
        'ts': {
            default: {
                src: [src.ts],
                outDir: dist.ts
            }
        },
        'copy': {
            index: {
                src: [src.index],
                dest: dist.index
            },
            lib: {
                src: "node_modules/angular/angular.js",
                dest: dist.lib
            }
        },
        'sails-linker': {
            defaultOptions: {
                options: {
                    startTag: '<!--SCRIPTS-->',
                    endTag: '<!--SCRIPTS END-->',
                    fileTmpl: '<script type="text/javascript" src="%s"></script>',
                    appRoot: 'app/'
                },
                files: {
                    // Target-specific file lists and/or options go here.
                    'dist/index.html': [dist.lib + "/**/*.js", dist.ts + "/**/*.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sails-linker');

    grunt.registerTask("default", ["clean", "ts", "copy", "sails-linker"]);
};
