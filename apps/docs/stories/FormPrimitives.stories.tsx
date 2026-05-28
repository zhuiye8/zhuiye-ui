import type { Meta, StoryObj } from '@storybook/react';
import { Field, Input, Textarea, Badge } from '@zhuiye/ui';

const meta: Meta = {
  title: 'Patterns/FormPrimitives',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const ContactForm: Story = {
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
      <Field label="Message">
        <Textarea placeholder="Tell us what you think..." fullWidth />
      </Field>
      <div>
        <Badge variant="success">Form ready</Badge>
      </div>
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
      <div>
        <Badge variant="danger">3 errors</Badge>
      </div>
    </form>
  ),
};

export const DarkForm: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
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
        <Field label="Message">
          <Textarea placeholder="Tell us what you think..." fullWidth />
        </Field>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge variant="primary">Draft</Badge>
          <Badge variant="success">Saved</Badge>
        </div>
      </form>
    </div>
  ),
};
