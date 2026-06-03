import type { Meta, StoryObj } from '@storybook/react';
import { Select, Field, Fieldset, Button } from '@zhuiye/ui';
import type { SelectOptionSource } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

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

function useTimezoneOptions(): SelectOptionSource[] {
  const sc = useStoryCopy().selectComposition;
  return [
    {
      label: sc.americas,
      options: [
        { value: 'est', label: sc.tzEastern },
        { value: 'cst', label: sc.tzCentral },
        { value: 'pst', label: sc.tzPacific },
      ],
    },
    {
      label: sc.europe,
      options: [
        { value: 'gmt', label: sc.tzGMT },
        { value: 'cet', label: sc.tzCentralEuropean },
      ],
    },
    {
      label: sc.asia,
      options: [
        { value: 'jst', label: sc.tzJapan },
        { value: 'cst-cn', label: sc.tzChina },
      ],
    },
  ];
}

function useLanguageOptions(): SelectOptionSource[] {
  const sc = useStoryCopy().selectComposition;
  return [
    { value: 'en', label: sc.langEnglish },
    { value: 'es', label: sc.langSpanish },
    { value: 'fr', label: sc.langFrench },
    { value: 'de', label: sc.langGerman },
    { value: 'ja', label: sc.langJapanese },
    { value: 'zh', label: sc.langChinese },
  ];
}

const meta: Meta = {
  title: 'Patterns/SelectComposition',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const SelectWithField: Story = {
  render: () => {
    const copy = useStoryCopy();
    const countryOpts = useCountryOptions();
    return (
      <div style={{ width: '300px' }}>
        <Field
          label={copy.selectComposition.country}
          description={copy.selectComposition.selectCountryDesc}
        >
          <Select options={countryOpts} placeholder={copy.selectComposition.chooseCountry} />
        </Field>
      </div>
    );
  },
};

export const SelectWithFieldError: Story = {
  render: () => {
    const copy = useStoryCopy();
    const countryOpts = useCountryOptions();
    return (
      <div style={{ width: '300px' }}>
        <Field
          label={copy.selectComposition.country}
          required
          errorMessage={copy.selectComposition.countryRequired}
        >
          <Select options={countryOpts} placeholder={copy.selectComposition.chooseCountry} />
        </Field>
      </div>
    );
  },
};

export const DisabledSelectInField: Story = {
  render: () => {
    const copy = useStoryCopy();
    const countryOpts = useCountryOptions();
    return (
      <div style={{ width: '300px' }}>
        <Field label={copy.selectComposition.country} disabled>
          <Select options={countryOpts} defaultValue="us" />
        </Field>
      </div>
    );
  },
};

export const SelectInFieldset: Story = {
  render: () => {
    const copy = useStoryCopy();
    const countryOpts = useCountryOptions();
    const timezoneOpts = useTimezoneOptions();
    const languageOpts = useLanguageOptions();
    return (
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
        <Fieldset
          legend={copy.selectComposition.location}
          required
          description={copy.selectComposition.whereBased}
        >
          <Field label={copy.selectComposition.country} required>
            <Select
              options={countryOpts}
              placeholder={copy.selectComposition.selectCountry}
              fullWidth
            />
          </Field>
          <Field label={copy.selectComposition.timezone}>
            <Select
              options={timezoneOpts}
              placeholder={copy.selectComposition.selectTimezone}
              fullWidth
            />
          </Field>
        </Fieldset>
        <Field label={copy.selectComposition.preferredLanguage}>
          <Select
            options={languageOpts}
            placeholder={copy.selectComposition.selectLanguage}
            fullWidth
          />
        </Field>
        <Button type="submit" style={{ alignSelf: 'flex-start' }}>
          {copy.selectComposition.save}
        </Button>
      </form>
    );
  },
};

export const MixedFormControls: Story = {
  render: () => {
    const copy = useStoryCopy();
    const countryOpts = useCountryOptions();
    const timezoneOpts = useTimezoneOptions();
    return (
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
        <Field label={copy.selectComposition.country} required>
          <Select
            options={countryOpts}
            placeholder={copy.selectComposition.selectCountry}
            fullWidth
          />
        </Field>
        <Field label={copy.selectComposition.timezone} required>
          <Select
            options={timezoneOpts}
            placeholder={copy.selectComposition.selectTimezone}
            fullWidth
          />
        </Field>
        <Button type="submit" style={{ alignSelf: 'flex-start' }}>
          {copy.selectComposition.submit}
        </Button>
      </form>
    );
  },
};

export const DarkSelectComposition: Story = {
  parameters: { backgrounds: { disable: true } },
  globals: { theme: 'dark' },
  render: () => {
    const copy = useStoryCopy();
    const countryOpts = useCountryOptions();
    const timezoneOpts = useTimezoneOptions();
    const languageOpts = useLanguageOptions();
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
            width: '350px',
            padding: '24px',
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <Field label={copy.selectComposition.country} required>
            <Select
              options={countryOpts}
              placeholder={copy.selectComposition.selectCountry}
              fullWidth
            />
          </Field>
          <Field label={copy.selectComposition.timezone}>
            <Select
              options={timezoneOpts}
              placeholder={copy.selectComposition.selectTimezone}
              fullWidth
            />
          </Field>
          <Field
            label={copy.selectComposition.language}
            description={copy.selectComposition.chooseLanguage}
          >
            <Select
              options={languageOpts}
              placeholder={copy.selectComposition.selectLanguage}
              fullWidth
            />
          </Field>
          <Button type="submit" style={{ alignSelf: 'flex-start' }}>
            {copy.selectComposition.submit}
          </Button>
        </form>
      </div>
    );
  },
};
