const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const { uglify } = require('rollup-plugin-uglify');
const { minify } = require('terser');

module.exports = {
  input: 'src/_es6/bundle.js',
  plugins: [
    resolve(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    commonjs({
      namedExports: {
        'node_modules/react/index.js': ['Component', 'PropTypes'],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
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
