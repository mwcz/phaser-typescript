const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();

const SRC_DIR = 'src';
const OUT_DIR = 'build';

const TS_FILES = [`${SRC_DIR}/**/*.ts`];
const OTHER_FILES = [`${SRC_DIR}/**/*`, `!${SRC_DIR}/**/*.ts`];

function copyTask() {
    return gulp.src(OTHER_FILES, { base: SRC_DIR }).pipe(gulp.dest(OUT_DIR));
}

function watchTask() {
    browserSync.init({
        server: {
            baseDir: OUT_DIR
        }
    });

    gulp.watch(TS_FILES, ['ts-reload']);
    gulp.watch(OTHER_FILES, ['copy-reload']);
}

function browserSyncReloadTask(done) {
    browserSync.reload();
    done();
}

gulp.task('ts', shell.task(['tsc']));
gulp.task('copy', copyTask);
gulp.task('default', ['ts', 'copy']);
gulp.task('watch', ['ts', 'copy'], watchTask);
gulp.task('ts-reload', ['ts'], browserSyncReloadTask);
gulp.task('copy-reload', ['copy'], browserSyncReloadTask);
