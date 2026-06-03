import type { Meta, StoryObj } from '@storybook/react';
import { FormMessage } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof FormMessage> = {
  title: 'Components/FormMessage',
  component: FormMessage,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['neutral', 'danger', 'success', 'warning'],
    },
  },
  args: {
    children: 'This is a form message.',
    tone: 'neutral',
  },
};

export default meta;
type Story = StoryObj<typeof FormMessage>;

export const Neutral: Story = {};

export const Danger: Story = {
  render: () => {
    const copy = useStoryCopy();
    return <FormMessage tone="danger">{copy.formMessage.fieldRequired}</FormMessage>;
  },
};

export const Success: Story = {
  render: () => {
    const copy = useStoryCopy();
    return <FormMessage tone="success">{copy.formMessage.savedSuccess}</FormMessage>;
  },
};

export const Warning: Story = {
  render: () => {
    const copy = useStoryCopy();
    return <FormMessage tone="warning">{copy.formMessage.doubleCheck}</FormMessage>;
  },
};

export const AllTones: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
        <FormMessage tone="neutral">{copy.formMessage.neutralMessage}</FormMessage>
        <FormMessage tone="danger">{copy.formMessage.dangerMessage}</FormMessage>
        <FormMessage tone="success">{copy.formMessage.successMessage}</FormMessage>
        <FormMessage tone="warning">{copy.formMessage.warningMessage}</FormMessage>
      </div>
    );
  },
};

export const DarkTheme: Story = {
  parameters: { backgrounds: { disable: true } },
  globals: { theme: 'dark' },
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        data-theme="dark"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '24px',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: 'var(--zy-radius-md)',
          width: '300px',
        }}
      >
        <FormMessage tone="neutral">{copy.formMessage.neutralMessage}</FormMessage>
        <FormMessage tone="danger">{copy.formMessage.dangerMessage}</FormMessage>
        <FormMessage tone="success">{copy.formMessage.successMessage}</FormMessage>
        <FormMessage tone="warning">{copy.formMessage.warningMessage}</FormMessage>
      </div>
    );
  },
};
