import type { Meta, StoryObj } from '@storybook/react';
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

function EditorToolbar({ variant = 'framed' }: { variant?: 'plain' | 'subtle' | 'framed' }) {
  const copy = useStoryCopy();
  return (
    <Toolbar aria-label={copy.toolbarComp.editorTools} variant={variant}>
      <ToolbarToggleGroup
        type="multiple"
        defaultValue={['bold']}
        aria-label={copy.toolbarComp.textFormatting}
      >
        <ToolbarToggleItem value="bold" aria-label={copy.toolbarComp.bold}>
          B
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic" aria-label={copy.toolbarComp.italic}>
          I
        </ToolbarToggleItem>
        <ToolbarToggleItem value="underline" aria-label={copy.toolbarComp.underline}>
          U
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarToggleGroup
        type="single"
        defaultValue="center"
        aria-label={copy.toolbarComp.textAlignment}
      >
        <ToolbarToggleItem value="left" aria-label={copy.toolbarComp.alignLeft}>
          L
        </ToolbarToggleItem>
        <ToolbarToggleItem value="center" aria-label={copy.toolbarComp.alignCenter}>
          C
        </ToolbarToggleItem>
        <ToolbarToggleItem value="right" aria-label={copy.toolbarComp.alignRight}>
          R
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarLink href="#history">{copy.toolbarComp.history}</ToolbarLink>
      <ToolbarButton tone="primary">{copy.toolbarComp.publish}</ToolbarButton>
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
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'grid', gap: 'var(--zy-spacing-5)', justifyItems: 'start' }}>
        {(['sm', 'md', 'lg'] as const).map((size) => (
          <Toolbar key={size} aria-label={`${size} tools`} variant="framed" size={size}>
            <ToolbarToggleGroup
              type="multiple"
              defaultValue={['bold']}
              aria-label={copy.toolbarComp.format}
            >
              <ToolbarToggleItem value="bold" aria-label={copy.toolbarComp.bold}>
                B
              </ToolbarToggleItem>
              <ToolbarToggleItem value="italic" aria-label={copy.toolbarComp.italic}>
                I
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator />
            <ToolbarButton>{copy.toolbarComp.save}</ToolbarButton>
          </Toolbar>
        ))}
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Toolbar aria-label={copy.toolbarComp.canvasTools} variant="framed" orientation="vertical">
        <ToolbarToggleGroup
          type="single"
          defaultValue="select"
          aria-label={copy.toolbarComp.canvasMode}
        >
          <ToolbarToggleItem value="select" aria-label={copy.toolbarComp.select}>
            S
          </ToolbarToggleItem>
          <ToolbarToggleItem value="pan" aria-label={copy.toolbarComp.pan}>
            P
          </ToolbarToggleItem>
          <ToolbarToggleItem value="comment" aria-label={copy.toolbarComp.comment}>
            C
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
        <ToolbarSeparator />
        <ToolbarButton tone="danger">{copy.toolbarComp.clear}</ToolbarButton>
      </Toolbar>
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
        boxSizing: 'border-box',
        width: 'min(420px, calc(100vw - var(--zy-spacing-8)))',
      }}
    >
      <EditorToolbar />
    </div>
  ),
};
