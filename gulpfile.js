var gulp = require('gulp'),
    mdsonify = require('markit-json');

gulp.task('md to html', function () {
    gulp
    .src('src/markdown/*.md')
    .pipe(mdsonify())
    .pipe(gulp.dest('src'));
});
gulp.task('watch', function() {
    gulp.watch('src/markdown/*.md', ['md to html']);
});

gulp.task('default', ['md to html', 'watch']);

