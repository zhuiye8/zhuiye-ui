import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset, Radio, RadioGroup } from '@zhuiye/ui';

const meta: Meta<typeof Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
  args: {
    legend: 'Notification preferences',
    children: (
      <RadioGroup defaultValue="all" name="notifications">
        <Radio value="all" label="All notifications" />
        <Radio value="important" label="Important only" />
        <Radio value="none" label="None" />
      </RadioGroup>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const WithDescription: Story = {
  args: { description: 'Choose how you want to be notified.' },
};

export const WithError: Story = {
  args: { errorMessage: 'Please select an option.', invalid: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Horizontal: Story = {
  args: {
    legend: 'Pick one',
    orientation: 'horizontal',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '360px' }}>
      <Fieldset legend="Default group">
        <RadioGroup defaultValue="a" name="default">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
        </RadioGroup>
      </Fieldset>
      <Fieldset legend="Required group" required>
        <RadioGroup defaultValue="x" name="required">
          <Radio value="x" label="Option X" />
          <Radio value="y" label="Option Y" />
        </RadioGroup>
      </Fieldset>
      <Fieldset legend="With description" description="Pick your preference.">
        <RadioGroup defaultValue="c" name="desc">
          <Radio value="c" label="Option C" />
          <Radio value="d" label="Option D" />
        </RadioGroup>
      </Fieldset>
      <Fieldset legend="Error group" invalid errorMessage="Selection required.">
        <RadioGroup defaultValue="" name="error">
          <Radio value="e" label="Option E" />
          <Radio value="f" label="Option F" />
        </RadioGroup>
      </Fieldset>
      <Fieldset legend="Disabled group" disabled>
        <RadioGroup defaultValue="g" name="disabled">
          <Radio value="g" label="Option G" />
          <Radio value="h" label="Option H" />
        </RadioGroup>
      </Fieldset>
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
        width: '360px',
      }}
    >
      <Fieldset legend="Default group">
        <RadioGroup defaultValue="a" name="dk-default">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
        </RadioGroup>
      </Fieldset>
      <Fieldset legend="Required group" required>
        <RadioGroup defaultValue="x" name="dk-req">
          <Radio value="x" label="Option X" />
          <Radio value="y" label="Option Y" />
        </RadioGroup>
      </Fieldset>
      <Fieldset legend="Error group" invalid errorMessage="Select one.">
        <RadioGroup defaultValue="" name="dk-err">
          <Radio value="e" label="Option E" />
          <Radio value="f" label="Option F" />
        </RadioGroup>
      </Fieldset>
    </div>
  ),
};
