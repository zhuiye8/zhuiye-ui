import type { Preview, StoryFn } from '@storybook/react';
import { useEffect } from 'react';
import { LocaleProvider, normalizeLocale } from '@zhuiye/i18n';
import '@zhuiye/tokens/css';
import '@zhuiye/ui/styles';
import './preview.css';

const withTheme = (Story: StoryFn, context: { globals: { theme?: string } }) => {
  const theme = context.globals.theme ?? 'light';
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return <Story />;
};

const withLocale = (Story: StoryFn, context: { globals: { locale?: string } }) => {
  const locale = normalizeLocale(context.globals.locale);
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return (
    <LocaleProvider locale={locale}>
      <Story />
    </LocaleProvider>
  );
};

const preview: Preview = {
  decorators: [withTheme, withLocale],
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
    locale: {
      description: 'Global locale for components',
      defaultValue: 'en',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'zh-CN', title: '简体中文' },
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
