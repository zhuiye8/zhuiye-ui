import type { Meta, StoryObj } from '@storybook/react';
import { LocaleProvider, useLocale, useT } from '@zhuiye/i18n';
import { Button, Badge, Separator } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

function LocalizationDemo() {
  const locale = useLocale();
  const t = useT();
  const c = useStoryCopy().localization;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '320px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Badge variant="outline">{locale}</Badge>
        <span style={{ fontSize: '14px', opacity: 0.7 }}>{c.activeLocale}</span>
      </div>

      <Separator />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>{c.commonKeys}</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button variant="primary" size="sm">
            {t('common.ok')}
          </Button>
          <Button variant="outline" size="sm">
            {t('common.cancel')}
          </Button>
          <Button variant="ghost" size="sm">
            {t('common.close')}
          </Button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>{c.interpolation}</h3>
        <p style={{ margin: 0, fontSize: '14px' }}>
          {t('validation.required', { label: c.email })}
        </p>
        <p style={{ margin: 0, fontSize: '14px' }}>
          {t('validation.minLength', { label: c.password, min: 8 })}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>{c.componentKeys}</h3>
        <p style={{ margin: 0, fontSize: '14px' }}>
          {t('components.dialog.close')} / {t('components.select.placeholder')}
        </p>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Localization',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Demonstrates the @zhuiye/i18n package integrated with Storybook. Use the Locale toolbar in the toolbar above to switch between English and Simplified Chinese.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <LocalizationDemo />,
};

export const ForcedChinese: Story = {
  name: 'Forced zh-CN',
  render: () => (
    <LocaleProvider locale="zh-CN">
      <LocalizationDemo />
    </LocaleProvider>
  ),
};

export const PartialOverride: Story = {
  name: 'Partial Override',
  render: () => (
    <LocaleProvider
      locale="zh-CN"
      messages={{
        'zh-CN': {
          common: {
            ok: '\u786E\u8BA4',
          },
        },
      }}
    >
      <LocalizationDemo />
    </LocaleProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Passing only a subset of keys to custom messages. The rest of the zh-CN dictionary falls back to built-in values.',
      },
    },
  },
};
