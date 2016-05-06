const gulp = require('gulp')
const mocha = require('gulp-mocha')
const env = require('gulp-env')

require('./src/compiler.js')
require('babel-core/register')

gulp.task('mocha', function() {
  env({
    vars: {
      NODE_ENV: 'production'
    }
  })

  return gulp
    .src([
      './src/specHelper.js',
      './src/**/_tests_/*.spec.js'
    ])
    .pipe(mocha({
      reporter: 'dot'
    }))
})

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch([
    './src/**/*.js',
    './src/**/_tests_/*.spec.js'
  ], ['mocha'])
})

gulp.task('default', [
  'mocha',
  'watch'
])
