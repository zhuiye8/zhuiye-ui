import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  args: {
    children: 'Email address',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const WithDescription: Story = {
  args: {
    children: 'Email address',
    description: 'We will never share your email with anyone else.',
  },
};

export const RequiredWithDescription: Story = {
  args: {
    required: true,
    description: 'This field is mandatory for account creation.',
    children: 'Email address',
  },
};

export const ErrorState: Story = {
  args: {
    error: true,
    required: true,
    children: 'Email address',
  },
};

export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'email-input',
    children: 'Email address',
  },
};

export const AllStates: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Label>{copy.labelComp.defaultLabel}</Label>
        <Label required>{copy.labelComp.requiredField}</Label>
        <Label description={copy.labelComp.helpText}>{copy.labelComp.withDescription}</Label>
        <Label required description={copy.labelComp.fieldRequired}>
          {copy.labelComp.requiredWithDesc}
        </Label>
        <Label error required>
          {copy.labelComp.errorState}
        </Label>
      </div>
    );
  },
};

export const DarkTheme: Story = {
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
          gap: '16px',
          padding: '24px',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: '8px',
        }}
      >
        <Label>{copy.labelComp.defaultLabel}</Label>
        <Label required>{copy.labelComp.requiredField}</Label>
        <Label description={copy.labelComp.helpTextShort}>{copy.labelComp.withDescription}</Label>
        <Label error>{copy.labelComp.errorState}</Label>
      </div>
    );
  },
};
