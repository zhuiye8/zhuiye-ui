import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, Radio } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

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
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <RadioGroup {...args}>
        <Radio value="free" label={copy.radioGroup.free} />
        <Radio value="pro" label={copy.radioGroup.pro} />
        <Radio value="enterprise" label={copy.radioGroup.enterprise} />
      </RadioGroup>
    );
  },
};

export const WithDescription: Story = {
  args: {
    description: 'Choose the plan that works best for you',
  },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <RadioGroup {...args}>
        <Radio
          value="free"
          label={copy.radioGroup.free}
          description={copy.radioGroup.basicFeatures}
        />
        <Radio
          value="pro"
          label={copy.radioGroup.pro}
          description={copy.radioGroup.advancedFeatures}
        />
        <Radio
          value="enterprise"
          label={copy.radioGroup.enterprise}
          description={copy.radioGroup.customSolutions}
        />
      </RadioGroup>
    );
  },
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <RadioGroup {...args}>
        <Radio value="sm" label={copy.radioGroup.small} />
        <Radio value="md" label={copy.radioGroup.medium} />
        <Radio value="lg" label={copy.radioGroup.large} />
      </RadioGroup>
    );
  },
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <RadioGroup {...args}>
        <Radio value="a" label={copy.radioGroup.optionA} />
        <Radio value="b" label={copy.radioGroup.optionB} />
      </RadioGroup>
    );
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'Please select an option',
  },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <RadioGroup {...args}>
        <Radio value="a" label={copy.radioGroup.optionA} />
        <Radio value="b" label={copy.radioGroup.optionB} />
      </RadioGroup>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const copy = useStoryCopy();
    const [value, setValue] = React.useState('pro');
    return (
      <RadioGroup label={copy.radioGroup.plan} value={value} onValueChange={setValue}>
        <Radio value="free" label={copy.radioGroup.free} />
        <Radio value="pro" label={copy.radioGroup.pro} />
        <Radio value="enterprise" label={copy.radioGroup.enterprise} />
      </RadioGroup>
    );
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <RadioGroup {...args}>
        <Radio value="a" label={copy.radioGroup.optionA} />
        <Radio value="b" label={copy.radioGroup.optionB} />
        <Radio value="c" label={copy.radioGroup.optionC} />
      </RadioGroup>
    );
  },
  parameters: { layout: 'padded' },
};

export const AllStates: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <RadioGroup label={copy.radioGroup.defaultValue}>
          <Radio value="a" label={copy.radioGroup.optionA} />
          <Radio value="b" label={copy.radioGroup.optionB} />
        </RadioGroup>
        <RadioGroup label={copy.radioGroup.withDefaultValue} defaultValue="b">
          <Radio value="a" label={copy.radioGroup.optionA} />
          <Radio value="b" label={copy.radioGroup.optionB} />
        </RadioGroup>
        <RadioGroup label={copy.radioGroup.disabled} disabled>
          <Radio value="a" label={copy.radioGroup.optionA} />
          <Radio value="b" label={copy.radioGroup.optionB} />
        </RadioGroup>
        <RadioGroup label={copy.radioGroup.invalid} invalid errorMessage={copy.radioGroup.required}>
          <Radio value="a" label={copy.radioGroup.optionA} />
          <Radio value="b" label={copy.radioGroup.optionB} />
        </RadioGroup>
      </div>
    );
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => {
    const copy = useStoryCopy();
    return (
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
        <RadioGroup label={copy.radioGroup.selectOption} defaultValue="b">
          <Radio value="a" label={copy.radioGroup.optionA} />
          <Radio value="b" label={copy.radioGroup.optionB} />
          <Radio value="c" label={copy.radioGroup.optionC} />
        </RadioGroup>
        <RadioGroup
          label={copy.radioGroup.invalid}
          invalid
          errorMessage={copy.radioGroup.errorMessage}
        >
          <Radio value="a" label={copy.radioGroup.optionA} />
          <Radio value="b" label={copy.radioGroup.optionB} />
        </RadioGroup>
      </div>
    );
  },
};
