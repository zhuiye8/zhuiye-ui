import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
  args: {
    children: 'Badge',
    variant: 'neutral',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {};

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Success: Story = {
  args: { variant: 'success' },
  render: (args) => {
    const copy = useStoryCopy();
    return <Badge {...args}>{copy.badge.active}</Badge>;
  },
};

export const Warning: Story = {
  args: { variant: 'warning' },
  render: (args) => {
    const copy = useStoryCopy();
    return <Badge {...args}>{copy.badge.pending}</Badge>;
  },
};

export const Danger: Story = {
  args: { variant: 'danger' },
  render: (args) => {
    const copy = useStoryCopy();
    return <Badge {...args}>{copy.badge.error}</Badge>;
  },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const AllVariants: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Badge variant="neutral">{copy.badge.neutral}</Badge>
        <Badge variant="primary">{copy.badge.primary}</Badge>
        <Badge variant="success">{copy.badge.success}</Badge>
        <Badge variant="warning">{copy.badge.warning}</Badge>
        <Badge variant="danger">{copy.badge.danger}</Badge>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Badge size="sm">{copy.badge.small}</Badge>
        <Badge size="md">{copy.badge.medium}</Badge>
      </div>
    );
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        data-theme="dark"
        style={{
          display: 'flex',
          gap: '8px',
          padding: '24px',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: '8px',
        }}
      >
        <Badge variant="neutral">{copy.badge.neutral}</Badge>
        <Badge variant="primary">{copy.badge.primary}</Badge>
        <Badge variant="success">{copy.badge.success}</Badge>
        <Badge variant="warning">{copy.badge.warning}</Badge>
        <Badge variant="danger">{copy.badge.danger}</Badge>
      </div>
    );
  },
};
