import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const options = [
  { input: pkg.source, output: pkg.main, format: 'cjs' },
  { input: pkg.source, output: pkg.module, format: 'esm' },
];

/**
 * @return {import('rollup').RollupOptions}
 */
function createRollupConfig({ input, output, format }) {
  return {
    input,
    output: {
      file: output,
      format,
      sourcemap: true,
      exports: 'named',
    },
    plugins: [external(), typescript({ tsconfig: './tsconfig.json' })],
  };
}

export default options.map(createRollupConfig);
