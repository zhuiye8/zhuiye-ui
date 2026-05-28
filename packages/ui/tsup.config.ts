import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/styles.css'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@radix-ui/react-select',
    '@radix-ui/react-dialog',
    '@radix-ui/react-popover',
    '@radix-ui/react-tooltip',
    '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-tabs',
  ],
  outDir: 'dist',
});
