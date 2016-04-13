var gulp      = require('gulp');
var sass      = require('gulp-ruby-sass');
var maps      = require('gulp-sourcemaps');
var paths     = {
	styles: 'src/*.s*ss',
};

// Convert, minify and sourcemap the styles
gulp.task('styles', function () {
 	return sass(paths.styles, {
		style: 'compressed',
		sourcemap: true })
	.pipe(maps.write('../maps'))
    .pipe(gulp.dest('pub/css'));
});

// Watch directories
gulp.task('watch',function() {
  gulp.watch(paths.styles, ['styles']);
});

// Default
gulp.task('default', ['watch', 'styles']);
