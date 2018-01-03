'use strict'

let
	gulp =      require('gulp'),
	plumber =   require('gulp-plumber'),
	json_min =  require('gulp-json-minify')

let paths = {
	crude: 'json/*.json',
	master: {
		min: 'json/min/'
	}
}

gulp.task('json:minify', () => gulp.src(paths.crude)
	.pipe(plumber())
	.pipe(json_min())
	.pipe(gulp.dest(paths.master.min))
)

gulp.task('build', ['json:minify'])
