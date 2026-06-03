import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    errorMessage: { control: 'text' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    label: 'Accept terms and conditions',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => <Checkbox label={useStoryCopy().checkbox.acceptTerms} />,
};

export const Checked: Story = {
  render: () => <Checkbox label={useStoryCopy().checkbox.acceptTerms} defaultChecked />,
};

export const WithDescription: Story = {
  render: () => {
    const c = useStoryCopy().checkbox;
    return <Checkbox label={c.emailNotifications} description={c.emailUpdates} />;
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Indeterminate: Story = {
  render: () => <Checkbox label={useStoryCopy().checkbox.selectAll} indeterminate />,
};

export const Invalid: Story = {
  render: () => {
    const c = useStoryCopy().checkbox;
    return <Checkbox invalid errorMessage={c.mustAccept} />;
  },
};

export const FullWidth: Story = {
  render: () => {
    const c = useStoryCopy().checkbox;
    return <Checkbox fullWidth label={c.agreeToTermsFull} />;
  },
  parameters: { layout: 'padded' },
};

export const AllStates: Story = {
  render: () => {
    const c = useStoryCopy().checkbox;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox label={c.acceptTerms} />
        <Checkbox label={c.checked} defaultChecked />
        <Checkbox label={c.indeterminate} indeterminate />
        <Checkbox label={c.acceptTerms} disabled />
        <Checkbox label={c.disabledChecked} disabled defaultChecked />
        <Checkbox label={c.acceptTerms} invalid errorMessage={c.thisFieldRequired} />
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
    const c = useStoryCopy().checkbox;
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
        <Checkbox label={c.acceptTerms} />
        <Checkbox label={c.checked} defaultChecked />
        <Checkbox label={c.indeterminate} indeterminate />
        <Checkbox label={c.acceptTerms} invalid errorMessage={c.errorMessage} />
      </div>
    );
  },
};
