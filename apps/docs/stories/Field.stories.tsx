import type { Meta, StoryObj } from '@storybook/react';
import { Field, Input } from '@zhuiye/ui';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    label: 'Email address',
    children: <Input placeholder="jane@example.com" fullWidth />,
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const WithDescription: Story = {
  args: { description: 'We will never share your email.' },
};

export const WithError: Story = {
  args: {
    errorMessage: 'Please enter a valid email address.',
    invalid: true,
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: 'padded' },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px' }}>
      <Field label="Default field">
        <Input placeholder="Enter text" fullWidth />
      </Field>
      <Field label="Required field" required>
        <Input placeholder="Required" fullWidth />
      </Field>
      <Field label="With description" description="This is help text.">
        <Input placeholder="Help text below" fullWidth />
      </Field>
      <Field label="Invalid field" invalid errorMessage="This field is required.">
        <Input placeholder="Error state" fullWidth />
      </Field>
      <Field label="Disabled field" disabled>
        <Input placeholder="Disabled" fullWidth />
      </Field>
    </div>
  ),
};

export const DarkTheme: Story = {
  parameters: { backgrounds: { disable: true } },
  globals: { theme: 'dark' },
  render: () => (
    <div
      data-theme="dark"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
        width: '320px',
      }}
    >
      <Field label="Default field">
        <Input placeholder="Enter text" fullWidth />
      </Field>
      <Field label="Required field" required>
        <Input placeholder="Required" fullWidth />
      </Field>
      <Field label="With description" description="Help text here.">
        <Input placeholder="With help" fullWidth />
      </Field>
      <Field label="Invalid field" invalid errorMessage="Something went wrong.">
        <Input placeholder="Error" fullWidth />
      </Field>
    </div>
  ),
};
