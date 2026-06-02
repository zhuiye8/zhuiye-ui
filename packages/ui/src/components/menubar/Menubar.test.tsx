import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from './Menubar';

function renderMenubar(opts?: { onSelect?: () => void }) {
  return render(
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent showArrow={false}>
          <MenubarLabel>File</MenubarLabel>
          <MenubarItem onSelect={opts?.onSelect}>New file</MenubarItem>
          <MenubarItem>Open</MenubarItem>
          <MenubarItem disabled>Locked</MenubarItem>
          <MenubarSeparator />
          <MenubarItem tone="danger">Close workspace</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent showArrow={false}>
          <MenubarItem>Undo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>,
  );
}

describe('Menubar', () => {
  it('renders menubar and opens menu with click', async () => {
    const user = userEvent.setup();
    renderMenubar();
    expect(screen.getByRole('menubar')).toHaveClass('zy-menubar');
    expect(screen.queryByRole('menuitem', { name: 'New file' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('menuitem', { name: 'File' }));
    expect(await screen.findByRole('menuitem', { name: 'New file' })).toBeInTheDocument();
  });

  it('item selection calls handler and closes', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderMenubar({ onSelect });
    await user.click(screen.getByRole('menuitem', { name: 'File' }));
    await user.click(await screen.findByRole('menuitem', { name: 'New file' }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByRole('menuitem', { name: 'New file' })).not.toBeInTheDocument();
    });
  });

  it('disabled item is not selectable', async () => {
    const onSelect = vi.fn();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent showArrow={false}>
            <MenubarItem disabled onSelect={onSelect}>
              Locked
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    await userEvent.click(screen.getByRole('menuitem', { name: 'File' }));
    const item = await screen.findByRole('menuitem', { name: 'Locked' });
    expect(item).toHaveAttribute('data-disabled');
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('checkbox item calls onCheckedChange', async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent showArrow={false}>
            <MenubarCheckboxItem checked={false} onCheckedChange={onCheckedChange}>
              Show sidebar
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    await user.click(screen.getByRole('menuitem', { name: 'View' }));
    await user.click(await screen.findByRole('menuitemcheckbox', { name: 'Show sidebar' }));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('radio item calls onValueChange', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Theme</MenubarTrigger>
          <MenubarContent showArrow={false}>
            <MenubarRadioGroup value="light" onValueChange={onValueChange}>
              <MenubarRadioItem value="light">Light</MenubarRadioItem>
              <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    await user.click(screen.getByRole('menuitem', { name: 'Theme' }));
    await user.click(await screen.findByRole('menuitemradio', { name: 'Dark' }));
    expect(onValueChange).toHaveBeenCalledWith('dark');
  });

  it('submenu opens via keyboard', async () => {
    const user = userEvent.setup();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Insert</MenubarTrigger>
          <MenubarContent showArrow={false}>
            <MenubarSub>
              <MenubarSubTrigger>Media</MenubarSubTrigger>
              <MenubarSubContent showArrow={false}>
                <MenubarItem>Image</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    await user.click(screen.getByRole('menuitem', { name: 'Insert' }));
    const subTrigger = await screen.findByRole('menuitem', { name: 'Media' });
    subTrigger.focus();
    await user.keyboard('{ArrowRight}');
    expect(await screen.findByRole('menuitem', { name: 'Image' })).toBeInTheDocument();
  });

  it('renders labels, separators, shortcuts, and trigger chevron', async () => {
    const user = userEvent.setup();
    render(
      <Menubar variant="framed" size="lg">
        <MenubarMenu>
          <MenubarTrigger showChevron>File</MenubarTrigger>
          <MenubarContent showArrow={false}>
            <MenubarLabel>Actions</MenubarLabel>
            <MenubarItem>
              Save
              <MenubarShortcut>Ctrl+S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator data-testid="separator" />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    expect(screen.getByRole('menubar')).toHaveClass('zy-menubar--framed');
    expect(screen.getByRole('menubar')).toHaveClass('zy-menubar--lg');
    expect(screen.getByRole('menuitem', { name: 'File' })).toContainElement(
      document.querySelector('.zy-menubar__trigger-chevron'),
    );
    await user.click(screen.getByRole('menuitem', { name: 'File' }));
    expect(await screen.findByText('Actions')).toHaveClass('zy-menubar__label');
    expect(screen.getByText('Ctrl+S')).toHaveClass('zy-menubar__shortcut');
    expect(screen.getByTestId('separator')).toHaveClass('zy-menubar__separator');
  });

  it('forwards refs and passes className through', async () => {
    const contentRef = vi.fn();
    const itemRef = vi.fn();
    render(
      <Menubar className="custom-menubar">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent
            ref={contentRef}
            className="custom-menubar-content"
            showArrow={false}
            data-testid="content"
          >
            <MenubarItem ref={itemRef}>Item</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );
    expect(screen.getByRole('menubar')).toHaveClass('custom-menubar');
    await userEvent.click(screen.getByRole('menuitem', { name: 'File' }));
    const content = await screen.findByTestId('content');
    expect(content).toHaveClass('zy-menubar__content');
    expect(content).toHaveClass('custom-menubar-content');
    expect(contentRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(itemRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});
