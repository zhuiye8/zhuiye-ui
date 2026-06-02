import type { Meta, StoryObj } from '@storybook/react';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuShortcut,
} from '@zhuiye/ui';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

const CanvasTarget = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gap: 'var(--zy-spacing-3)',
        width: 'min(420px, calc(100vw - var(--zy-spacing-8)))',
        padding: 'var(--zy-spacing-6)',
        border: '1px solid var(--zy-border)',
        borderRadius: 'var(--zy-radius-md)',
        backgroundColor: 'var(--zy-surface)',
        ...style,
      }}
      {...rest}
    >
      <strong>Frame 1200</strong>
      <span style={{ color: 'var(--zy-muted-foreground)', fontSize: 'var(--zy-font-size-sm)' }}>
        Header group, navigation, and primary action cluster.
      </span>
    </div>
  ),
);
CanvasTarget.displayName = 'CanvasTarget';

function LayerMenu() {
  return (
    <ContextMenuContent>
      <ContextMenuLabel>Layer</ContextMenuLabel>
      <ContextMenuItem>
        Rename
        <ContextMenuShortcut>F2</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>Duplicate</ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger>Arrange</ContextMenuSubTrigger>
        <ContextMenuSubContent>
          <ContextMenuItem>Bring forward</ContextMenuItem>
          <ContextMenuItem>Send backward</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuCheckboxItem checked>Show outlines</ContextMenuCheckboxItem>
      <ContextMenuSeparator />
      <ContextMenuItem tone="danger">Delete</ContextMenuItem>
    </ContextMenuContent>
  );
}

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <CanvasTarget />
      </ContextMenuTrigger>
      <LayerMenu />
    </ContextMenu>
  ),
};

export const RadioItems: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <CanvasTarget />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Zoom</ContextMenuLabel>
        <ContextMenuRadioGroup value="fit">
          <ContextMenuRadioItem value="fit">Fit to screen</ContextMenuRadioItem>
          <ContextMenuRadioItem value="actual">Actual size</ContextMenuRadioItem>
          <ContextMenuRadioItem value="fill">Fill width</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
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
      }}
    >
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <CanvasTarget />
        </ContextMenuTrigger>
        <LayerMenu />
      </ContextMenu>
    </div>
  ),
};
