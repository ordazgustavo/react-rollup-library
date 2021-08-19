/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
};

export default [config];
