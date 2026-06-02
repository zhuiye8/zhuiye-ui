import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from './Toolbar';

function renderToolbar(opts?: { onClick?: () => void; onValueChange?: (value: string[]) => void }) {
  return render(
    <Toolbar aria-label="Editor tools" variant="framed" size="md">
      <ToolbarToggleGroup
        type="multiple"
        defaultValue={['bold']}
        aria-label="Text formatting"
        onValueChange={opts?.onValueChange}
      >
        <ToolbarToggleItem value="bold" aria-label="Bold">
          B
        </ToolbarToggleItem>
        <ToolbarToggleItem value="italic" aria-label="Italic">
          I
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator data-testid="separator" />
      <ToolbarButton onClick={opts?.onClick}>Publish</ToolbarButton>
      <ToolbarLink href="#history">History</ToolbarLink>
    </Toolbar>,
  );
}

describe('Toolbar', () => {
  it('renders toolbar with variant and size classes', () => {
    renderToolbar();
    expect(screen.getByRole('toolbar', { name: 'Editor tools' })).toHaveClass('zy-toolbar');
    expect(screen.getByRole('toolbar', { name: 'Editor tools' })).toHaveClass('zy-toolbar--framed');
    expect(screen.getByRole('toolbar', { name: 'Editor tools' })).toHaveClass('zy-toolbar--md');
  });

  it('renders toggle items, separator, button, and link', () => {
    renderToolbar();
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveClass('zy-toolbar__toggle-item');
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('data-state', 'on');
    expect(screen.getByTestId('separator')).toHaveClass('zy-toolbar__separator');
    expect(screen.getByRole('button', { name: 'Publish' })).toHaveClass('zy-toolbar__control');
    expect(screen.getByRole('link', { name: 'History' })).toHaveClass('zy-toolbar__link');
  });

  it('calls button and toggle handlers', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const onValueChange = vi.fn();
    renderToolbar({ onClick, onValueChange });
    await user.click(screen.getByRole('button', { name: 'Italic' }));
    expect(onValueChange).toHaveBeenCalledWith(['bold', 'italic']);
    await user.click(screen.getByRole('button', { name: 'Publish' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('supports tone classes and disabled controls', () => {
    render(
      <Toolbar aria-label="Danger tools">
        <ToolbarButton tone="danger" disabled>
          Delete
        </ToolbarButton>
        <ToolbarToggleGroup type="single" defaultValue="primary">
          <ToolbarToggleItem tone="primary" value="primary" aria-label="Primary">
            P
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
      </Toolbar>,
    );
    expect(screen.getByRole('button', { name: 'Delete' })).toHaveClass(
      'zy-toolbar__control--danger',
    );
    expect(screen.getByRole('button', { name: 'Delete' })).toBeDisabled();
    expect(screen.getByRole('radio', { name: 'Primary' })).toHaveClass(
      'zy-toolbar__control--primary',
    );
  });

  it('passes className through and forwards refs', () => {
    const toolbarRef = vi.fn();
    const buttonRef = vi.fn();
    render(
      <Toolbar ref={toolbarRef} className="custom-toolbar" aria-label="Custom tools">
        <ToolbarButton ref={buttonRef} className="custom-button">
          Save
        </ToolbarButton>
      </Toolbar>,
    );
    expect(screen.getByRole('toolbar', { name: 'Custom tools' })).toHaveClass('custom-toolbar');
    expect(screen.getByRole('button', { name: 'Save' })).toHaveClass('custom-button');
    expect(toolbarRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(buttonRef).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });
});
