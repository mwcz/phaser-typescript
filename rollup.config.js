import path from 'path';
import rollupNodeResolve from 'rollup-plugin-node-resolve';
import rollupCommonJS from 'rollup-plugin-commonjs';
import rollupInject from 'rollup-plugin-inject';

export default {
    entry: 'build/app.js',
    dest: 'build/app.min.js',
    sourceMap: true,
    sourceMapFile: 'build/app.js.map',
    format: 'iife',
    context: 'window',
    exports: 'none',
    treeshake: false,
    plugins: [
        rollupNodeResolve({
            jsnext: true,
            browser: true,
        }),
        // rollupInject({
        //     // include: '**/*.js',
        //     modules: {
        //         Phaser: path.resolve('node_modules/phaser/build/phaser.js'),
        //     },
        // }),
    ],
    // external: [
    //     'phaser',
    // ],
    // globals: {
    //     phaser: 'Phaser',
    // },
};
