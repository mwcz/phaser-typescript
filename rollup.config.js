import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'app.js',
    dest: 'app.min.js',
    sourceMap: true,
    sourceMapFile: 'app.js.map',
    format: 'iife',
    context: 'window',
    exports: 'none',
    external: [
        'phaser',
    ],
    globals: {
        phaser: 'Phaser',
    },
};
