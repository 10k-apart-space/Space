var gulp         = require('gulp');
var sass         = require('gulp-sass');
var pump         = require('pump');
var uglify       = require('gulp-uglify');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

// Compile sass source to vanilla css.
gulp.task('build-css', function(cb) {
    return gulp
        .src('./sass/index.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./build'));
});

// Vendor prefix any necessarily css properties.
gulp.task('post-css', ['build-css'], function(cb) {
    return gulp
        .src('./build/index.css')
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(gulp.dest('./dist'));
});

// Compile and concat js source.
gulp.task('build-js', function(cb) {
    pump([
        gulp.src('./js/index.js'),
        uglify(),
        gulp.dest('./dist')
    ], cb);
});

gulp.task('default', ['build-css', 'post-css', 'build-js']);
