'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const inject = require('gulp-inject');
const del = require('del');

gulp.task('clean', function () {
    return del('build');
});

gulp.task('getting:css', function() {
    return gulp.src('src/styles/**/*.css')
    .pipe(debug({title: 'src'}))
    .pipe(concat('style_total.css'))
    .pipe(debug({title: 'concatination'}))
    .pipe(minifyCSS())
    .pipe(debug({title: 'minify-css'}))
    .pipe(gulp.dest('build'))
    .pipe(debug({title: 'build'}));
});

gulp.task('inject', function() {
    var sources = gulp.src(['build/**/*.css'], {read: false});
    var target = gulp.src('src/**/*.html');
    return target.pipe(inject(sources)) 
    .pipe(debug({title: 'injection'}))
    .pipe(gulp.dest('build'))
    .pipe(debug({title: 'build'}));
});

gulp.task('assets', function() {
    return gulp.src('src/assets/**')
    .pipe(debug({title: 'src'}))
    .pipe(gulp.dest('build'))
    .pipe(debug({title: 'build'}));
});

gulp.task('build', gulp.series('clean', 'getting:css', gulp.parallel('assets', 'inject')));