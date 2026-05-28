import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@zhuiye/ui';

const meta: Meta<typeof Separator> = {
  title: 'Primitives/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    decorative: {
      control: 'boolean',
    },
  },
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {};

export const Horizontal: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <p style={{ margin: 0 }}>Content above</p>
      <Separator orientation="horizontal" />
      <p style={{ margin: 0 }}>Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '48px' }}>
      <span>Left</span>
      <Separator orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};

export const Semantic: Story = {
  args: { decorative: false },
  parameters: {
    docs: {
      description: {
        story:
          'Non-decorative separators use role="separator" and communicate structure to assistive technology.',
      },
    },
  },
};

export const SemanticVertical: Story = {
  args: { decorative: false, orientation: 'vertical' },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '48px' }}>
      <span>Section A</span>
      <Separator {...args} />
      <span>Section B</span>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '300px',
        padding: '24px',
        border: '1px solid var(--zy-border)',
        borderRadius: 'var(--zy-radius-md)',
        background: 'var(--zy-surface)',
      }}
    >
      <strong>Settings</strong>
      <Separator />
      <span>Account</span>
      <span>Notifications</span>
      <Separator />
      <span>Sign out</span>
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
        gap: '12px',
        width: '300px',
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
      }}
    >
      <span>Item 1</span>
      <Separator />
      <span>Item 2</span>
      <Separator />
      <span>Item 3</span>
    </div>
  ),
};
