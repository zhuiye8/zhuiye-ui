import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    errorMessage: { control: 'text' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
  args: {
    label: 'Enable notifications',
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => <Switch label={useStoryCopy().switchComp.enableNotifications} />,
};

export const Checked: Story = {
  render: () => <Switch label={useStoryCopy().switchComp.enableNotifications} defaultChecked />,
};

export const WithDescription: Story = {
  render: () => {
    const c = useStoryCopy().switchComp;
    return <Switch label={c.darkMode} description={c.switchThemes} />;
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Invalid: Story = {
  render: () => {
    const c = useStoryCopy().switchComp;
    return <Switch invalid errorMessage={c.mustBeEnabled} />;
  },
};

export const FullWidth: Story = {
  render: () => {
    const c = useStoryCopy().switchComp;
    return <Switch fullWidth label={c.enable2FA} />;
  },
  parameters: { layout: 'padded' },
};

export const AllStates: Story = {
  render: () => {
    const c = useStoryCopy().switchComp;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Switch label={c.enableNotifications} />
        <Switch label={c.checked} defaultChecked />
        <Switch label={c.enableNotifications} disabled />
        <Switch label={c.disabledChecked} disabled defaultChecked />
        <Switch label={c.enableNotifications} invalid errorMessage={c.mustEnabled} />
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
    const c = useStoryCopy().switchComp;
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
        <Switch label={c.enableNotifications} />
        <Switch label={c.checked} defaultChecked />
        <Switch label={c.enableNotifications} invalid errorMessage={c.errorMessage} />
      </div>
    );
  },
};
