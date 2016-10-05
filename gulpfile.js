const gulp = require('gulp');
// const watch = require('gulp-watch');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

const SRC_DIR = 'src';
const OUT_DIR = 'build';

function watchCopyOut(event) {
    // console.log(`${event.path} was ${event.type}`);
    gulp.src(event.path, { base: SRC_DIR }).pipe(gulp.dest(OUT_DIR));
}

function watchTask() {
    // compile any typescript that changes
    gulp.watch(`${SRC_DIR}/**/*.ts`, ['ts']);
    // anything that isn't typescript, just copy it out
    gulp.watch([`${SRC_DIR}/**/*`, `!${SRC_DIR}/**/*.ts`], watchCopyOut);
}

function tsTask() {
    // typescript config lives in tsconfig.json
    const tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(OUT_DIR));
}

gulp.task('watch', watchTask);
gulp.task('ts', tsTask);
