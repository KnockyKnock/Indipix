module.exports = function (grunt) {
    grunt.initConfig ({
        
        less : {
            app : {
                files : {"less/wide.less" : "styles/wide.css"}
            }
        },
        
        watch: {
            styles: {
                files: ["less/**/*.less"],
                tasks: ["less:app"],
                options: {spawn: false}
            }
        }
    });
    
    grunt.loadNpmTasks ("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
};