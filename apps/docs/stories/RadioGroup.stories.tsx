import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, Radio } from '@zhuiye/ui';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    errorMessage: { control: 'text' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    label: 'Select a plan',
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="free" label="Free" />
      <Radio value="pro" label="Pro" />
      <Radio value="enterprise" label="Enterprise" />
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  args: {
    description: 'Choose the plan that works best for you',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="free" label="Free" description="Basic features for individuals" />
      <Radio value="pro" label="Pro" description="Advanced features for professionals" />
      <Radio value="enterprise" label="Enterprise" description="Custom solutions for teams" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="sm" label="Small" />
      <Radio value="md" label="Medium" />
      <Radio value="lg" label="Large" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
  ),
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'Please select an option',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('pro');
    return (
      <RadioGroup label="Plan" value={value} onValueChange={setValue}>
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
        <Radio value="enterprise" label="Enterprise" />
      </RadioGroup>
    );
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
  parameters: { layout: 'padded' },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <RadioGroup label="Default">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
      <RadioGroup label="With default value" defaultValue="b">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
      <RadioGroup label="Disabled" disabled>
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
      <RadioGroup label="Invalid" invalid errorMessage="Required">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
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
      <RadioGroup label="Select an option" defaultValue="b">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
        <Radio value="c" label="Option C" />
      </RadioGroup>
      <RadioGroup label="Invalid" invalid errorMessage="Error message">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    </div>
  ),
};
