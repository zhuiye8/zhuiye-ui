import type { Meta, StoryObj } from '@storybook/react';
import { Label, Input, Textarea, Badge } from '@zhuiye/ui';

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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Label htmlFor="cf-name" required>
          Full name
        </Label>
        <Input id="cf-name" placeholder="Jane Doe" fullWidth />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Label htmlFor="cf-email" required description="We will never share your email.">
          Email address
        </Label>
        <Input id="cf-email" type="email" placeholder="jane@example.com" fullWidth />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Label htmlFor="cf-msg">Message</Label>
        <Textarea id="cf-msg" placeholder="Tell us what you think..." fullWidth />
      </div>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Label htmlFor="err-name" required error>
          Full name
        </Label>
        <Input id="err-name" placeholder="Jane Doe" fullWidth invalid />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Label htmlFor="err-email" required error>
          Email address
        </Label>
        <Input
          id="err-email"
          type="email"
          placeholder="jane@example.com"
          fullWidth
          invalid
          errorMessage="Please enter a valid email address."
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <Label htmlFor="err-msg" error>
          Message
        </Label>
        <Textarea
          id="err-msg"
          placeholder="Tell us what you think..."
          fullWidth
          invalid
          errorMessage="Message must be at least 10 characters."
        />
      </div>
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
        borderRadius: '8px',
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Label htmlFor="dk-name" required>
            Full name
          </Label>
          <Input id="dk-name" placeholder="Jane Doe" fullWidth />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Label htmlFor="dk-email" required description="We will never share your email.">
            Email address
          </Label>
          <Input id="dk-email" type="email" placeholder="jane@example.com" fullWidth />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Label htmlFor="dk-msg">Message</Label>
          <Textarea id="dk-msg" placeholder="Tell us what you think..." fullWidth />
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge variant="primary">Draft</Badge>
          <Badge variant="success">Saved</Badge>
        </div>
      </form>
    </div>
  ),
};
