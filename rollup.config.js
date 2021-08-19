import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const options = [
  { input: pkg.source, output: pkg.main, format: 'cjs' },
  { input: pkg.source, output: pkg.module, format: 'esm' },
];

function createRollupConfig({ input, output, format }) {
  return {
    input,
    output: {
      file: output,
      format,
      sourcemap: true,
      exports: 'named',
    },
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  };
}

export default options.map(createRollupConfig);
