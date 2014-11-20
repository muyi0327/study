/**
 * Created by yang.fei on 2014/11/20.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('flex', function(){
    gulp.src('./sass/flex/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css3/flex/css'));
});