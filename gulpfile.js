const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

const SRC_DIR = 'src';
const OUT_DIR = 'build';

const TS_FILES = [`${SRC_DIR}/**/*.ts`];
const OTHER_FILES = [`${SRC_DIR}/**/*`, `!${SRC_DIR}/**/*.ts`];

function copyTask(event) {
    const path = event.path || OTHER_FILES;
    return gulp.src(path, { base: SRC_DIR }).pipe(gulp.dest(OUT_DIR));
}

function watchTask() {
    gulp.watch(TS_FILES, ['ts']);
    gulp.watch(OTHER_FILES, ['copy']);
}

function tsTask() {
    // typescript config lives in tsconfig.json
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(OUT_DIR));
}

gulp.task('ts', tsTask);
gulp.task('copy', copyTask);
gulp.task('watch', watchTask);
gulp.task('default', ['ts', 'copy']);
