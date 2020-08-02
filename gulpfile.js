const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer')

gulp.task('css', function () {
    const plugins = [
        autoprefixer
    ];
    return gulp.src('css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist/styles'));
});