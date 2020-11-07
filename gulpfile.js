const gulp          = require("gulp");
const sass          = require("gulp-sass");
const gcmq          = require("gulp-group-css-media-queries");
const csso          = require("gulp-csso");
const autoprefixer  = require("gulp-autoprefixer");
const concat        = require("gulp-concat");

const inputFolder = "input";
const outputFolder = "output";

gulp.task("minify", function() {
    return gulp.src(inputFolder + "/**/*.css")
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie >= 10', 'Firefox > 20'],
            cascade: true
        }))
        .pipe(gcmq())
        .pipe(csso())
        .pipe(gulp.dest(outputFolder));
});