import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders a pressed button with accessible label', () => {
    render(<Toggle aria-label="Bold">B</Toggle>);
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('respects defaultPressed', () => {
    render(
      <Toggle aria-label="Italic" defaultPressed>
        I
      </Toggle>,
    );
    expect(screen.getByRole('button', { name: 'Italic' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('toggles when clicked', async () => {
    const user = userEvent.setup();
    render(<Toggle aria-label="Underline">U</Toggle>);
    const toggle = screen.getByRole('button', { name: 'Underline' });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  it('controlled pressed calls onPressedChange without changing rendered state', async () => {
    const user = userEvent.setup();
    const onPressedChange = vi.fn();
    render(
      <Toggle aria-label="Controlled" pressed={false} onPressedChange={onPressedChange}>
        C
      </Toggle>,
    );
    const toggle = screen.getByRole('button', { name: 'Controlled' });
    await user.click(toggle);
    expect(onPressedChange).toHaveBeenCalledWith(true);
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    const onPressedChange = vi.fn();
    render(
      <Toggle aria-label="Disabled" disabled onPressedChange={onPressedChange}>
        D
      </Toggle>,
    );
    const toggle = screen.getByRole('button', { name: 'Disabled' });
    await user.click(toggle);
    expect(onPressedChange).not.toHaveBeenCalled();
    expect(toggle).toBeDisabled();
  });

  it('supports keyboard activation', async () => {
    const user = userEvent.setup();
    render(<Toggle aria-label="Keyboard">K</Toggle>);
    const toggle = screen.getByRole('button', { name: 'Keyboard' });
    toggle.focus();
    await user.keyboard('{Enter}');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });

  it('forwards ref to button', () => {
    const ref = vi.fn();
    render(
      <Toggle ref={ref} aria-label="Ref">
        R
      </Toggle>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('passes className and variant classes through', () => {
    render(
      <Toggle
        aria-label="Custom"
        variant="outline"
        size="lg"
        tone="primary"
        className="custom-toggle"
      >
        Custom
      </Toggle>,
    );
    expect(screen.getByRole('button', { name: 'Custom' })).toHaveClass(
      'zy-toggle--outline',
      'zy-toggle--lg',
      'zy-toggle--primary',
      'custom-toggle',
    );
  });
});
