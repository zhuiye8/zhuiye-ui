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
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Collapsible style={{ width: 'min(400px, 100%)' }}>
        <CollapsibleHeader>
          <CollapsibleTitle>{copy.collapsible.systemRequirements}</CollapsibleTitle>
          <CollapsibleDescription>{copy.collapsible.minimumSpecs}</CollapsibleDescription>
        </CollapsibleHeader>
        <CollapsibleTrigger>{copy.collapsible.showRequirements}</CollapsibleTrigger>
        <CollapsibleContent>
          <ul style={{ margin: 0, paddingLeft: 'var(--zy-spacing-5)' }}>
            <li>{copy.collapsible.os}</li>
            <li>{copy.collapsible.ram}</li>
            <li>{copy.collapsible.storage}</li>
            <li>{copy.collapsible.nodejs}</li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const copy = useStoryCopy();
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
          {copy.collapsible.state}:{' '}
          {open ? copy.collapsible.stateOpen : copy.collapsible.stateClosed}
        </p>
        <Button size="sm" variant="outline" onClick={() => setOpen(!open)}>
          {copy.collapsible.toggleExternally}
        </Button>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger>{copy.collapsible.controlledPanel}</CollapsibleTrigger>
          <CollapsibleContent>{copy.collapsible.controlledDesc}</CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Collapsible disabled style={{ width: 'min(400px, 100%)' }}>
        <CollapsibleTrigger>{copy.collapsible.lockedSection}</CollapsibleTrigger>
        <CollapsibleContent>{copy.collapsible.cannotReveal}</CollapsibleContent>
      </Collapsible>
    );
  },
};

export const ForceMounted: Story = {
  render: function ForceMountedStory() {
    const copy = useStoryCopy();
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
          {copy.collapsible.staysInDom}
        </p>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger>{copy.collapsible.toggleForceMounted}</CollapsibleTrigger>
          <CollapsibleContent forceMount>{copy.collapsible.alwaysMounted}</CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const Nested: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          width: 'min(400px, 100%)',
        }}
      >
        <Collapsible defaultOpen>
          <CollapsibleTrigger>{copy.collapsible.categoryFrontend}</CollapsibleTrigger>
          <CollapsibleContent>
            <Collapsible style={{ marginTop: 'var(--zy-spacing-2)' }}>
              <CollapsibleTrigger>{copy.collapsible.react}</CollapsibleTrigger>
              <CollapsibleContent>{copy.collapsible.reactDesc}</CollapsibleContent>
            </Collapsible>
            <Collapsible style={{ marginTop: 'var(--zy-spacing-2)' }}>
              <CollapsibleTrigger>{copy.collapsible.typescript}</CollapsibleTrigger>
              <CollapsibleContent>{copy.collapsible.typescriptDesc}</CollapsibleContent>
            </Collapsible>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger>{copy.collapsible.categoryBackend}</CollapsibleTrigger>
          <CollapsibleContent>
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              {copy.collapsible.backendDesc}
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const CompactSettings: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
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
          {copy.collapsible.advancedOptions}
        </h4>
        <Collapsible>
          <CollapsibleTrigger showChevron={false}>
            {copy.collapsible.developerSettings}
          </CollapsibleTrigger>
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
              <span>{copy.collapsible.verboseLogging}</span>
              <span>{copy.collapsible.sourceMaps}</span>
              <span>{copy.collapsible.hotReload}</span>
            </div>
          </CollapsibleContent>
        </Collapsible>
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
    const copy = useStoryCopy();
    return (
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
            <CollapsibleTitle>{copy.collapsible.darkModePanel}</CollapsibleTitle>
            <CollapsibleDescription>{copy.collapsible.darkPanelDesc}</CollapsibleDescription>
          </CollapsibleHeader>
          <CollapsibleTrigger>{copy.collapsible.toggleDetails}</CollapsibleTrigger>
          <CollapsibleContent>{copy.collapsible.darkContent}</CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};
