'use strict';

var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

gulp.task('default', function() {
    return gulp.src('./*.scss')
        .pipe(scsslint({bundleExec: true}))
        .pipe(scsslint.failReporter());
});
