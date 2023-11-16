const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const { parallel } = require('gulp');

function compJs() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/assets/js'));
}

function compSass() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/assets/css'));
}

exports.sass = compSass;
exports.Js = compJs;
exports.build = parallel(compSass, compJs);

exports.watch = function () {
    gulp.watch('./src/scss/*.scss', gulp.series(compSass));
    gulp.watch('./src/js/*.js', gulp.series(compJs));
}