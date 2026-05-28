import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, Button } from '@zhuiye/ui';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>This is a tooltip</TooltipContent>
    </Tooltip>
  ),
};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '120px', flexWrap: 'wrap' }}>
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Inverse (default)</Button>
        </TooltipTrigger>
        <TooltipContent tone="inverse">Inverse tooltip</TooltipContent>
      </Tooltip>

      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Neutral</Button>
        </TooltipTrigger>
        <TooltipContent tone="neutral">Neutral tooltip</TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '80px' }}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Top
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">Top tooltip</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Bottom
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Left
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">Left tooltip</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Right
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Right tooltip</TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithFormTrigger: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="primary">Save</Button>
        </TooltipTrigger>
        <TooltipContent>Save your changes (Ctrl+S)</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">
            Delete
          </Button>
        </TooltipTrigger>
        <TooltipContent>Delete item</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <span
            tabIndex={0}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              borderRadius: 'var(--zy-radius-full)',
              backgroundColor: 'var(--zy-muted)',
              color: 'var(--zy-muted-foreground)',
              fontSize: 'var(--zy-font-size-xs)',
              cursor: 'help',
            }}
          >
            ?
          </span>
        </TooltipTrigger>
        <TooltipContent>Helpful information goes here</TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const AlwaysOpen: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '140px', flexWrap: 'wrap' }}>
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">defaultOpen</Button>
        </TooltipTrigger>
        <TooltipContent>This tooltip starts open (defaultOpen)</TooltipContent>
      </Tooltip>

      <AlwaysOpenControlled />
    </div>
  ),
};

function AlwaysOpenControlled() {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <Button variant="outline">Controlled</Button>
        </TooltipTrigger>
        <TooltipContent>Controlled open: {String(open)}</TooltipContent>
      </Tooltip>
      <Button size="sm" variant="ghost" onClick={() => setOpen(!open)}>
        Toggle
      </Button>
    </div>
  );
}

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => (
    <div
      data-theme="dark"
      style={{
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
        display: 'flex',
        gap: '140px',
        flexWrap: 'wrap',
      }}
    >
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button>Dark Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent tone="inverse">Inverse tooltip in dark mode</TooltipContent>
      </Tooltip>

      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline">Neutral</Button>
        </TooltipTrigger>
        <TooltipContent tone="neutral">Neutral tooltip in dark mode</TooltipContent>
      </Tooltip>
    </div>
  ),
};
