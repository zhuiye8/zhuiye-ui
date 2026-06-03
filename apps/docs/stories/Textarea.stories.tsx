import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
  args: {
    placeholder: 'Enter your message...',
    resize: 'vertical',
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const NoResize: Story = {
  args: { resize: 'none' },
};

export const BothResize: Story = {
  args: { resize: 'both' },
};

export const Invalid: Story = {
  render: () => {
    const copy = useStoryCopy();
    return <Textarea invalid errorMessage={copy.textarea.fieldRequired} id="message" />;
  },
};

export const Disabled: Story = {
  render: () => {
    const copy = useStoryCopy();
    return <Textarea disabled value={copy.textarea.disabledContent} />;
  },
};

export const ReadOnly: Story = {
  render: () => {
    const copy = useStoryCopy();
    return <Textarea readOnly value={copy.textarea.readOnlyContent} />;
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: 'padded' },
};

export const AllStates: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '400px' }}>
        <Textarea placeholder={copy.textarea.default} />
        <Textarea placeholder={copy.textarea.disabled} disabled />
        <Textarea placeholder={copy.textarea.readOnly} readOnly value={copy.textarea.readOnly} />
        <Textarea placeholder={copy.textarea.invalid} />
        <Textarea
          placeholder={copy.textarea.withError}
          id="err"
          errorMessage={copy.textarea.somethingWrong}
        />
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
          gap: '12px',
          padding: '24px',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: '8px',
          width: '400px',
        }}
      >
        <Textarea placeholder={copy.textarea.default} />
        <Textarea placeholder={copy.textarea.disabled} disabled />
        <Textarea placeholder={copy.textarea.invalid} invalid />
      </div>
    );
  },
};
