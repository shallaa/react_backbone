var gulp = require('gulp');
var sass = require('gulp-sass');
//var sprite = require('gulp-spritesmith');
var compass = require('gulp-compass');
var notify = require('gulp-notify');

gulp.task('compass', function() {
  gulp.src('app/**/*.scss')
    .pipe(compass({
      css: 'public/css',
      sass: 'public/css',
      image: 'public/images'
    }))
    .pipe(gulp.dest('public/css'));
});

//gulp.task('sprite', function() {
//  gulp.src('app/**/*.png')
//    .pipe(sprite({
//      destImg: 'app/images/',
//      destCSS: 'app/sass'
//    }));
//});

gulp.task('sass', ['sprite'], function() {
  gulp.src('app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css/'))
    .pipe(notify('Build SASS'));
});

gulp.task('watch:sprite', function() {
  gulp.watch('app/**/*.png', ['sprite']);
});

gulp.task('watch:sass', ['sass'], function() {
  gulp.watch('app/**/*.sass', ['sass']);
});