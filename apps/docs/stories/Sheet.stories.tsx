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
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

function SettingsBody() {
  const c = useStoryCopy().sheet;
  return (
    <div style={{ display: 'grid', gap: 'var(--zy-spacing-4)' }}>
      {[c.profileVisibility, c.billingContact, c.securityAlerts].map((label) => (
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
            {c.enabled}
          </span>
        </div>
      ))}
    </div>
  );
}

function SheetExample({
  side = 'right',
  size = 'md',
  label,
}: {
  side?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'sm' | 'md' | 'lg' | 'full';
  label?: string;
}) {
  const c = useStoryCopy().sheet;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">{label ?? c.openSheet}</Button>
      </SheetTrigger>
      <SheetContent side={side} size={size}>
        <SheetHeader>
          <SheetTitle>{c.workspaceSettings}</SheetTitle>
          <SheetDescription>{c.updateDefaults}</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <SettingsBody />
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">{useStoryCopy().button.cancel}</Button>
          </SheetClose>
          <Button>{c.saveChanges}</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export const Default: Story = {
  render: () => <SheetExample />,
};

export const Sides: Story = {
  render: () => {
    const c = useStoryCopy().sheet;
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--zy-spacing-3)' }}>
        <SheetExample side="left" label={c.left} />
        <SheetExample side="right" label={c.right} />
        <SheetExample side="top" label={c.top} />
        <SheetExample side="bottom" label={c.bottom} />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const btn = useStoryCopy().button;
    const c = useStoryCopy().sheet;
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--zy-spacing-3)' }}>
        <SheetExample size="sm" label={btn.small} />
        <SheetExample size="md" label={btn.medium} />
        <SheetExample size="lg" label={btn.large} />
        <SheetExample size="full" label={c.full} />
      </div>
    );
  },
};

export const Open: Story = {
  render: () => {
    const c = useStoryCopy().sheet;
    return (
      <Sheet defaultOpen>
        <SheetContent side="right" size="md">
          <SheetHeader>
            <SheetTitle>{c.openSheet}</SheetTitle>
            <SheetDescription>{c.visibleByDefault}</SheetDescription>
          </SheetHeader>
          <SheetBody>
            <SettingsBody />
          </SheetBody>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">{useStoryCopy().button.close}</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => {
    const c = useStoryCopy().sheet;
    return (
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
        <SheetExample label={c.openDarkSheet} />
      </div>
    );
  },
};
