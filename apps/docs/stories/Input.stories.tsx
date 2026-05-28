import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@zhuiye/ui';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
  args: {
    placeholder: 'Enter text...',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'This field is required.',
    id: 'email',
  },
};

export const Disabled: Story = {
  args: { disabled: true, value: 'Disabled value' },
};

export const ReadOnly: Story = {
  args: { readOnly: true, value: 'Read only value' },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: 'padded' },
};

export const WithLeftAdornment: Story = {
  args: {
    leftAdornment: <span style={{ color: 'var(--zy-muted-foreground)' }}>$</span>,
    placeholder: '0.00',
  },
};

export const WithRightAdornment: Story = {
  args: {
    rightAdornment: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    placeholder: 'Search...',
  },
};

export const WithBothAdornments: Story = {
  args: {
    leftAdornment: <span style={{ color: 'var(--zy-muted-foreground)' }}>@</span>,
    placeholder: 'username',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Read only" readOnly value="Read only" />
      <Input placeholder="Invalid" invalid />
      <Input placeholder="With error" id="err" errorMessage="Something went wrong" />
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
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: '8px',
        width: '300px',
      }}
    >
      <Input placeholder="Default" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Invalid" invalid />
    </div>
  ),
};
