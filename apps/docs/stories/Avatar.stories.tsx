import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from '@zhuiye/ui';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
  },
  args: {
    size: 'md',
    shape: 'circle',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/favicon.ico" alt="zhuiye-ui" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="invalid-url" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: 'When the image fails to load, the fallback initials are shown.',
      },
    },
  },
};

export const Circle: Story = {
  args: { shape: 'circle' },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const Square: Story = {
  args: { shape: 'square' },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
};

export const ExtraSmall: Story = {
  args: { size: 'xs' },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>XS</AvatarFallback>
    </Avatar>
  ),
};

export const Small: Story = {
  args: { size: 'sm' },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
  ),
};

export const Medium: Story = {
  args: { size: 'md' },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>MD</AvatarFallback>
    </Avatar>
  ),
};

export const Large: Story = {
  args: { size: 'lg' },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  ),
};

export const ExtraLarge: Story = {
  args: { size: 'xl' },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>XL</AvatarFallback>
    </Avatar>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--zy-spacing-4)', alignItems: 'center' }}>
      <Avatar size="xs">
        <AvatarFallback>XS</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const AllShapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--zy-spacing-4)', alignItems: 'center' }}>
      <Avatar shape="circle">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar shape="square">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>D</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>E</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
};

export const GroupWithMax: Story = {
  render: () => (
    <AvatarGroup max={3} total={8}>
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>D</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>E</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use max to limit visible avatars and show a +N overflow indicator.',
      },
    },
  },
};

export const GroupSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zy-spacing-4)' }}>
      <AvatarGroup size="xs" max={3}>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup size="sm" max={3}>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup size="md" max={3}>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup size="lg" max={3}>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup size="xl" max={3}>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  ),
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
        gap: 'var(--zy-spacing-4)',
        padding: 'var(--zy-spacing-6)',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
        alignItems: 'center',
      }}
    >
      <Avatar size="xs">
        <AvatarFallback>XS</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};
