import type { Meta, StoryObj } from '@storybook/react';
import { VisuallyHidden } from '@zhuiye/ui';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Primitives/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
  args: {
    children: 'Hidden text',
  },
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {};

export const WithIconButton: Story = {
  render: () => (
    <button
      type="button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        border: '1px solid var(--zy-border)',
        borderRadius: 'var(--zy-radius-md)',
        background: 'var(--zy-surface)',
        cursor: 'pointer',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <VisuallyHidden>Add item</VisuallyHidden>
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons must include visually hidden text for screen readers.',
      },
    },
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
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
      }}
    >
      <button
        type="button"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          border: '1px solid var(--zy-border)',
          borderRadius: 'var(--zy-radius-md)',
          background: 'var(--zy-surface)',
          color: 'var(--zy-foreground)',
          cursor: 'pointer',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <VisuallyHidden>Add item</VisuallyHidden>
      </button>
    </div>
  ),
};
