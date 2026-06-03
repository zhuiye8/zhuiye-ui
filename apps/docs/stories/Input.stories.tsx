import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
  args: {
    placeholder: 'Enter text...',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input placeholder={useStoryCopy().input.placeholder} size="md" />,
};

export const Small: Story = {
  render: () => <Input placeholder={useStoryCopy().input.placeholder} size="sm" />,
};

export const Large: Story = {
  render: () => <Input placeholder={useStoryCopy().input.placeholder} size="lg" />,
};

export const Invalid: Story = {
  render: () => (
    <Input invalid errorMessage={useStoryCopy().input.errorMessage} id="email" size="md" />
  ),
};

export const Disabled: Story = {
  render: () => <Input disabled value={useStoryCopy().input.disabledValue} size="md" />,
};

export const ReadOnly: Story = {
  render: () => <Input readOnly value={useStoryCopy().input.readOnlyValue} size="md" />,
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: 'padded' },
};

export const WithLeftAdornment: Story = {
  render: () => (
    <Input
      leftAdornment={<span style={{ color: 'var(--zy-muted-foreground)' }}>$</span>}
      placeholder="0.00"
      size="md"
    />
  ),
};

export const WithRightAdornment: Story = {
  render: () => (
    <Input
      rightAdornment={
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      }
      placeholder={useStoryCopy().input.search}
      size="md"
    />
  ),
};

export const WithBothAdornments: Story = {
  render: () => (
    <Input
      leftAdornment={<span style={{ color: 'var(--zy-muted-foreground)' }}>@</span>}
      placeholder={useStoryCopy().input.username}
      size="md"
    />
  ),
};

export const AllSizes: Story = {
  render: () => {
    const c = useStoryCopy().input;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
        <Input size="sm" placeholder={c.small} />
        <Input size="md" placeholder={c.medium} />
        <Input size="lg" placeholder={c.large} />
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => {
    const c = useStoryCopy().input;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
        <Input placeholder={c.default} />
        <Input placeholder={c.disabled} disabled />
        <Input placeholder={c.readOnly} readOnly value={c.readOnly} />
        <Input placeholder={c.invalid} invalid />
        <Input placeholder={c.withError} id="err" errorMessage={c.somethingWentWrong} />
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
    const c = useStoryCopy().input;
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
          width: '300px',
        }}
      >
        <Input placeholder={c.default} />
        <Input placeholder={c.disabled} disabled />
        <Input placeholder={c.invalid} invalid />
      </div>
    );
  },
};
