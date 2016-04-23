var gulp    = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass    = require('gulp-ruby-sass'),
    notify  = require('gulp-notify'),
    paths   = {
        publicUi: './ui/public',
        sourcesUi: './ui/sources/sass',
        includes: './node_modules'
    }

gulp.task('default', ['watch'], function(){
    gulp.start('nodemon', 'css', 'icons');
});

gulp.task('css', function(){
    return sass(paths.sourcesUi + '/site.scss',{
            style: 'compressed',
            loadPath: [
                paths.sourcesUi,
                paths.includes + '/bootstrap-sass/assets/stylesheets',
                paths.includes + '/font-awesome/scss'
            ]
        }).on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }))
        .pipe(gulp.dest(paths.publicUi + '/css'));
});

gulp.task('nodemon', function(){
    nodemon({
        script: 'app.js',
        ext: 'js nj'
    });
});

gulp.task('icons', function(){
    return gulp.src(paths.includes + '/font-awesome/fonts/**.*')
            .pipe(gulp.dest(paths.publicUi + '/fonts'));
});

gulp.task('watch', function(){
    gulp.watch(paths.sourcesUi + '/*.scss', ['css']);
});
