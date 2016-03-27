module.exports = function (grunt) {
    grunt.initConfig({
        'src': {
            ts: "src/**/*.ts",
            index: 'src/index.html'
        },
        'dist': {
            'ts': 'dist/ts',
            index: 'dist/index.html'
        },
        'ts': {
            default: {
                src: ["<%=src.ts%>"],
                outDir: "<%=dist.ts%>"
            }
        },
        'copy': {
            files: {
                dest: '<%=dist.index%>',
                src: ["<%=src.index%>"]

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
                    '<%=dist.index%>': ["node_modules/angular/angular.js", "<%=dist.ts%>/**/*.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-copy');
    grunt.loadNpmTasks('grunt-sails-linker');

    grunt.registerTask("default", ["ts", "copy", "sails-linker"]);
};
