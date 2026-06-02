import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
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
} from './ContextMenu';

function openContextMenu() {
  fireEvent.contextMenu(screen.getByText('Canvas layer'));
}

function renderContextMenu(opts?: { onSelect?: () => void }) {
  return render(
    <ContextMenu>
      <ContextMenuTrigger>Canvas layer</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Layer</ContextMenuLabel>
        <ContextMenuItem onSelect={opts?.onSelect}>Rename</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuItem disabled>Detach</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem tone="danger">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>,
  );
}

describe('ContextMenu', () => {
  it('opens from contextmenu event', async () => {
    renderContextMenu();
    expect(screen.getByText('Canvas layer')).toHaveClass('zy-context-menu__trigger');
    expect(screen.queryByRole('menuitem', { name: 'Rename' })).not.toBeInTheDocument();
    openContextMenu();
    expect(await screen.findByRole('menuitem', { name: 'Rename' })).toBeInTheDocument();
  });

  it('item selection calls handler and closes', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderContextMenu({ onSelect });
    openContextMenu();
    await user.click(await screen.findByRole('menuitem', { name: 'Rename' }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByRole('menuitem', { name: 'Rename' })).not.toBeInTheDocument();
    });
  });

  it('disabled item is not selectable', async () => {
    const onSelect = vi.fn();
    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem disabled onSelect={onSelect}>
            Locked
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText('Target'));
    const item = await screen.findByRole('menuitem', { name: 'Locked' });
    expect(item).toHaveAttribute('data-disabled');
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('checkbox item calls onCheckedChange', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuCheckboxItem checked={false} onCheckedChange={onCheckedChange}>
            Show grid
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText('Target'));
    await user.click(await screen.findByRole('menuitemcheckbox', { name: 'Show grid' }));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('radio item calls onValueChange', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuRadioGroup value="fit" onValueChange={onValueChange}>
            <ContextMenuRadioItem value="fit">Fit</ContextMenuRadioItem>
            <ContextMenuRadioItem value="fill">Fill</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText('Target'));
    await user.click(await screen.findByRole('menuitemradio', { name: 'Fill' }));
    expect(onValueChange).toHaveBeenCalledWith('fill');
  });

  it('submenu opens via keyboard', async () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Arrange</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Bring forward</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText('Target'));
    const subTrigger = await screen.findByRole('menuitem', { name: 'Arrange' });
    fireEvent.focus(subTrigger);
    fireEvent.keyDown(subTrigger, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(await screen.findByRole('menuitem', { name: 'Bring forward' })).toBeInTheDocument();
  });

  it('renders labels, separators, and shortcuts', async () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Actions</ContextMenuLabel>
          <ContextMenuItem>
            Copy
            <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator data-testid="separator" />
        </ContextMenuContent>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText('Target'));
    expect(await screen.findByText('Actions')).toHaveClass('zy-context-menu__label');
    expect(screen.getByText('Ctrl+C')).toHaveClass('zy-context-menu__shortcut');
    expect(screen.getByTestId('separator')).toHaveClass('zy-context-menu__separator');
  });

  it('forwards refs and passes className through', async () => {
    const contentRef = vi.fn();
    const itemRef = vi.fn();
    render(
      <ContextMenu>
        <ContextMenuTrigger>Target</ContextMenuTrigger>
        <ContextMenuContent ref={contentRef} className="custom-context-menu" data-testid="content">
          <ContextMenuItem ref={itemRef}>Item</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText('Target'));
    const content = await screen.findByTestId('content');
    expect(content).toHaveClass('zy-context-menu__content');
    expect(content).toHaveClass('custom-context-menu');
    expect(contentRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(itemRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});
