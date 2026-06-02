import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from './DropdownMenu';

function renderMenu(opts?: { onSelect?: () => void; defaultOpen?: boolean }) {
  return render(
    <DropdownMenu defaultOpen={opts?.defaultOpen}>
      <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
      <DropdownMenuContent showArrow={false}>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onSelect={opts?.onSelect}>New File</DropdownMenuItem>
        <DropdownMenuItem>New Folder</DropdownMenuItem>
        <DropdownMenuItem disabled>Locked Item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Copy<span>Ctrl+C</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>,
  );
}

describe('DropdownMenu', () => {
  it('renders trigger and opens menu with click', async () => {
    const user = userEvent.setup();
    renderMenu();
    expect(screen.getByRole('button', { name: 'Open Menu' })).toBeInTheDocument();
    expect(screen.queryByRole('menuitem', { name: 'New File' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open Menu' }));
    expect(await screen.findByRole('menuitem', { name: 'New File' })).toBeInTheDocument();
  });

  it('item selection calls handler and closes by default', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderMenu({ onSelect });
    await user.click(screen.getByRole('button', { name: 'Open Menu' }));
    await user.click(await screen.findByRole('menuitem', { name: 'New File' }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByRole('menuitem', { name: 'New File' })).not.toBeInTheDocument();
    });
  });

  it('disabled item is not selectable', async () => {
    const onSelect = vi.fn();
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent showArrow={false}>
          <DropdownMenuItem disabled onSelect={onSelect}>
            Locked
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    const item = await screen.findByRole('menuitem', { name: 'Locked' });
    expect(item).toHaveAttribute('data-disabled');
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('checkbox item calls onCheckedChange', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent showArrow={false}>
          <DropdownMenuCheckboxItem checked={false} onCheckedChange={onCheckedChange}>
            Show Toolbar
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    await user.click(await screen.findByRole('menuitemcheckbox', { name: 'Show Toolbar' }));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('radio item calls onValueChange', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent showArrow={false}>
          <DropdownMenuRadioGroup value="light" onValueChange={onValueChange}>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    await user.click(await screen.findByRole('menuitemradio', { name: 'Dark' }));
    expect(onValueChange).toHaveBeenCalledWith('dark');
  });

  it('submenu opens via keyboard', async () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent showArrow={false}>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent showArrow={false}>
              <DropdownMenuItem>Sub Item</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    const subTrigger = await screen.findByRole('menuitem', { name: 'More' });
    fireEvent.focus(subTrigger);
    fireEvent.keyDown(subTrigger, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(await screen.findByRole('menuitem', { name: 'Sub Item' })).toBeInTheDocument();
  });

  it('Escape closes and returns focus', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent showArrow={false}>
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    expect(await screen.findByRole('menuitem', { name: 'Item' })).toBeInTheDocument();
    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('menuitem', { name: 'Item' })).not.toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: 'Open Menu' })).toHaveFocus();
  });

  it('forwards ref to content', async () => {
    const ref = vi.fn();
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent ref={ref} showArrow={false}>
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    await screen.findByRole('menuitem', { name: 'Item' });
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('forwards ref to item', async () => {
    const ref = vi.fn();
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent showArrow={false}>
          <DropdownMenuItem ref={ref}>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    await screen.findByRole('menuitem', { name: 'Item' });
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('className/style pass-through for content', async () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent className="custom-menu" showArrow={false} data-testid="content">
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    const content = await screen.findByTestId('content');
    expect(content).toHaveClass('zy-dropdown-menu__content');
    expect(content).toHaveClass('custom-menu');
  });

  it('renders label and separator', async () => {
    render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent showArrow={false}>
          <DropdownMenuLabel>Group Label</DropdownMenuLabel>
          <DropdownMenuItem>Item</DropdownMenuItem>
          <DropdownMenuSeparator data-testid="sep" />
        </DropdownMenuContent>
      </DropdownMenu>,
    );
    expect(await screen.findByText('Group Label')).toBeInTheDocument();
    expect(screen.getByTestId('sep')).toBeInTheDocument();
  });
});
