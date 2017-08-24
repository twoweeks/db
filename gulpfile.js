'use strict'

let
	gulp =        require('gulp'),
	rename =      require('gulp-rename'),
	plumber =     require('gulp-plumber'),
	json_min =    require('gulp-json-minify')

let paths = {
	crude:  ['json/**/*.json', '!json/min/**/*.json'],
	min:    'json/min/'
}

gulp.task('json:minify', () => gulp.src(paths.crude)
	.pipe(plumber())
  .pipe(json_min())
	.pipe(gulp.dest(paths.min))
)
