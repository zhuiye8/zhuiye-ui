import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select, Field } from '@zhuiye/ui';
import type { SelectOptionSource } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

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
    placeholder: 'Select a fruit...',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

function useFruitOptions(): SelectOptionSource[] {
  const f = useStoryCopy().fruits;
  return [
    { value: 'apple', label: f.apple },
    { value: 'banana', label: f.banana },
    { value: 'cherry', label: f.cherry },
    { value: 'date', label: f.date },
    { value: 'elderberry', label: f.elderberry },
  ];
}

function useGroupedOptions(): SelectOptionSource[] {
  const g = useStoryCopy().foodGroups;
  return [
    {
      label: g.fruits,
      options: [
        { value: 'apple', label: g.fruits === '\u6C34\u679C' ? '\u82F9\u679C' : 'Apple' },
        { value: 'banana', label: g.fruits === '\u6C34\u679C' ? '\u9999\u8549' : 'Banana' },
        { value: 'cherry', label: g.fruits === '\u6C34\u679C' ? '\u6A31\u6843' : 'Cherry' },
      ],
    },
    {
      label: g.vegetables,
      options: [
        { value: 'carrot', label: g.carrot },
        { value: 'broccoli', label: g.broccoli },
        { value: 'spinach', label: g.spinach },
      ],
    },
    {
      label: g.grains,
      options: [
        { value: 'rice', label: g.rice },
        { value: 'wheat', label: g.wheat },
        { value: 'oats', label: g.oats, disabled: true },
      ],
    },
  ];
}

export const Default: Story = {
  render: () => (
    <Select options={useFruitOptions()} placeholder={useStoryCopy().select.placeholder} size="md" />
  ),
};

export const Placeholder: Story = {
  render: () => (
    <Select options={useFruitOptions()} placeholder={useStoryCopy().select.chooseOne} size="md" />
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState('banana');
    const c = useStoryCopy().select;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '250px' }}>
        <Select options={useFruitOptions()} value={value} onValueChange={setValue} />
        <p style={{ fontSize: 'var(--zy-font-size-sm)', color: 'var(--zy-muted-foreground)' }}>
          {c.selected}: {value}
        </p>
      </div>
    );
  },
};

export const Small: Story = {
  render: () => <Select options={useFruitOptions()} size="sm" />,
};

export const Large: Story = {
  render: () => <Select options={useFruitOptions()} size="lg" />,
};

export const AllSizes: Story = {
  render: () => {
    const btn = useStoryCopy().button;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '250px' }}>
        <Select options={useFruitOptions()} size="sm" placeholder={btn.small} />
        <Select options={useFruitOptions()} size="md" placeholder={btn.medium} />
        <Select options={useFruitOptions()} size="lg" placeholder={btn.large} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledWithSelection: Story = {
  args: { disabled: true, defaultValue: 'apple' },
};

export const InvalidInField: Story = {
  render: () => {
    const c = useStoryCopy().select;
    return (
      <div style={{ width: '300px' }}>
        <Field label={c.favoriteFruit} required errorMessage={c.selectFruitError}>
          <Select options={useFruitOptions()} placeholder={c.selectDots} />
        </Field>
      </div>
    );
  },
};

export const GroupedOptions: Story = {
  render: () => (
    <Select options={useGroupedOptions()} placeholder={useStoryCopy().select.selectFood} />
  ),
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
  render: () => {
    const c = useStoryCopy().select;
    const inp = useStoryCopy().input;
    return (
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
        <Select options={useFruitOptions()} placeholder={inp.default} />
        <Select options={useFruitOptions()} disabled placeholder={inp.disabled} />
        <Select options={useFruitOptions()} defaultValue="banana" placeholder={inp.withError} />
        <Field label={c.favoriteFruit} errorMessage={inp.errorMessage}>
          <Select options={useFruitOptions()} placeholder={inp.invalid} />
        </Field>
      </div>
    );
  },
};
