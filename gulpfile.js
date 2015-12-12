var gulp = require('gulp'),
    mdify = require('gulp-markdown');

gulp.task('md to html', function () {
    gulp
    .src('src/layouts/*.md')
    .pipe(mdify())
    .pipe(gulp.dest('src/html'));
});

gulp.task('default', ['md to html']);

