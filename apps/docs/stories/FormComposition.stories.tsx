import type { Meta, StoryObj } from '@storybook/react';
import {
  Field,
  Fieldset,
  FormMessage,
  Input,
  Textarea,
  Checkbox,
  Switch,
  Radio,
  RadioGroup,
  Select,
  Button,
} from '@zhuiye/ui';
import type { SelectOptionSource } from '@zhuiye/ui';

const countryOptions: SelectOptionSource[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
];

const meta: Meta = {
  title: 'Patterns/FormComposition',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const RegistrationForm: Story = {
  render: () => (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '400px',
        padding: '24px',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Field label="Full name" required>
        <Input placeholder="Jane Doe" fullWidth />
      </Field>
      <Field label="Email address" required description="We will never share your email.">
        <Input type="email" placeholder="jane@example.com" fullWidth />
      </Field>
      <Field label="Password" required description="At least 8 characters.">
        <Input type="password" placeholder="Enter password" fullWidth />
      </Field>
      <Field label="Country">
        <Select options={countryOptions} placeholder="Select country" fullWidth />
      </Field>
      <Field label="Bio" description="Tell us about yourself.">
        <Textarea placeholder="Optional..." fullWidth />
      </Field>
      <Checkbox label="I agree to the terms" />
      <Button type="submit" style={{ alignSelf: 'flex-start' }}>
        Register
      </Button>
    </form>
  ),
};

export const FormWithErrors: Story = {
  render: () => (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '400px',
        padding: '24px',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Field label="Full name" required errorMessage="Name is required.">
        <Input placeholder="Jane Doe" fullWidth />
      </Field>
      <Field label="Email address" required errorMessage="Please enter a valid email address.">
        <Input type="email" placeholder="jane@example.com" fullWidth />
      </Field>
      <Field label="Message" errorMessage="Message must be at least 10 characters.">
        <Textarea placeholder="Tell us what you think..." fullWidth />
      </Field>
      <FormMessage tone="danger">Please fix the errors above.</FormMessage>
    </form>
  ),
};

export const DisabledForm: Story = {
  render: () => (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '400px',
        padding: '24px',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Field label="Full name" disabled>
        <Input placeholder="Jane Doe" fullWidth />
      </Field>
      <Field label="Email address" disabled>
        <Input type="email" placeholder="jane@example.com" fullWidth />
      </Field>
      <Field label="Bio" disabled>
        <Textarea placeholder="Disabled..." fullWidth />
      </Field>
    </form>
  ),
};

export const FieldsetComposition: Story = {
  render: () => (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '400px',
        padding: '24px',
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Fieldset legend="Account details" required description="Required for account creation.">
        <Field label="Username" required>
          <Input placeholder="jane_doe" fullWidth />
        </Field>
        <Field label="Email" required>
          <Input type="email" placeholder="jane@example.com" fullWidth />
        </Field>
      </Fieldset>
      <Fieldset legend="Preferences">
        <Switch label="Receive marketing emails" />
        <Switch label="Enable notifications" />
      </Fieldset>
      <Fieldset legend="Contact method" required description="Choose how we reach you.">
        <RadioGroup defaultValue="email" name="contact">
          <Radio value="email" label="Email" />
          <Radio value="sms" label="SMS" />
          <Radio value="phone" label="Phone" />
        </RadioGroup>
      </Fieldset>
      <Button type="submit" style={{ alignSelf: 'flex-start' }}>
        Submit
      </Button>
    </form>
  ),
};

export const DarkFormComposition: Story = {
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
          width: '400px',
          padding: '24px',
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <Field label="Full name" required>
          <Input placeholder="Jane Doe" fullWidth />
        </Field>
        <Field label="Email address" required description="We will never share your email.">
          <Input type="email" placeholder="jane@example.com" fullWidth />
        </Field>
        <Field label="Country">
          <Select options={countryOptions} placeholder="Select country" fullWidth />
        </Field>
        <Field label="Message">
          <Textarea placeholder="Tell us what you think..." fullWidth />
        </Field>
        <Fieldset legend="Notifications" description="Choose your preference.">
          <RadioGroup defaultValue="all" name="dk-notif">
            <Radio value="all" label="All" />
            <Radio value="important" label="Important only" />
            <Radio value="none" label="None" />
          </RadioGroup>
        </Fieldset>
        <Checkbox label="I agree to the terms" />
        <Button type="submit" style={{ alignSelf: 'flex-start' }}>
          Submit
        </Button>
      </form>
    </div>
  ),
};
