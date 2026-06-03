import type { Meta, StoryObj } from '@storybook/react';
import { Field, Input, Textarea, Badge } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta = {
  title: 'Patterns/FormPrimitives',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const ContactForm: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
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
        <Field label={copy.formPrimitives.fullName} required>
          <Input placeholder={copy.formPrimitives.janeDoe} fullWidth />
        </Field>
        <Field
          label={copy.formPrimitives.emailAddress}
          required
          description={copy.formPrimitives.neverShare}
        >
          <Input type="email" placeholder={copy.formPrimitives.janeEmail} fullWidth />
        </Field>
        <Field label={copy.formPrimitives.message}>
          <Textarea placeholder={copy.formPrimitives.tellWhatYouThink} fullWidth />
        </Field>
        <div>
          <Badge variant="success">{copy.formPrimitives.formReady}</Badge>
        </div>
      </form>
    );
  },
};

export const FormWithErrors: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
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
        <Field
          label={copy.formPrimitives.fullName}
          required
          errorMessage={copy.formPrimitives.nameRequired}
        >
          <Input placeholder={copy.formPrimitives.janeDoe} fullWidth />
        </Field>
        <Field
          label={copy.formPrimitives.emailAddress}
          required
          errorMessage={copy.formPrimitives.invalidEmail}
        >
          <Input type="email" placeholder={copy.formPrimitives.janeEmail} fullWidth />
        </Field>
        <Field
          label={copy.formPrimitives.message}
          errorMessage={copy.formPrimitives.messageMinLength}
        >
          <Textarea placeholder={copy.formPrimitives.tellWhatYouThink} fullWidth />
        </Field>
        <div>
          <Badge variant="danger">3 {copy.formPrimitives.errors}</Badge>
        </div>
      </form>
    );
  },
};

export const DarkForm: Story = {
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
          <Field label={copy.formPrimitives.fullName} required>
            <Input placeholder={copy.formPrimitives.janeDoe} fullWidth />
          </Field>
          <Field
            label={copy.formPrimitives.emailAddress}
            required
            description={copy.formPrimitives.neverShare}
          >
            <Input type="email" placeholder={copy.formPrimitives.janeEmail} fullWidth />
          </Field>
          <Field label={copy.formPrimitives.message}>
            <Textarea placeholder={copy.formPrimitives.tellWhatYouThink} fullWidth />
          </Field>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Badge variant="primary">{copy.formPrimitives.draft}</Badge>
            <Badge variant="success">{copy.formPrimitives.saved}</Badge>
          </div>
        </form>
      </div>
    );
  },
};
