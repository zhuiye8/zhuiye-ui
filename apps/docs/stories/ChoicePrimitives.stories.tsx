import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Switch, RadioGroup, Radio } from '@zhuiye/ui';

const meta: Meta = {
  title: 'Components/ChoicePrimitives',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Choice primitives -- Checkbox, Switch, and RadioGroup -- for selecting options in forms.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const AllChoicePrimitives: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '400px',
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Checkbox</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Checkbox label="Default" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Switch</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Switch label="Default" />
          <Switch label="Checked" defaultChecked />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>RadioGroup</h3>
        <RadioGroup label="Select an option" defaultValue="b">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
          <Radio value="c" label="Option C" />
        </RadioGroup>
      </div>
    </div>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '400px',
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Disabled Checkbox</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Disabled Switch</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Switch label="Disabled" disabled />
          <Switch label="Disabled checked" disabled defaultChecked />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
          Disabled RadioGroup
        </h3>
        <RadioGroup label="Disabled group" disabled defaultValue="a">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
        </RadioGroup>
      </div>
    </div>
  ),
};

export const ErrorStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '400px',
      }}
    >
      <Checkbox label="Accept terms" invalid errorMessage="You must accept the terms" />
      <Switch label="Enable" invalid errorMessage="This setting must be enabled" />
      <RadioGroup label="Choose one" invalid errorMessage="Please select an option">
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    </div>
  ),
};

export const DarkThemeAll: Story = {
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
        gap: '32px',
        maxWidth: '400px',
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: '8px',
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Checkbox</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Checkbox label="Default" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Invalid" invalid errorMessage="Required" />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Switch</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Switch label="Default" />
          <Switch label="Checked" defaultChecked />
          <Switch label="Invalid" invalid errorMessage="Required" />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>RadioGroup</h3>
        <RadioGroup label="Select" defaultValue="b">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
        </RadioGroup>
      </div>
    </div>
  ),
};
