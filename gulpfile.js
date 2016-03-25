var gulp = require('gulp'),
    ts = require('gulp-ts'),
    neat = require('node-neat').includePaths,
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify');

var path = {
  scripts: ['src/js/*.ts'],
  styles: ['src/css/**/*.sass'],
  html: ['./src/*.jade']
};

gulp.task('css', function () {
  return gulp.src(path.styles)
    .pipe(sass({outputStyle: 'expand', includePaths: ['./src/css'].concat(neat),}).on('error', sass.logError))
  .pipe(gulp.dest('./dest/css'));
});

gulp.task('scripts', function () {
  return gulp.src(path.scripts)
  .pipe(ts())
  .pipe(uglify())
  .pipe(gulp.dest('./dest/js'));
});

gulp.task('html', function () {
  return gulp.src(path.html)
  .pipe(jade())
  .pipe(gulp.dest('./dest'));
});

gulp.task('watch', function() {
  gulp.watch(path.scripts, ['scripts']);
  gulp.watch(path.styles, ['css']);
  gulp.watch(path.html, ['html']);
});

gulp.task('default', ['html', 'css', 'watch']);