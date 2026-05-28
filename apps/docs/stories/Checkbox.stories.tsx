import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@zhuiye/ui';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    errorMessage: { control: 'text' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    label: 'Accept terms and conditions',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const WithDescription: Story = {
  args: {
    label: 'Email notifications',
    description: 'Receive email updates about your account activity',
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    indeterminate: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'You must accept the terms',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'I agree to the terms of service and privacy policy',
  },
  parameters: { layout: 'padded' },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Default" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Invalid" invalid errorMessage="This field is required" />
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
      <Checkbox label="Default" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Invalid" invalid errorMessage="Error message" />
    </div>
  ),
};
