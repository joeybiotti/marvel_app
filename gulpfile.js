const gulp = require('gulp');
const eslint = require('eslint');

//Lint Scripts
gulp.task('lint', function(){
    gulp.src('../scripts/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
});

//Default
gulp.task('default', ['lint']);