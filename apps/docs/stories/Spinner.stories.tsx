import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Spinner> = {
  title: 'Primitives/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    decorative: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  args: {
    size: 'md',
    decorative: false,
    label: 'Loading',
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Medium: Story = {
  args: { size: 'md' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Decorative: Story = {
  args: { decorative: true },
  parameters: {
    docs: {
      description: {
        story:
          'Decorative spinners are hidden from screen readers. Use alongside visible text that communicates the loading state.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Spinner size="sm" />
        <span style={{ fontSize: '12px', color: 'var(--zy-muted-foreground)' }}>sm</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Spinner size="md" />
        <span style={{ fontSize: '12px', color: 'var(--zy-muted-foreground)' }}>md</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Spinner size="lg" />
        <span style={{ fontSize: '12px', color: 'var(--zy-muted-foreground)' }}>lg</span>
      </div>
    </div>
  ),
};

export const WithCustomLabel: Story = {
  render: () => {
    const copy = useStoryCopy();
    return <Spinner label={copy.spinnerComp.fetchingData} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom label text is read by screen readers instead of the default "Loading".',
      },
    },
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => (
    <div
      data-theme="dark"
      style={{
        display: 'flex',
        gap: '24px',
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: '8px',
        alignItems: 'center',
      }}
    >
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};
