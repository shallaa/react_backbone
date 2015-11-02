var gulp = require('gulp');
var react = require('gulp-react');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var browserify = require('browserify');
var reactify = require('reactify');
var sourcestream = require('vinyl-source-stream');

gulp.task('js', function() {
  return browserify('app/app.js', { debug: true})
    .transform(reactify)
    .bundle()
    .on('error', gutil.log.bind('gutil', 'Browserify Error'))
    .pipe(sourcestream('app.js'))
    .pipe(gulp.dest('public/js/'))
    .pipe(notify('Build JavaScript'));
});

gulp.task('watch:js', ['js'], function() {
  gulp.watch('app/**/*.js', ['js']);
});