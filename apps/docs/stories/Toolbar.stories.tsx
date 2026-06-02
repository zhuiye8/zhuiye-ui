import type { Meta, StoryObj } from '@storybook/react';
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@zhuiye/ui';

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

function EditorToolbar({ variant = 'framed' }: { variant?: 'plain' | 'subtle' | 'framed' }) {
  return (
    <Toolbar aria-label="Editor tools" variant={variant}>
      <ToolbarToggleGroup type="multiple" defaultValue={['bold']} aria-label="Text formatting">
        <ToolbarToggleItem value="bold" aria-label="Bold">
          B
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic" aria-label="Italic">
          I
        </ToolbarToggleItem>
        <ToolbarToggleItem value="underline" aria-label="Underline">
          U
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
        <ToolbarToggleItem value="left" aria-label="Align left">
          L
        </ToolbarToggleItem>
        <ToolbarToggleItem value="center" aria-label="Align center">
          C
        </ToolbarToggleItem>
        <ToolbarToggleItem value="right" aria-label="Align right">
          R
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarLink href="#history">History</ToolbarLink>
      <ToolbarButton tone="primary">Publish</ToolbarButton>
    </Toolbar>
  );
}

export const Default: Story = {
  render: () => <EditorToolbar />,
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--zy-spacing-5)', justifyItems: 'start' }}>
      <EditorToolbar variant="plain" />
      <EditorToolbar variant="subtle" />
      <EditorToolbar variant="framed" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--zy-spacing-5)', justifyItems: 'start' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Toolbar key={size} aria-label={`${size} tools`} variant="framed" size={size}>
          <ToolbarToggleGroup type="multiple" defaultValue={['bold']} aria-label="Format">
            <ToolbarToggleItem value="bold" aria-label="Bold">
              B
            </ToolbarToggleItem>
            <ToolbarToggleItem value="italic" aria-label="Italic">
              I
            </ToolbarToggleItem>
          </ToolbarToggleGroup>
          <ToolbarSeparator />
          <ToolbarButton>Save</ToolbarButton>
        </Toolbar>
      ))}
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Toolbar aria-label="Canvas tools" variant="framed" orientation="vertical">
      <ToolbarToggleGroup type="single" defaultValue="select" aria-label="Canvas mode">
        <ToolbarToggleItem value="select" aria-label="Select">
          S
        </ToolbarToggleItem>
        <ToolbarToggleItem value="pan" aria-label="Pan">
          P
        </ToolbarToggleItem>
        <ToolbarToggleItem value="comment" aria-label="Comment">
          C
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarButton tone="danger">Clear</ToolbarButton>
    </Toolbar>
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
        padding: 'var(--zy-spacing-6)',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
        boxSizing: 'border-box',
        width: 'min(420px, calc(100vw - var(--zy-spacing-8)))',
      }}
    >
      <EditorToolbar />
    </div>
  ),
};
