const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

exports.styles = () => (
    gulp.src('css/*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'))
);
