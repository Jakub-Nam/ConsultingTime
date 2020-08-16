const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer')/* ({ grid: 'autoplace', browsers: ['&gt; 1%'] }) */

gulp.task('css', function () {
    const plugins = [
        autoprefixer
    ];
    return gulp.src('src/styles/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist/styles'));
});