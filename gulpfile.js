// Gulp file for builing css from scss
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var options = {};

gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest(options.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// watch task
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
});

// live reload
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'doc'
    }
  });
});

gulp.task('serve', function() {
  options.dest = './doc/css/';
  gulp.start('watch');
});

gulp.task('default', function() {
  options.dest = './dist/';
  gulp.start('sass');
});
