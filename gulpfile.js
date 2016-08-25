var gulp         = require('gulp');
var sass         = require('gulp-sass');
var pump         = require('pump');
var uglify       = require('gulp-uglify');
var htmlmin      = require('gulp-htmlmin');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

// Compile sass source to vanilla css.
gulp.task('build-css', function(cb) {
    return gulp
        .src('./sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./build'));
});

// Vendor prefix any necessarily css properties.
gulp.task('post-css', ['build-css'], function(cb) {
    return gulp
        .src('./build/*.css')
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(gulp.dest('./dist'));
});

// Compile and concat js source.
gulp.task('build-js', function(cb) {
    pump([
        gulp.src('./js/*.js'),
        uglify(),
        gulp.dest('./dist')
    ], cb);
});

// Compile and concat html source.
gulp.task('build-html', function(cb) {
    return gulp
        .src('./html/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['build-css', 'post-css', 'build-js', 'build-html']);
