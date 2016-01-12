'use strict';

// Dependencies
var gulp = require('gulp');
var mocha = require('gulp-mocha');

var files = ['api/**/*.spec.js']
var watch_files = files.concat(['api/**/*.js'])

// Task
gulp.task('unit-tests', function () {
	return gulp.src(files)
		.pipe(mocha({
				bail: false,
				reporter: 'nyan'
			}).on('error', function () {})
			//do nothing
		);
});

gulp.task('watch:unit-tests', function () {
	gulp.watch(watch_files, ['unit-tests']);
});