import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@zhuiye/ui';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    errorMessage: { control: 'text' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
  args: {
    label: 'Enable notifications',
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const WithDescription: Story = {
  args: {
    label: 'Dark mode',
    description: 'Switch between light and dark themes',
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'This setting must be enabled',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Enable two-factor authentication for your account',
  },
  parameters: { layout: 'padded' },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch label="Default" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
      <Switch label="Invalid" invalid errorMessage="Must be enabled" />
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
      <Switch label="Default" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Invalid" invalid errorMessage="Error message" />
    </div>
  ),
};
