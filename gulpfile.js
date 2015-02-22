
var gulp  = require('gulp'),
    shell = require('gulp-shell');

var paths = {
        js: {
            inMain: 'src/app.js',
            inAll : 'src/**/*.js',
            out   : 'public/bundle.js'
        }
    };

gulp.task('watch', function() {
    gulp.watch(paths.js.inAll, ['compile']);
});

gulp.task('compile', shell.task([
    'browserify', paths.js.inMain, '-o', paths.js.out
].join(' ')));

gulp.task('default', ['compile', 'watch']);
