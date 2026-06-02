import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@zhuiye/ui';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    max: {
      control: { type: 'number', min: 1 },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    value: 60,
    max: 100,
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => (
    <Progress {...args} style={{ width: '360px', maxWidth: 'calc(100vw - 32px)', ...args.style }} />
  ),
};

export const Primary: Story = {
  args: { value: 50 },
};

export const Success: Story = {
  args: { variant: 'success', value: 100 },
};

export const Warning: Story = {
  args: { variant: 'warning', value: 75 },
};

export const Danger: Story = {
  args: { variant: 'danger', value: 90 },
};

export const Neutral: Story = {
  args: { variant: 'neutral', value: 40 },
};

export const Small: Story = {
  args: { size: 'sm', value: 60 },
};

export const Medium: Story = {
  args: { size: 'md', value: 60 },
};

export const Large: Story = {
  args: { size: 'lg', value: 60 },
};

export const Indeterminate: Story = {
  args: { value: null },
  parameters: {
    docs: {
      description: {
        story: 'When value is null, the progress bar shows an indeterminate animation.',
      },
    },
  },
};

export const Complete: Story = {
  args: { value: 100 },
  parameters: {
    docs: {
      description: {
        story: 'The progress bar shows the complete state when value equals max.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-4)',
        width: '480px',
        maxWidth: 'calc(100vw - 32px)',
      }}
    >
      <Progress variant="primary" value={60} />
      <Progress variant="success" value={80} />
      <Progress variant="warning" value={45} />
      <Progress variant="danger" value={90} />
      <Progress variant="neutral" value={30} />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-4)',
        width: '480px',
        maxWidth: 'calc(100vw - 32px)',
      }}
    >
      <Progress size="sm" value={60} />
      <Progress size="md" value={60} />
      <Progress size="lg" value={60} />
    </div>
  ),
};

export const IndeterminateAllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-4)',
        width: '480px',
        maxWidth: 'calc(100vw - 32px)',
      }}
    >
      <Progress variant="primary" value={null} />
      <Progress variant="success" value={null} />
      <Progress variant="warning" value={null} />
      <Progress variant="danger" value={null} />
      <Progress variant="neutral" value={null} />
    </div>
  ),
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => (
    <div
      data-theme="dark"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-4)',
        padding: 'var(--zy-spacing-6)',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
        width: '480px',
        maxWidth: 'calc(100vw - 32px)',
      }}
    >
      <Progress variant="primary" value={60} />
      <Progress variant="success" value={80} />
      <Progress variant="warning" value={45} />
      <Progress variant="danger" value={90} />
      <Progress variant="neutral" value={30} />
      <Progress variant="primary" value={null} />
    </div>
  ),
};
