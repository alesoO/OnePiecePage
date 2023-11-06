const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

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

exports.watch = function () {
    gulp.watch('./source/styles/*.scss', gulp.series(compSass));
    gulp.watch('./source/js/*.js', gulp.series(compJs));
}