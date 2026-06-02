import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from '@zhuiye/ui';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

function SettingsBody() {
  return (
    <div style={{ display: 'grid', gap: 'var(--zy-spacing-4)' }}>
      {['Profile visibility', 'Billing contact', 'Security alerts'].map((label) => (
        <div
          key={label}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--zy-spacing-4)',
            padding: 'var(--zy-spacing-3)',
            border: '1px solid var(--zy-border)',
            borderRadius: 'var(--zy-radius-md)',
          }}
        >
          <span
            style={{
              color: 'var(--zy-foreground)',
              fontWeight: 'var(--zy-font-weight-medium)',
            }}
          >
            {label}
          </span>
          <span
            style={{
              color: 'var(--zy-muted-foreground)',
              fontSize: 'var(--zy-font-size-sm)',
            }}
          >
            Enabled
          </span>
        </div>
      ))}
    </div>
  );
}

function SheetExample({
  side = 'right',
  size = 'md',
  label = 'Open sheet',
}: {
  side?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'sm' | 'md' | 'lg' | 'full';
  label?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">{label}</Button>
      </SheetTrigger>
      <SheetContent side={side} size={size}>
        <SheetHeader>
          <SheetTitle>Workspace settings</SheetTitle>
          <SheetDescription>Update project defaults and notification preferences.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <SettingsBody />
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export const Default: Story = {
  render: () => <SheetExample />,
};

export const Sides: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--zy-spacing-3)' }}>
      <SheetExample side="left" label="Left" />
      <SheetExample side="right" label="Right" />
      <SheetExample side="top" label="Top" />
      <SheetExample side="bottom" label="Bottom" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--zy-spacing-3)' }}>
      <SheetExample size="sm" label="Small" />
      <SheetExample size="md" label="Medium" />
      <SheetExample size="lg" label="Large" />
      <SheetExample size="full" label="Full" />
    </div>
  ),
};

export const Open: Story = {
  render: () => (
    <Sheet defaultOpen>
      <SheetContent side="right" size="md">
        <SheetHeader>
          <SheetTitle>Open sheet</SheetTitle>
          <SheetDescription>Visible by default for visual review.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <SettingsBody />
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
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
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '240px',
        padding: 'var(--zy-spacing-6)',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
      }}
    >
      <SheetExample label="Open dark sheet" />
    </div>
  ),
};
