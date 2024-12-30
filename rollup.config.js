import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json'));

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'MuiDev',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'framer-motion': 'FramerMotion',
        '@heroicons/react': 'HeroIcons',
        'react-icons': 'ReactIcons'
      },
      sourcemap: true,
      exports: 'named'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto',
      transformMixedEsModules: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    postcss({
      config: {
        path: './postcss.config.cjs'
      },
      extensions: ['.css'],
      minimize: true,
      extract: 'index.css',
      inject: false
    }),
    terser()
  ],
  external: ['react', 'react-dom', 'framer-motion', '@heroicons/react', 'react-icons'],
  context: 'window',
};
