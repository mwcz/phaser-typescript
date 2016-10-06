const gulp = require('gulp');
const shell = require('gulp-shell');

const SRC_DIR = 'src';
const OUT_DIR = 'build';

const TS_FILES = [`${SRC_DIR}/**/*.ts`];
const OTHER_FILES = [`${SRC_DIR}/**/*`, `!${SRC_DIR}/**/*.ts`];

function copyTask() {
    return gulp.src(OTHER_FILES, { base: SRC_DIR }).pipe(gulp.dest(OUT_DIR));
}

function watchTask() {
    gulp.watch(TS_FILES, ['ts']);
    gulp.watch(OTHER_FILES, ['copy']);
}

gulp.task('ts', shell.task(['tsc']));
gulp.task('copy', copyTask);
gulp.task('watch', ['ts', 'copy'], watchTask);
gulp.task('default', ['ts', 'copy']);
