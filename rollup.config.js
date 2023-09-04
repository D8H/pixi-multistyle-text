//import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
  	input: './src/pixi-multistyle-text.ts',
  	output: [
      {
        name: 'MultiStyleText',
        format: 'umd',
        file: 'dist/MultiStyleText.js',
        sourcemap: true,
        plugins: [
          terser({
            format: {
              comments: false
            },
          })
        ],
        globals: {
          'pixi.js': 'PIXI',
        }
      },
    ],
  	external: ['pixi.js'],
    plugins: [
      resolve({
          extensions: ['.js'],
      }),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
];
