module.exports = function (grunt) {
    grunt.initConfig({
        src: {
            ts:"src/**/*.ts"
        },
        ts: {
            default: {
                src: ["<%=src.ts%>", "!src/lib.ts"],
                outDir: "dist"
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};
