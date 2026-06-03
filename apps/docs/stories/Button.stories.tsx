import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button variant="primary">{useStoryCopy().button.primary}</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">{useStoryCopy().button.secondary}</Button>,
};

export const Outline: Story = {
  render: () => <Button variant="outline">{useStoryCopy().button.outline}</Button>,
};

export const Ghost: Story = {
  render: () => <Button variant="ghost">{useStoryCopy().button.ghost}</Button>,
};

export const Danger: Story = {
  render: () => <Button variant="danger">{useStoryCopy().button.danger}</Button>,
};

export const Small: Story = {
  render: () => <Button size="sm">{useStoryCopy().button.small}</Button>,
};

export const Large: Story = {
  render: () => <Button size="lg">{useStoryCopy().button.large}</Button>,
};

export const Loading: Story = {
  args: { loading: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: 'padded' },
};

export const AllVariants: Story = {
  render: () => {
    const c = useStoryCopy().button;
    return (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button variant="primary">{c.primary}</Button>
        <Button variant="secondary">{c.secondary}</Button>
        <Button variant="outline">{c.outline}</Button>
        <Button variant="ghost">{c.ghost}</Button>
        <Button variant="danger">{c.danger}</Button>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const c = useStoryCopy().button;
    return (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Button size="sm">{c.small}</Button>
        <Button size="md">{c.medium}</Button>
        <Button size="lg">{c.large}</Button>
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
    const c = useStoryCopy().button;
    return (
      <div
        data-theme="dark"
        style={{
          display: 'flex',
          gap: '12px',
          padding: '24px',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: '8px',
        }}
      >
        <Button variant="primary">{c.primary}</Button>
        <Button variant="secondary">{c.secondary}</Button>
        <Button variant="outline">{c.outline}</Button>
        <Button variant="ghost">{c.ghost}</Button>
        <Button variant="danger">{c.danger}</Button>
      </div>
    );
  },
};
