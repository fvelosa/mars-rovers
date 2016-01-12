// Dependencies
var gulp = require('gulp');
var mocha = require('gulp-mocha');

// Task
gulp.task('integration-tests', function () {
	return gulp.src('test/**/*.spec.js')
		.pipe(mocha({
			bail: false,
			reporter: "nyan"
		}));
});

gulp.task('watch:integration-tests', function () {
	gulp.watch(['app.js', 'routes/**/*.js', 'test/**/*.js'], ['integration-tests']);
});