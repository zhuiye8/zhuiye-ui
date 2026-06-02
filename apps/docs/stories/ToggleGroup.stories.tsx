import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@zhuiye/ui';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={['bold', 'underline']} aria-label="Text style">
      <ToggleGroupItem value="bold">B</ToggleGroupItem>
      <ToggleGroupItem value="italic">I</ToggleGroupItem>
      <ToggleGroupItem value="underline">U</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const VariantsAndSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--zy-spacing-5)',
        justifyItems: 'start',
      }}
    >
      <ToggleGroup type="single" defaultValue="day" variant="ghost" size="sm">
        <ToggleGroupItem value="day">Day</ToggleGroupItem>
        <ToggleGroupItem value="week">Week</ToggleGroupItem>
        <ToggleGroupItem value="month">Month</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" defaultValue="week" variant="outline" tone="primary">
        <ToggleGroupItem value="day">Day</ToggleGroupItem>
        <ToggleGroupItem value="week">Week</ToggleGroupItem>
        <ToggleGroupItem value="month">Month</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" defaultValue="month" variant="soft" size="lg">
        <ToggleGroupItem value="day">Day</ToggleGroupItem>
        <ToggleGroupItem value="week">Week</ToggleGroupItem>
        <ToggleGroupItem value="month">Month</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="grid" orientation="vertical" aria-label="View mode">
      <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
      <ToggleGroupItem value="list">List</ToggleGroupItem>
      <ToggleGroupItem value="table">Table</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState('preview');
    return (
      <div style={{ display: 'grid', gap: 'var(--zy-spacing-3)', justifyItems: 'start' }}>
        <ToggleGroup type="single" value={value} onValueChange={(next) => next && setValue(next)}>
          <ToggleGroupItem value="preview">Preview</ToggleGroupItem>
          <ToggleGroupItem value="code">Code</ToggleGroupItem>
          <ToggleGroupItem value="diff">Diff</ToggleGroupItem>
        </ToggleGroup>
        <span
          style={{
            color: 'var(--zy-muted-foreground)',
            fontSize: 'var(--zy-font-size-sm)',
          }}
        >
          Active: {value}
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
