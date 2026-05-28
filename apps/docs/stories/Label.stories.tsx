import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@zhuiye/ui';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  args: {
    children: 'Email address',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const WithDescription: Story = {
  args: {
    children: 'Email address',
    description: 'We will never share your email with anyone else.',
  },
};

export const RequiredWithDescription: Story = {
  args: {
    required: true,
    description: 'This field is mandatory for account creation.',
    children: 'Email address',
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    required: true,
    children: 'Email address',
  },
};

export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'email-input',
    children: 'Email address',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Label>Default label</Label>
      <Label required>Required field</Label>
      <Label description="Help text for this field">With description</Label>
      <Label required description="This field is required.">
        Required with description
      </Label>
      <Label error required>
        Error state
      </Label>
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
        gap: '16px',
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: '8px',
      }}
    >
      <Label>Default label</Label>
      <Label required>Required field</Label>
      <Label description="Help text">With description</Label>
      <Label error>Error state</Label>
    </div>
  ),
};
