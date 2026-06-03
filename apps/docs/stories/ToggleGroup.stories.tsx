import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Single: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <ToggleGroup type="single" defaultValue="center" aria-label={copy.toggleGroup.textAlignment}>
        <ToggleGroupItem value="left">{copy.toggleGroup.left}</ToggleGroupItem>
        <ToggleGroupItem value="center">{copy.toggleGroup.center}</ToggleGroupItem>
        <ToggleGroupItem value="right">{copy.toggleGroup.right}</ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <ToggleGroup
        type="multiple"
        defaultValue={['bold', 'underline']}
        aria-label={copy.toggleGroup.textStyle}
      >
        <ToggleGroupItem value="bold">B</ToggleGroupItem>
        <ToggleGroupItem value="italic">I</ToggleGroupItem>
        <ToggleGroupItem value="underline">U</ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const VariantsAndSizes: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'grid',
          gap: 'var(--zy-spacing-5)',
          justifyItems: 'start',
        }}
      >
        <ToggleGroup type="single" defaultValue="day" variant="ghost" size="sm">
          <ToggleGroupItem value="day">{copy.toggleGroup.day}</ToggleGroupItem>
          <ToggleGroupItem value="week">{copy.toggleGroup.week}</ToggleGroupItem>
          <ToggleGroupItem value="month">{copy.toggleGroup.month}</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup type="single" defaultValue="week" variant="outline" tone="primary">
          <ToggleGroupItem value="day">{copy.toggleGroup.day}</ToggleGroupItem>
          <ToggleGroupItem value="week">{copy.toggleGroup.week}</ToggleGroupItem>
          <ToggleGroupItem value="month">{copy.toggleGroup.month}</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup type="single" defaultValue="month" variant="soft" size="lg">
          <ToggleGroupItem value="day">{copy.toggleGroup.day}</ToggleGroupItem>
          <ToggleGroupItem value="week">{copy.toggleGroup.week}</ToggleGroupItem>
          <ToggleGroupItem value="month">{copy.toggleGroup.month}</ToggleGroupItem>
        </ToggleGroup>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <ToggleGroup
        type="single"
        defaultValue="grid"
        orientation="vertical"
        aria-label={copy.toggleGroup.viewMode}
      >
        <ToggleGroupItem value="grid">{copy.toggleGroup.grid}</ToggleGroupItem>
        <ToggleGroupItem value="list">{copy.toggleGroup.list}</ToggleGroupItem>
        <ToggleGroupItem value="table">{copy.toggleGroup.table}</ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const copy = useStoryCopy();
    const [value, setValue] = useState('preview');
    return (
      <div style={{ display: 'grid', gap: 'var(--zy-spacing-3)', justifyItems: 'start' }}>
        <ToggleGroup type="single" value={value} onValueChange={(next) => next && setValue(next)}>
          <ToggleGroupItem value="preview">{copy.toggleGroup.preview}</ToggleGroupItem>
          <ToggleGroupItem value="code">{copy.toggleGroup.code}</ToggleGroupItem>
          <ToggleGroupItem value="diff">{copy.toggleGroup.diff}</ToggleGroupItem>
        </ToggleGroup>
        <span
          style={{
            color: 'var(--zy-muted-foreground)',
            fontSize: 'var(--zy-font-size-sm)',
          }}
        >
          {copy.toggleGroup.active}: {value}
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
  render: () => (
    <div
      data-theme="dark"
      style={{
        padding: 'var(--zy-spacing-6)',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
      }}
    >
      <ToggleGroup type="multiple" defaultValue={['bold']} variant="outline" tone="primary">
        <ToggleGroupItem value="bold">B</ToggleGroupItem>
        <ToggleGroupItem value="italic">I</ToggleGroupItem>
        <ToggleGroupItem value="underline">U</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};
