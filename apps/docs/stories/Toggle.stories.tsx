import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Toggle aria-label={copy.toggleComp.bold} defaultPressed>
        B
      </Toggle>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--zy-spacing-3)' }}>
        <Toggle aria-label={copy.toggleComp.ghostBold} variant="ghost" defaultPressed>
          B
        </Toggle>
        <Toggle aria-label={copy.toggleComp.outlineItalic} variant="outline" defaultPressed>
          I
        </Toggle>
        <Toggle aria-label={copy.toggleComp.softUnderline} variant="soft" defaultPressed>
          U
        </Toggle>
      </div>
    );
  },
};

export const SizesAndTones: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--zy-spacing-3)' }}>
        <Toggle aria-label={copy.toggleComp.smallNeutral} size="sm" defaultPressed>
          {copy.toggleComp.small}
        </Toggle>
        <Toggle
          aria-label={copy.toggleComp.mediumPrimary}
          tone="primary"
          variant="outline"
          defaultPressed
        >
          {copy.toggleComp.primary}
        </Toggle>
        <Toggle
          aria-label={copy.toggleComp.largeDanger}
          size="lg"
          tone="danger"
          variant="soft"
          defaultPressed
        >
          {copy.toggleComp.danger}
        </Toggle>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const copy = useStoryCopy();
    const [pressed, setPressed] = useState(true);
    return (
      <div style={{ display: 'grid', gap: 'var(--zy-spacing-3)', justifyItems: 'start' }}>
        <Toggle
          pressed={pressed}
          onPressedChange={setPressed}
          aria-label={copy.toggleComp.pin}
          variant="outline"
        >
          {copy.toggleComp.pin}
        </Toggle>
        <span
          style={{
            color: 'var(--zy-muted-foreground)',
            fontSize: 'var(--zy-font-size-sm)',
          }}
        >
          State: {pressed ? copy.toggleComp.pinned : copy.toggleComp.unpinned}
        </span>
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
          display: 'flex',
          gap: 'var(--zy-spacing-3)',
          padding: 'var(--zy-spacing-6)',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: 'var(--zy-radius-md)',
        }}
      >
        <Toggle aria-label={copy.toggleComp.darkBold} defaultPressed>
          B
        </Toggle>
        <Toggle
          aria-label={copy.toggleComp.darkItalic}
          variant="outline"
          tone="primary"
          defaultPressed
        >
          I
        </Toggle>
      </div>
    );
  },
};
