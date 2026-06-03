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
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

const CanvasTarget = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ style, ...rest }, ref) => {
    const c = useStoryCopy().contextMenu;
    return (
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
        <strong>{c.frameTitle}</strong>
        <span style={{ color: 'var(--zy-muted-foreground)', fontSize: 'var(--zy-font-size-sm)' }}>
          {c.frameDesc}
        </span>
      </div>
    );
  },
);
CanvasTarget.displayName = 'CanvasTarget';

function LayerMenu() {
  const c = useStoryCopy().contextMenu;
  return (
    <ContextMenuContent>
      <ContextMenuLabel>{c.layer}</ContextMenuLabel>
      <ContextMenuItem>
        {c.rename}
        <ContextMenuShortcut>F2</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>{c.duplicate}</ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger>{c.arrange}</ContextMenuSubTrigger>
        <ContextMenuSubContent>
          <ContextMenuItem>{c.bringForward}</ContextMenuItem>
          <ContextMenuItem>{c.sendBackward}</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuCheckboxItem checked>{c.showOutlines}</ContextMenuCheckboxItem>
      <ContextMenuSeparator />
      <ContextMenuItem tone="danger">{c.delete}</ContextMenuItem>
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
  render: () => {
    const c = useStoryCopy().contextMenu;
    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <CanvasTarget />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>{c.zoom}</ContextMenuLabel>
          <ContextMenuRadioGroup value="fit">
            <ContextMenuRadioItem value="fit">{c.fitToScreen}</ContextMenuRadioItem>
            <ContextMenuRadioItem value="actual">{c.actualSize}</ContextMenuRadioItem>
            <ContextMenuRadioItem value="fill">{c.fillWidth}</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
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
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <CanvasTarget />
        </ContextMenuTrigger>
        <LayerMenu />
      </ContextMenu>
    </div>
  ),
};
