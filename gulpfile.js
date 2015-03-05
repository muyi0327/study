/**
 * Created by yang.fei on 2014/11/20.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pngquant = require('imagemin-pngquant'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('compress', function(){
    return gulp.src(['app/gulp/**/*.js'])
            .pipe(uglify())
            .pipe(concat('app.js'))
            .pipe(gulp.dest('app/dest'));
});

gulp.task('imgmin', function(){
    return gulp.src(['app/images/*'])
        .pipe(imagemin({
            progressive: true,
            optimizationLevel : 5,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('app/dest/images'));
});