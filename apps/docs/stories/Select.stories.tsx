import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select, Field } from '@zhuiye/ui';
import type { SelectOptionSource } from '@zhuiye/ui';

const fruitOptions: SelectOptionSource[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

const groupedOptions: SelectOptionSource[] = [
  {
    label: 'Fruits',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' },
    ],
  },
  {
    label: 'Vegetables',
    options: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'broccoli', label: 'Broccoli' },
      { value: 'spinach', label: 'Spinach' },
    ],
  },
  {
    label: 'Grains',
    options: [
      { value: 'rice', label: 'Rice' },
      { value: 'wheat', label: 'Wheat' },
      { value: 'oats', label: 'Oats', disabled: true },
    ],
  },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    options: fruitOptions,
    placeholder: 'Select a fruit...',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: 'Choose one...',
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState('banana');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '250px' }}>
        <Select options={fruitOptions} value={value} onValueChange={setValue} />
        <p style={{ fontSize: 'var(--zy-font-size-sm)', color: 'var(--zy-muted-foreground)' }}>
          Selected: {value}
        </p>
      </div>
    );
  },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '250px' }}>
      <Select options={fruitOptions} size="sm" placeholder="Small" />
      <Select options={fruitOptions} size="md" placeholder="Medium" />
      <Select options={fruitOptions} size="lg" placeholder="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledWithSelection: Story = {
  args: { disabled: true, defaultValue: 'apple' },
};

export const InvalidInField: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Field label="Favorite fruit" required errorMessage="Please select a fruit.">
        <Select options={fruitOptions} placeholder="Select..." />
      </Field>
    </div>
  ),
};

export const GroupedOptions: Story = {
  args: {
    options: groupedOptions,
    placeholder: 'Select food...',
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
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
        borderRadius: 'var(--zy-radius-md)',
        width: '300px',
      }}
    >
      <Select options={fruitOptions} placeholder="Default" />
      <Select options={fruitOptions} disabled placeholder="Disabled" />
      <Select options={fruitOptions} defaultValue="banana" placeholder="With value" />
      <Field label="Favorite" errorMessage="Required">
        <Select options={fruitOptions} placeholder="Invalid" />
      </Field>
    </div>
  ),
};
