import type { Meta, StoryObj } from '@storybook/react';
import { Field, Input } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

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
  render: () => {
    const copy = useStoryCopy();
    return (
      <Field label={copy.field.emailAddress} description={copy.field.neverShare}>
        <Input placeholder={copy.field.janeEmail} fullWidth />
      </Field>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Field label={copy.field.emailAddress} errorMessage={copy.field.invalidEmail} invalid>
        <Input placeholder={copy.field.janeEmail} fullWidth />
      </Field>
    );
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
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px' }}>
        <Field label={copy.field.defaultField}>
          <Input placeholder={copy.field.enterText} fullWidth />
        </Field>
        <Field label={copy.field.requiredField} required>
          <Input placeholder={copy.field.requiredPlaceholder} fullWidth />
        </Field>
        <Field label={copy.field.withDescription} description={copy.field.helpText}>
          <Input placeholder={copy.field.helpTextBelow} fullWidth />
        </Field>
        <Field label={copy.field.invalidField} invalid errorMessage={copy.field.fieldRequired}>
          <Input placeholder={copy.field.errorPlaceholder} fullWidth />
        </Field>
        <Field label={copy.field.disabledField} disabled>
          <Input placeholder={copy.field.disabledPlaceholder} fullWidth />
        </Field>
      </div>
    );
  },
};

export const DarkTheme: Story = {
  parameters: { backgrounds: { disable: true } },
  globals: { theme: 'dark' },
  render: () => {
    const copy = useStoryCopy();
    return (
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
        <Field label={copy.field.defaultField}>
          <Input placeholder={copy.field.enterText} fullWidth />
        </Field>
        <Field label={copy.field.requiredField} required>
          <Input placeholder={copy.field.requiredPlaceholder} fullWidth />
        </Field>
        <Field label={copy.field.withDescription} description={copy.field.helpTextHere}>
          <Input placeholder="With help" fullWidth />
        </Field>
        <Field label={copy.field.invalidField} invalid errorMessage={copy.field.somethingWrong}>
          <Input placeholder={copy.field.errorPlaceholder} fullWidth />
        </Field>
      </div>
    );
  },
};
