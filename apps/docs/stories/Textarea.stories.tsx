import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@zhuiye/ui';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
  args: {
    placeholder: 'Enter your message...',
    resize: 'vertical',
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const NoResize: Story = {
  args: { resize: 'none' },
};

export const BothResize: Story = {
  args: { resize: 'both' },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'This field is required.',
    id: 'message',
  },
};

export const Disabled: Story = {
  args: { disabled: true, value: 'Disabled content' },
};

export const ReadOnly: Story = {
  args: { readOnly: true, value: 'Read only content' },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: 'padded' },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '400px' }}>
      <Textarea placeholder="Default" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Read only" readOnly value="Read only" />
      <Textarea placeholder="Invalid" invalid />
      <Textarea placeholder="With error" id="err" errorMessage="Something went wrong" />
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
        width: '400px',
      }}
    >
      <Textarea placeholder="Default" />
      <Textarea placeholder="Disabled" disabled />
      <Textarea placeholder="Invalid" invalid />
    </div>
  ),
};
