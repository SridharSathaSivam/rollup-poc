var uglify = require('rollup-plugin-uglify');
var resolve = require('rollup-plugin-node-resolve');

export default {
    entry: 'demo/sample.js',
    format: 'iife',
    dest: 'dist/sample.es6.min.js',
    plugins: [
        resolve({ jsnext: true, module: true }),
        // uglify()
    ],
    onwarn: function(message) {}
};