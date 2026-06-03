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
import { useStoryCopy } from './story-i18n';

const meta: Meta = {
  title: 'Patterns/FormComposition',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

function useCountryOptions(): SelectOptionSource[] {
  const sc = useStoryCopy().selectComposition;
  return [
    { value: 'us', label: sc.countryUS },
    { value: 'ca', label: sc.countryCA },
    { value: 'uk', label: sc.countryUK },
    { value: 'de', label: sc.countryDE },
    { value: 'fr', label: sc.countryFR },
    { value: 'jp', label: sc.countryJP },
  ];
}

export const RegistrationForm: Story = {
  render: () => {
    const c = useStoryCopy().formComposition;
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
        <Field label={c.fullName} required>
          <Input placeholder={c.janeDoe} fullWidth />
        </Field>
        <Field label={c.emailAddress} required description={c.neverShareEmail}>
          <Input type="email" placeholder="jane@example.com" fullWidth />
        </Field>
        <Field label={c.password} required description={c.atLeast8}>
          <Input type="password" placeholder={c.enterPassword} fullWidth />
        </Field>
        <Field label={c.country}>
          <Select options={useCountryOptions()} placeholder={c.selectCountry} fullWidth />
        </Field>
        <Field label={c.bio} description={c.tellAboutYourself}>
          <Textarea placeholder={c.optional} fullWidth />
        </Field>
        <Checkbox label={c.agreeToTerms} />
        <Button type="submit" style={{ alignSelf: 'flex-start' }}>
          {c.register}
        </Button>
      </form>
    );
  },
};

export const FormWithErrors: Story = {
  render: () => {
    const c = useStoryCopy().formComposition;
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
        <Field label={c.fullName} required errorMessage={c.nameRequired}>
          <Input placeholder={c.janeDoe} fullWidth />
        </Field>
        <Field label={c.emailAddress} required errorMessage={c.invalidEmail}>
          <Input type="email" placeholder="jane@example.com" fullWidth />
        </Field>
        <Field label={c.password} errorMessage={c.messageMinLength}>
          <Textarea placeholder={c.tellWhatYouThink} fullWidth />
        </Field>
        <FormMessage tone="danger">{c.fixErrors}</FormMessage>
      </form>
    );
  },
};

export const DisabledForm: Story = {
  render: () => {
    const c = useStoryCopy().formComposition;
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
        <Field label={c.fullName} disabled>
          <Input placeholder={c.janeDoe} fullWidth />
        </Field>
        <Field label={c.emailAddress} disabled>
          <Input type="email" placeholder="jane@example.com" fullWidth />
        </Field>
        <Field label={c.bio} disabled>
          <Textarea placeholder={c.disabledPlaceholder} fullWidth />
        </Field>
      </form>
    );
  },
};

export const FieldsetComposition: Story = {
  render: () => {
    const c = useStoryCopy().formComposition;
    return (
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
        <Fieldset legend={c.accountDetails} required description={c.requiredForCreation}>
          <Field label={c.username} required>
            <Input placeholder={c.janeDoeUsername} fullWidth />
          </Field>
          <Field label={c.email} required>
            <Input type="email" placeholder="jane@example.com" fullWidth />
          </Field>
        </Fieldset>
        <Fieldset legend={c.preferences}>
          <Switch label={c.receiveMarketing} />
          <Switch label={c.enableNotifications} />
        </Fieldset>
        <Fieldset legend={c.contactMethod} required description={c.howWeReachYou}>
          <RadioGroup defaultValue="email" name="contact">
            <Radio value="email" label={c.email} />
            <Radio value="sms" label={c.sms} />
            <Radio value="phone" label={c.phone} />
          </RadioGroup>
        </Fieldset>
        <Button type="submit" style={{ alignSelf: 'flex-start' }}>
          {c.submit}
        </Button>
      </form>
    );
  },
};

export const DarkFormComposition: Story = {
  parameters: { backgrounds: { disable: true } },
  globals: { theme: 'dark' },
  render: () => {
    const c = useStoryCopy().formComposition;
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
          <Field label={c.fullName} required>
            <Input placeholder={c.janeDoe} fullWidth />
          </Field>
          <Field label={c.emailAddress} required description={c.neverShareEmail}>
            <Input type="email" placeholder="jane@example.com" fullWidth />
          </Field>
          <Field label={c.country}>
            <Select options={useCountryOptions()} placeholder={c.selectCountry} fullWidth />
          </Field>
          <Field label={c.password}>
            <Textarea placeholder={c.tellWhatYouThink} fullWidth />
          </Field>
          <Fieldset legend={c.notifications} description={c.choosePreference}>
            <RadioGroup defaultValue="all" name="dk-notif">
              <Radio value="all" label={c.all} />
              <Radio value="important" label={c.importantOnly} />
              <Radio value="none" label={c.none} />
            </RadioGroup>
          </Fieldset>
          <Checkbox label={c.agreeToTerms} />
          <Button type="submit" style={{ alignSelf: 'flex-start' }}>
            {c.submit}
          </Button>
        </form>
      </div>
    );
  },
};
