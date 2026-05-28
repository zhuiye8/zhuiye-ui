import type { Meta, StoryObj } from '@storybook/react';
import { Select, Field, Fieldset, Button } from '@zhuiye/ui';
import type { SelectOptionSource } from '@zhuiye/ui';

const countryOptions: SelectOptionSource[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

const timezoneOptions: SelectOptionSource[] = [
  {
    label: 'Americas',
    options: [
      { value: 'est', label: 'Eastern (UTC-5)' },
      { value: 'cst', label: 'Central (UTC-6)' },
      { value: 'pst', label: 'Pacific (UTC-8)' },
    ],
  },
  {
    label: 'Europe',
    options: [
      { value: 'gmt', label: 'GMT (UTC+0)' },
      { value: 'cet', label: 'Central European (UTC+1)' },
    ],
  },
  {
    label: 'Asia',
    options: [
      { value: 'jst', label: 'Japan (UTC+9)' },
      { value: 'cst-cn', label: 'China (UTC+8)' },
    ],
  },
];

const languageOptions: SelectOptionSource[] = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'ja', label: 'Japanese' },
  { value: 'zh', label: 'Chinese' },
];

const meta: Meta = {
  title: 'Patterns/SelectComposition',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const SelectWithField: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Field label="Country" description="Select your country of residence.">
        <Select options={countryOptions} placeholder="Choose a country" />
      </Field>
    </div>
  ),
};

export const SelectWithFieldError: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Field label="Country" required errorMessage="Country is required.">
        <Select options={countryOptions} placeholder="Choose a country" />
      </Field>
    </div>
  ),
};

export const DisabledSelectInField: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Field label="Country" disabled>
        <Select options={countryOptions} defaultValue="us" />
      </Field>
    </div>
  ),
};

export const SelectInFieldset: Story = {
  render: () => (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '350px',
        padding: '24px',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Fieldset legend="Location" required description="Where are you based?">
        <Field label="Country" required>
          <Select options={countryOptions} placeholder="Select country" fullWidth />
        </Field>
        <Field label="Timezone">
          <Select options={timezoneOptions} placeholder="Select timezone" fullWidth />
        </Field>
      </Fieldset>
      <Field label="Preferred language">
        <Select options={languageOptions} placeholder="Select language" fullWidth />
      </Field>
      <Button type="submit" style={{ alignSelf: 'flex-start' }}>
        Save
      </Button>
    </form>
  ),
};

export const MixedFormControls: Story = {
  render: () => (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '350px',
        padding: '24px',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Field label="Country" required>
        <Select options={countryOptions} placeholder="Select country" fullWidth />
      </Field>
      <Field label="Timezone" required>
        <Select options={timezoneOptions} placeholder="Select timezone" fullWidth />
      </Field>
      <Button type="submit" style={{ alignSelf: 'flex-start' }}>
        Submit
      </Button>
    </form>
  ),
};

export const DarkSelectComposition: Story = {
  parameters: { backgrounds: { disable: true } },
  globals: { theme: 'dark' },
  render: () => (
    <div
      data-theme="dark"
      style={{
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '350px',
          padding: '24px',
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <Field label="Country" required>
          <Select options={countryOptions} placeholder="Select country" fullWidth />
        </Field>
        <Field label="Timezone">
          <Select options={timezoneOptions} placeholder="Select timezone" fullWidth />
        </Field>
        <Field label="Language" description="Choose your preferred language.">
          <Select options={languageOptions} placeholder="Select language" fullWidth />
        </Field>
        <Button type="submit" style={{ alignSelf: 'flex-start' }}>
          Submit
        </Button>
      </form>
    </div>
  ),
};
