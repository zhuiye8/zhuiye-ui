import type { Meta, StoryObj } from '@storybook/react';
import { IconSlot } from '@zhuiye/ui';

const StarIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const meta: Meta<typeof IconSlot> = {
  title: 'Primitives/IconSlot',
  component: IconSlot,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    decorative: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  args: {
    size: 'md',
    decorative: true,
  },
};

export default meta;
type Story = StoryObj<typeof IconSlot>;

export const Default: Story = {
  render: (args) => (
    <IconSlot {...args}>
      <StarIcon />
    </IconSlot>
  ),
};

export const Small: Story = {
  render: (args) => (
    <IconSlot {...args} size="sm">
      <StarIcon />
    </IconSlot>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <IconSlot {...args} size="md">
      <StarIcon />
    </IconSlot>
  ),
};

export const Large: Story = {
  render: (args) => (
    <IconSlot {...args} size="lg">
      <StarIcon />
    </IconSlot>
  ),
};

export const NonDecorative: Story = {
  args: { decorative: false, label: 'Favorite' },
  render: (args) => (
    <IconSlot {...args}>
      <StarIcon />
    </IconSlot>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Non-decorative icons are exposed to screen readers with role="img" and an aria-label.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconSlot size="sm">
          <StarIcon />
        </IconSlot>
        <span style={{ fontSize: '12px', color: 'var(--zy-muted-foreground)' }}>sm</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconSlot size="md">
          <StarIcon />
        </IconSlot>
        <span style={{ fontSize: '12px', color: 'var(--zy-muted-foreground)' }}>md</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <IconSlot size="lg">
          <StarIcon />
        </IconSlot>
        <span style={{ fontSize: '12px', color: 'var(--zy-muted-foreground)' }}>lg</span>
      </div>
    </div>
  ),
};

export const WithButton: Story = {
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
        fontSize: '14px',
      }}
    >
      <IconSlot size="sm">
        <SearchIcon />
      </IconSlot>
      Search
    </button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'IconSlot works as a leading icon inside buttons and inputs.',
      },
    },
  },
};

export const WithInput: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        border: '1px solid var(--zy-border)',
        borderRadius: 'var(--zy-radius-md)',
        background: 'var(--zy-surface)',
        width: '260px',
      }}
    >
      <IconSlot size="sm">
        <SearchIcon />
      </IconSlot>
      <input
        type="text"
        placeholder="Search..."
        style={{
          border: 'none',
          outline: 'none',
          background: 'transparent',
          flex: 1,
          fontSize: '14px',
          color: 'inherit',
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'IconSlot as a leading adornment inside an input field.',
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
        display: 'flex',
        gap: '24px',
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
        alignItems: 'center',
      }}
    >
      <IconSlot size="sm">
        <StarIcon />
      </IconSlot>
      <IconSlot size="md">
        <StarIcon />
      </IconSlot>
      <IconSlot size="lg">
        <StarIcon />
      </IconSlot>
    </div>
  ),
};
