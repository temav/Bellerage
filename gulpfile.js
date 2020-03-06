'use strict';

const gulp = require('gulp');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const inject = require('gulp-inject');
const del = require('del');
const browserSync = require('browser-sync').create();
const spritesmith = require('gulp.spritesmith');

gulp.task('clean', function (cb) {
    return del('build');
});

gulp.task('getting:css', function() {
    return gulp.src('src/styles/**/*.css')
        .pipe(debug({title: 'src'}))
        .pipe(concat('all.min.css'))
        .pipe(debug({title: 'concatination'}))
        .pipe(minifyCSS())
        .pipe(debug({title: 'minify-css'}))
        .pipe(gulp.dest('build'))
        .pipe(debug({title: 'build'}));
});

gulp.task('inject', function() {
    var sources = gulp.src(['build/**/*.css'], {read: false});
    var target = gulp.src('src/**/*.html');

    return target.pipe(inject(sources, { ignorePath: 'build/' })) 
        .pipe(debug({title: 'injection'}))
        .pipe(gulp.dest('build'))
        .pipe(debug({title: 'build'}));
});


gulp.task('assets', function() {
    return gulp.src('src/assets/**')
    .pipe(debug({title: 'src'}))
    .pipe(gulp.dest('build/assets/'))
    .pipe(debug({title: 'build'}));
});

gulp.task('sprite', function(cb){
    cb();
    var spriteData =
        gulp.src('./src/assets/img/brands/*.*')
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                algorithm: 'binary-tree',
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name.replace(/\s+/g, '').replace('@', '');
                }
            }));
    spriteData.img.pipe(gulp.dest('build'));
    spriteData.css.pipe(gulp.dest('src/styles/'));
});

gulp.task('build', gulp.series('clean','sprite', gulp.parallel('assets', gulp.series('getting:css', 'inject'))));

gulp.task('watch', function() {
    gulp.watch('src/styles/*.css', gulp.series('getting:css', 'inject'));
    gulp.watch('src/index.html', gulp.series('inject'));
});

gulp.task('server', function() {
    browserSync.init({
        server: 'build'
    });

    browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});





gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'server')));



