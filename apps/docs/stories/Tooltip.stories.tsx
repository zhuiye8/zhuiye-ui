import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, Button } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

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
  render: () => {
    const c = useStoryCopy().tooltip;
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">{c.hoverMe}</Button>
        </TooltipTrigger>
        <TooltipContent>{c.thisIsTooltip}</TooltipContent>
      </Tooltip>
    );
  },
};

export const Tones: Story = {
  render: () => {
    const c = useStoryCopy().tooltip;
    return (
      <div style={{ display: 'flex', gap: '120px', flexWrap: 'wrap' }}>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button variant="outline">{c.inverseDefault}</Button>
          </TooltipTrigger>
          <TooltipContent tone="inverse">{c.inverseTooltip}</TooltipContent>
        </Tooltip>

        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button variant="outline">{c.neutral}</Button>
          </TooltipTrigger>
          <TooltipContent tone="neutral">{c.neutralTooltip}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
};

export const Placements: Story = {
  render: () => {
    const c = useStoryCopy().tooltip;
    return (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '80px' }}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              {c.top}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">{c.topTooltip}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              {c.bottom}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">{c.bottomTooltip}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              {c.left}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">{c.leftTooltip}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              {c.right}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">{c.rightTooltip}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
};

export const WithFormTrigger: Story = {
  render: () => {
    const c = useStoryCopy().tooltip;
    return (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary">{c.save}</Button>
          </TooltipTrigger>
          <TooltipContent>{c.saveChangesTooltip}</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="sm">
              {c.delete}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{c.deleteItem}</TooltipContent>
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
          <TooltipContent>{c.helpfulInfo}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
};

export const AlwaysOpen: Story = {
  render: () => {
    const c = useStoryCopy().tooltip;
    return (
      <div style={{ display: 'flex', gap: '140px', flexWrap: 'wrap' }}>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button variant="outline">{c.defaultOpen}</Button>
          </TooltipTrigger>
          <TooltipContent>{c.startsOpen}</TooltipContent>
        </Tooltip>

        <AlwaysOpenControlled />
      </div>
    );
  },
};

function AlwaysOpenControlled() {
  const [open, setOpen] = useState(true);
  const c = useStoryCopy().tooltip;
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <Button variant="outline">{c.controlled}</Button>
        </TooltipTrigger>
        <TooltipContent>
          {c.controlled}: {String(open)}
        </TooltipContent>
      </Tooltip>
      <Button size="sm" variant="ghost" onClick={() => setOpen(!open)}>
        {c.toggle}
      </Button>
    </div>
  );
}

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => {
    const c = useStoryCopy().tooltip;
    return (
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
            <Button>{c.darkTooltip}</Button>
          </TooltipTrigger>
          <TooltipContent tone="inverse">{c.inverseTooltipDark}</TooltipContent>
        </Tooltip>

        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button variant="outline">{c.neutral}</Button>
          </TooltipTrigger>
          <TooltipContent tone="neutral">{c.neutralTooltipDark}</TooltipContent>
        </Tooltip>
      </div>
    );
  },
};
