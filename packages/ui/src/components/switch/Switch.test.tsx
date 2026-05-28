import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders a switch with role switch', () => {
    render(<Switch label="Notifications" />);
    expect(screen.getByRole('switch', { name: 'Notifications' })).toBeInTheDocument();
  });

  it('renders label text', () => {
    render(<Switch label="Enable feature" />);
    expect(screen.getByText('Enable feature')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<Switch label="Dark mode" description="Toggle dark theme" />);
    expect(screen.getByText('Toggle dark theme')).toBeInTheDocument();
  });

  it('renders error message with role alert', () => {
    render(<Switch label="Required" errorMessage="Must be enabled" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Must be enabled');
  });

  it('links error message via aria-describedby', () => {
    render(<Switch id="notify" label="Notify" errorMessage="Required" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('aria-describedby', 'notify-error');
  });

  it('links description via aria-describedby', () => {
    render(<Switch id="toggle" label="Toggle" description="Helper" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('aria-describedby', 'toggle-description');
  });

  it('merges consumer aria-describedby with error and description ids', () => {
    render(
      <Switch
        id="field"
        label="Field"
        description="Helper"
        errorMessage="Error"
        aria-describedby="custom-desc"
      />,
    );
    const switchEl = screen.getByRole('switch');
    const describedBy = switchEl.getAttribute('aria-describedby');
    expect(describedBy).toContain('custom-desc');
    expect(describedBy).toContain('field-description');
    expect(describedBy).toContain('field-error');
  });

  it('generates stable id when id is not provided', () => {
    render(<Switch label="Auto" errorMessage="Err" />);
    const switchEl = screen.getByRole('switch');
    const id = switchEl.getAttribute('id');
    expect(id).toBeTruthy();
    const errorEl = screen.getByRole('alert');
    expect(errorEl.getAttribute('id')).toBe(`${id}-error`);
  });

  it('preserves externally provided id', () => {
    render(<Switch id="custom-id" label="Custom" />);
    expect(screen.getByRole('switch')).toHaveAttribute('id', 'custom-id');
  });

  it('defaults to unchecked', () => {
    render(<Switch label="Default" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
  });

  it('respects defaultChecked', () => {
    render(<Switch label="Default on" defaultChecked />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onCheckedChange when clicked', async () => {
    const onChange = vi.fn();
    render(<Switch label="Toggle" onCheckedChange={onChange} />);
    await userEvent.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('toggles from checked to unchecked', async () => {
    const onChange = vi.fn();
    render(<Switch label="Toggle" defaultChecked onCheckedChange={onChange} />);
    await userEvent.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('does not call onCheckedChange when disabled', async () => {
    const onChange = vi.fn();
    render(<Switch label="No toggle" disabled onCheckedChange={onChange} />);
    await userEvent.click(screen.getByRole('switch'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('works as controlled component', async () => {
    const onChange = vi.fn();
    render(<Switch label="Controlled" checked={false} onCheckedChange={onChange} />);
    await userEvent.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
  });

  it('sets aria-invalid when invalid', () => {
    render(<Switch label="Invalid" invalid />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies invalid class', () => {
    render(<Switch label="Invalid" invalid />);
    expect(screen.getByRole('switch').closest('.zy-switch')).toHaveClass('zy-switch--invalid');
  });

  it('applies fullWidth class', () => {
    render(<Switch label="Full" fullWidth />);
    expect(screen.getByRole('switch').closest('.zy-switch')).toHaveClass('zy-switch--full');
  });

  it('can be disabled', () => {
    render(<Switch label="Disabled" disabled />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toBeDisabled();
    expect(switchEl.closest('.zy-switch')).toHaveClass('zy-switch--disabled');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Switch label="Ref" ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('uncontrolled: default unchecked becomes checked after click', async () => {
    render(<Switch label="Toggle" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(switchEl);
    expect(switchEl).toHaveAttribute('aria-checked', 'true');
  });

  it('uncontrolled: defaultChecked becomes unchecked after click', async () => {
    render(<Switch label="Toggle" defaultChecked />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('aria-checked', 'true');
    await userEvent.click(switchEl);
    expect(switchEl).toHaveAttribute('aria-checked', 'false');
  });

  it('uncontrolled: keyboard Space toggles state', async () => {
    render(<Switch label="Toggle" />);
    const switchEl = screen.getByRole('switch');
    switchEl.focus();
    await userEvent.keyboard(' ');
    expect(switchEl).toHaveAttribute('aria-checked', 'true');
    await userEvent.keyboard(' ');
    expect(switchEl).toHaveAttribute('aria-checked', 'false');
  });

  it('uncontrolled: keyboard Enter toggles state', async () => {
    render(<Switch label="Toggle" />);
    const switchEl = screen.getByRole('switch');
    switchEl.focus();
    await userEvent.keyboard('{Enter}');
    expect(switchEl).toHaveAttribute('aria-checked', 'true');
    await userEvent.keyboard('{Enter}');
    expect(switchEl).toHaveAttribute('aria-checked', 'false');
  });
});
