var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	autoprefixer 	= require('gulp-autoprefixer'),
	minifycss 		= require('gulp-minify-css'),
	rename 			= require('gulp-rename'),
	jade			= require('gulp-jade');

gulp.task('express', function() {
	var express = require('express'),
		app 	= express();
  
	app.use(require('connect-livereload')({port: 35729}));
	app.use(express.static(__dirname));
	app.listen(4000, '0.0.0.0');
});

var tinylr;
gulp.task('livereload', function() {
	tinylr = require('tiny-lr')();
	tinylr.listen(35729);
});

function notifyLiveReload(event) {
	var fileName = require('path').relative(__dirname, event.path);

	tinylr.changed({body: {
			files: [fileName]
		}
	});
}

gulp.task('styles', function() {
	return gulp.src('src/css/*.scss')
		.pipe(sass({
			precision: 10, 
			onError: console.error.bind(console, 'Sass error:')
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('styles'));
});

gulp.task('watch', function() {
	gulp.watch('src/styles/**.scss', ['styles']);
	gulp.watch('src/html/**.jade', ['jade']);
	gulp.watch('**.html', notifyLiveReload);
	gulp.watch('styles/**.css', notifyLiveReload);
});

gulp.task('jade', function(){
	return gulp.src('src/html/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('.'))
})

gulp.task('default', ['styles', 'jade', 'express', 'livereload', 'watch'], function() {

}); 