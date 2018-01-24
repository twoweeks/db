'use strict'

let
	gulp = require('gulp'),
	tube = require('gulp-pipe')

let json = {
	minify:  require('gulp-json-minify'),
	lint:    require('gulp-jsonlint')
}

let paths = {
	crude: 'json/*.json',
	master: {
		min: 'json/min/'
	}
}

gulp.task('json:minify', () => tube([
	gulp.src(paths.crude),
	json.lint(),
	json.lint.reporter(),
	json.lint.failAfterError(),
	json.minify(),
	gulp.dest(paths.master.min)
]))

gulp.task('build', ['json:minify'])
