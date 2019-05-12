const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { uglify } = require('rollup-plugin-uglify');
const { minify } = require('uglify-es');

module.exports = {
  input: 'src/_es6/bundle.js',
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [['@babel/preset-env', { modules: false }]],
    }),
    uglify({}, minify),
  ],
  output: {
    name: 'script',
    format: 'iife',
    file: 'src/assets/script.js',
    sourcemap: false,
    intro: 'document.addEventListener("DOMContentLoaded",function(){bundle()});',
  }
}
