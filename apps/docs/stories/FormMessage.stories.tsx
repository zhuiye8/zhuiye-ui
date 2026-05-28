import type { Meta, StoryObj } from '@storybook/react';
import { FormMessage } from '@zhuiye/ui';

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
  args: { tone: 'danger', children: 'This field is required.' },
};

export const Success: Story = {
  args: { tone: 'success', children: 'Saved successfully.' },
};

export const Warning: Story = {
  args: { tone: 'warning', children: 'Please double-check your input.' },
};

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <FormMessage tone="neutral">Neutral message</FormMessage>
      <FormMessage tone="danger">Danger message</FormMessage>
      <FormMessage tone="success">Success message</FormMessage>
      <FormMessage tone="warning">Warning message</FormMessage>
    </div>
  ),
};

export const DarkTheme: Story = {
  parameters: { backgrounds: { disable: true } },
  globals: { theme: 'dark' },
  render: () => (
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
      <FormMessage tone="neutral">Neutral message</FormMessage>
      <FormMessage tone="danger">Danger message</FormMessage>
      <FormMessage tone="success">Success message</FormMessage>
      <FormMessage tone="warning">Warning message</FormMessage>
    </div>
  ),
};
