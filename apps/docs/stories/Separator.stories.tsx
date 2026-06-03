import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

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
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
        <p style={{ margin: 0 }}>{copy.separator.contentAbove}</p>
        <Separator orientation="horizontal" />
        <p style={{ margin: 0 }}>{copy.separator.contentBelow}</p>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '48px' }}>
        <span>{copy.separator.left}</span>
        <Separator orientation="vertical" />
        <span>{copy.separator.right}</span>
      </div>
    );
  },
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
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '48px' }}>
        <span>{copy.separator.sectionA}</span>
        <Separator {...args} />
        <span>{copy.separator.sectionB}</span>
      </div>
    );
  },
};

export const InContext: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
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
        <strong>{copy.separator.settings}</strong>
        <Separator />
        <span>{copy.separator.account}</span>
        <span>{copy.separator.notifications}</span>
        <Separator />
        <span>{copy.separator.signOut}</span>
      </div>
    );
  },
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
