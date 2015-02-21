
var gulp  = require('gulp'),
    shell = require('gulp-shell');

var path = {
        js: 'index.js'
    }

gulp.task('watch', function() {
    gulp.watch(path.js, ['compile']);
});

gulp.task('compile', shell.task('browserify index.js -o bundle.js'));

gulp.task('default', ['compile', 'watch']);

