import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from '@zhuiye/ui';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Bold" defaultPressed>
      B
    </Toggle>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--zy-spacing-3)' }}>
      <Toggle aria-label="Ghost bold" variant="ghost" defaultPressed>
        B
      </Toggle>
      <Toggle aria-label="Outline italic" variant="outline" defaultPressed>
        I
      </Toggle>
      <Toggle aria-label="Soft underline" variant="soft" defaultPressed>
        U
      </Toggle>
    </div>
  ),
};

export const SizesAndTones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--zy-spacing-3)' }}>
      <Toggle aria-label="Small neutral" size="sm" defaultPressed>
        Small
      </Toggle>
      <Toggle aria-label="Medium primary" tone="primary" variant="outline" defaultPressed>
        Primary
      </Toggle>
      <Toggle aria-label="Large danger" size="lg" tone="danger" variant="soft" defaultPressed>
        Danger
      </Toggle>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [pressed, setPressed] = useState(true);
    return (
      <div style={{ display: 'grid', gap: 'var(--zy-spacing-3)', justifyItems: 'start' }}>
        <Toggle pressed={pressed} onPressedChange={setPressed} aria-label="Pin" variant="outline">
          Pin
        </Toggle>
        <span
          style={{
            color: 'var(--zy-muted-foreground)',
            fontSize: 'var(--zy-font-size-sm)',
          }}
        >
          State: {pressed ? 'Pinned' : 'Unpinned'}
        </span>
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
        gap: 'var(--zy-spacing-3)',
        padding: 'var(--zy-spacing-6)',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
      }}
    >
      <Toggle aria-label="Dark bold" defaultPressed>
        B
      </Toggle>
      <Toggle aria-label="Dark italic" variant="outline" tone="primary" defaultPressed>
        I
      </Toggle>
    </div>
  ),
};
