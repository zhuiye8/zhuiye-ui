import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleHeader,
  CollapsibleTitle,
  CollapsibleDescription,
  CollapsibleTrigger,
  CollapsibleContent,
  Button,
} from '@zhuiye/ui';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible style={{ width: 'min(400px, 100%)' }}>
      <CollapsibleHeader>
        <CollapsibleTitle>System Requirements</CollapsibleTitle>
        <CollapsibleDescription>Minimum specs to run the application</CollapsibleDescription>
      </CollapsibleHeader>
      <CollapsibleTrigger>Show Requirements</CollapsibleTrigger>
      <CollapsibleContent>
        <ul style={{ margin: 0, paddingLeft: 'var(--zy-spacing-5)' }}>
          <li>OS: Windows 10+ / macOS 12+</li>
          <li>RAM: 8 GB minimum</li>
          <li>Storage: 2 GB free space</li>
          <li>Node.js 18+</li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = useState(false);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          width: 'min(400px, 100%)',
        }}
      >
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          State: {open ? 'open' : 'closed'}
        </p>
        <Button size="sm" variant="outline" onClick={() => setOpen(!open)}>
          Toggle externally
        </Button>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger>Controlled Panel</CollapsibleTrigger>
          <CollapsibleContent>
            This collapsible is controlled by external state. Click the button above or the trigger
            to toggle.
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Collapsible disabled style={{ width: 'min(400px, 100%)' }}>
      <CollapsibleTrigger>Locked Section</CollapsibleTrigger>
      <CollapsibleContent>
        This content cannot be revealed because it is disabled.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const ForceMounted: Story = {
  render: function ForceMountedStory() {
    const [open, setOpen] = useState(false);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          width: 'min(400px, 100%)',
        }}
      >
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Content stays in DOM even when closed (inspect to verify).
        </p>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger>Toggle Force Mounted</CollapsibleTrigger>
          <CollapsibleContent forceMount>
            This content is always mounted in the DOM regardless of open state.
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const Nested: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-3)',
        width: 'min(400px, 100%)',
      }}
    >
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Category: Frontend</CollapsibleTrigger>
        <CollapsibleContent>
          <Collapsible style={{ marginTop: 'var(--zy-spacing-2)' }}>
            <CollapsibleTrigger>React</CollapsibleTrigger>
            <CollapsibleContent>
              A JavaScript library for building user interfaces. Used in zhuiye-ui for all
              components.
            </CollapsibleContent>
          </Collapsible>
          <Collapsible style={{ marginTop: 'var(--zy-spacing-2)' }}>
            <CollapsibleTrigger>TypeScript</CollapsibleTrigger>
            <CollapsibleContent>
              A typed superset of JavaScript. All zhuiye-ui components are fully typed.
            </CollapsibleContent>
          </Collapsible>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger>Category: Backend</CollapsibleTrigger>
        <CollapsibleContent>
          <p
            style={{
              fontSize: 'var(--zy-font-size-sm)',
              color: 'var(--zy-muted-foreground)',
              margin: 0,
            }}
          >
            Node.js, Python, Go, and more backend technologies.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};

export const CompactSettings: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-2)',
        width: 'min(400px, 100%)',
        padding: 'var(--zy-spacing-4)',
        borderRadius: 'var(--zy-radius-md)',
        border: '1px solid var(--zy-border)',
        backgroundColor: 'var(--zy-surface-elevated)',
      }}
    >
      <h4
        style={{
          margin: 0,
          fontSize: 'var(--zy-font-size-sm)',
          fontWeight: 'var(--zy-font-weight-semibold)',
          color: 'var(--zy-foreground)',
        }}
      >
        Advanced Options
      </h4>
      <Collapsible>
        <CollapsibleTrigger showChevron={false}>Developer Settings</CollapsibleTrigger>
        <CollapsibleContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--zy-spacing-1)',
              fontSize: 'var(--zy-font-size-sm)',
              color: 'var(--zy-muted-foreground)',
            }}
          >
            <span>Verbose logging: Off</span>
            <span>Source maps: On</span>
            <span>Hot reload: Enabled</span>
          </div>
        </CollapsibleContent>
      </Collapsible>
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
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
        width: 'min(400px, 100%)',
      }}
    >
      <Collapsible defaultOpen>
        <CollapsibleHeader>
          <CollapsibleTitle>Dark Mode Panel</CollapsibleTitle>
          <CollapsibleDescription>This panel defaults to open in dark theme</CollapsibleDescription>
        </CollapsibleHeader>
        <CollapsibleTrigger>Toggle Details</CollapsibleTrigger>
        <CollapsibleContent>
          Collapsible content rendered with dark theme design tokens. Background, text, and border
          colors all adapt automatically.
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};
