var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var del = require('del');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var css = require('gulp-cssnano');
var riger = require('gulp-rigger');
var media = require('gulp-merge-media-queries');
var html = require('gulp-htmlmin');
var img = require('gulp-imagemin');

var path = {
    work: {
        html: 'work/*.html',
        scss: 'work/scss/**/*.scss',
        img: 'work/img/**/*.+(png|jpg|gif|svg)',
        fonts: 'work/fonts/**/*.*',
        js: 'work/script/**/*.js',
    },
    result: {
        html: 'result/',
        css: 'result/css/',
        img: 'result/img/',
        fonts: 'result/fonts/',
        js: 'result/script/',
    },
};

gulp.task( 'html', function () {
    return gulp.src(path.work.html)
        .pipe(riger())
        .pipe(gulp.dest(path.result.html))
        .pipe(browserSync.reload({stream: true}))
    });

gulp.task('scss', function () {
    return gulp.src(path.work.scss)
        .pipe(scss().on('error', scss.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(css())
        .pipe(gulp.dest(path.result.css))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('img', function () {
    return gulp.src(path.work.img)
        .pipe(img())
        .pipe(gulp.dest(path.result.img))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task('fonts', function () {
    return gulp.src(path.work.fonts)
        .pipe(gulp.dest(path.result.fonts))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('clear', function () {
    return del.sync(path.result.html)
});

gulp.task('watch', function () {
    gulp.watch(path.work.html, ['html']);
    gulp.watch(path.work.scss, ['scss']);
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: './result'
        },
        notify: false
    });
});

gulp.task('start', ['clear', 'html', 'scss', 'img', 'fonts', 'server', 'watch']);

