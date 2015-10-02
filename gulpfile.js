var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st'),
    minify = require('gulp-minify-css');

gulp.task('sass', function() {
  gulp.src('src/*.scss')  
    .pipe(minify({compatibility: 'ie8'}))
    .pipe(sass())
    .pipe(gulp.dest('styles'))
    .pipe(livereload());
});

gulp.task('watch', ['server'], function() {
  livereload.listen();
  gulp.watch('src/*.scss', ['sass']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname, index: 'index.html', cache: false })
  ).listen(8080, done);
});

gulp.task('default', ['watch']);