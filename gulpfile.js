var mdify = require('./mdify.js'),
    gulp = require('gulp');

gulp.task('md to html', function(){
    mdify();
});

gulp.task('default', ['md to html']);