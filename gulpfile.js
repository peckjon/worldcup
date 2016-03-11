var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload');

gulp.task('default', function() {


	nodemon({
		script: 'app.js',
		ext: 'js html'
	}).on('restart', function(){
		gulp.src('app.js')
			.pipe(livereload());
	});

    livereload.listen();
});
