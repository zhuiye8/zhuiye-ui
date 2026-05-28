import type { Preview, StoryFn } from '@storybook/react';
import { useEffect } from 'react';
import '@zhuiye/tokens/css';
import '@zhuiye/ui/styles';
import './preview.css';

const withTheme = (Story: StoryFn, context: { globals: { theme?: string } }) => {
  const theme = context.globals.theme ?? 'light';
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return Story();
};

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
};

export default preview;
