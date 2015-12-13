var gulp = require('gulp'),
    mdify = require('gulp-markdown');

gulp.task('md to html', function () {
    gulp
    .src('src/markdown/*.md')
    .pipe(mdify())
    .pipe(gulp.dest('src/html'));
});
gulp.task('watch', function() {
    gulp.watch('src/markdown/*.md', ['md to html']);
});

gulp.task('default', ['md to html', 'watch']);

