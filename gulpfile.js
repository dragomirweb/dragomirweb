var gulp = require("gulp");
var sass = require("gulp-sass");
var pug  = require("gulp-pug");
var tinypng = require('gulp-tinypng-compress');
var htmlbeautify = require('gulp-html-beautify');

gulp.task('sass', function(){
    var stream = gulp.src('src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css/'));
    
    return stream;
});

gulp.task('pug', function(){
    var stream = gulp.src('./src/views/*.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('./src/html/'));
    
    return stream;
});

gulp.task('img', function () {
    var stream = gulp.src('/src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'WphZFRN64HCYMqw_wpxOjUNA_kHCOEe0',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('dist/img/'));
        
        return stream;
});

gulp.task('htmlbeautify', function() {
    var stream = gulp.src('./src/html/*.html')
    .pipe(htmlbeautify({indentSize: 2}))
    .pipe(gulp.dest('./dist/'));
    
    return stream;
});

gulp.task('watch', function(){
   gulp.watch('src/sass/*.scss', [sass]);
   gulp.watch('src/views/**/*.pug', [pug]);
   gulp.watch('src/html/*.html', [htmlbeautify]);
});