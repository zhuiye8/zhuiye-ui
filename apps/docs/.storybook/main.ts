import type { StorybookConfig } from '@storybook/react-vite';
import type { RollupLog } from 'rollup';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],
  staticDirs: ['./static'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: async (baseConfig) =>
    mergeConfig(baseConfig, {
      build: {
        chunkSizeWarningLimit: 1200,
        rollupOptions: {
          onwarn(warning: RollupLog, defaultHandler: (warning: RollupLog) => void) {
            if (
              warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
              warning.message.includes('use client')
            ) {
              return;
            }
            if (
              warning.code === 'EVAL' &&
              warning.message.includes('@storybook') &&
              warning.message.includes('runtime')
            ) {
              return;
            }
            defaultHandler(warning);
          },
        },
      },
    }),
};

export default config;
