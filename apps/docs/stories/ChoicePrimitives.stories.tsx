import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Switch, RadioGroup, Radio } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

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
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: '400px',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.choice.checkbox}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Checkbox label={copy.choice.default} />
            <Checkbox label={copy.choice.checked} defaultChecked />
            <Checkbox label={copy.choice.indeterminate} indeterminate />
          </div>
        </div>

        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.choice.switchLabel}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Switch label={copy.choice.default} />
            <Switch label={copy.choice.checked} defaultChecked />
          </div>
        </div>

        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.choice.radioGroup}
          </h3>
          <RadioGroup label={copy.choice.selectOption} defaultValue="b">
            <Radio value="a" label={copy.choice.optionA} />
            <Radio value="b" label={copy.choice.optionB} />
            <Radio value="c" label={copy.choice.optionC} />
          </RadioGroup>
        </div>
      </div>
    );
  },
};

export const DisabledStates: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: '400px',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.choice.disabledCheckbox}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Checkbox label={copy.choice.disabled} disabled />
            <Checkbox label={copy.choice.disabledChecked} disabled defaultChecked />
          </div>
        </div>

        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.choice.disabledSwitch}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Switch label={copy.choice.disabled} disabled />
            <Switch label={copy.choice.disabledChecked} disabled defaultChecked />
          </div>
        </div>

        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.choice.disabledRadioGroup}
          </h3>
          <RadioGroup label={copy.choice.disabledGroup} disabled defaultValue="a">
            <Radio value="a" label={copy.choice.optionA} />
            <Radio value="b" label={copy.choice.optionB} />
          </RadioGroup>
        </div>
      </div>
    );
  },
};

export const ErrorStates: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: '400px',
        }}
      >
        <Checkbox
          label={copy.choice.acceptTerms}
          invalid
          errorMessage={copy.choice.mustAcceptTerms}
        />
        <Switch label={copy.choice.enable} invalid errorMessage={copy.choice.mustEnable} />
        <RadioGroup label={copy.choice.select} invalid errorMessage={copy.choice.pleaseSelect}>
          <Radio value="a" label={copy.choice.optionA} />
          <Radio value="b" label={copy.choice.optionB} />
        </RadioGroup>
      </div>
    );
  },
};

export const DarkThemeAll: Story = {
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
          gap: '32px',
          maxWidth: '400px',
          padding: '24px',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: '8px',
        }}
      >
        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.choice.checkbox}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Checkbox label={copy.choice.default} />
            <Checkbox label={copy.choice.checked} defaultChecked />
            <Checkbox label={copy.choice.invalid} invalid errorMessage={copy.choice.required} />
          </div>
        </div>

        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.choice.switchLabel}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Switch label={copy.choice.default} />
            <Switch label={copy.choice.checked} defaultChecked />
            <Switch label={copy.choice.invalid} invalid errorMessage={copy.choice.required} />
          </div>
        </div>

        <div>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.choice.radioGroup}
          </h3>
          <RadioGroup label={copy.choice.select} defaultValue="b">
            <Radio value="a" label={copy.choice.optionA} />
            <Radio value="b" label={copy.choice.optionB} />
          </RadioGroup>
        </div>
      </div>
    );
  },
};
