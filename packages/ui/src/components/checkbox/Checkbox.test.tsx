import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders a checkbox input', () => {
    render(<Checkbox label="Accept" />);
    expect(screen.getByRole('checkbox', { name: 'Accept' })).toBeInTheDocument();
  });

  it('renders label text', () => {
    render(<Checkbox label="Terms and conditions" />);
    expect(screen.getByText('Terms and conditions')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<Checkbox label="Subscribe" description="Receive weekly updates" />);
    expect(screen.getByText('Receive weekly updates')).toBeInTheDocument();
  });

  it('renders error message with role alert', () => {
    render(<Checkbox label="Required" errorMessage="This field is required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('This field is required');
  });

  it('links error message via aria-describedby', () => {
    render(<Checkbox id="terms" label="Terms" errorMessage="Required" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-describedby', 'terms-error');
  });

  it('links description via aria-describedby', () => {
    render(<Checkbox id="sub" label="Sub" description="Helper text" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-describedby', 'sub-description');
  });

  it('merges consumer aria-describedby with error and description ids', () => {
    render(
      <Checkbox
        id="field"
        label="Field"
        description="Helper"
        errorMessage="Error"
        aria-describedby="custom-desc"
      />,
    );
    const checkbox = screen.getByRole('checkbox');
    const describedBy = checkbox.getAttribute('aria-describedby');
    expect(describedBy).toContain('custom-desc');
    expect(describedBy).toContain('field-description');
    expect(describedBy).toContain('field-error');
  });

  it('generates stable id when id is not provided', () => {
    render(<Checkbox label="Auto" errorMessage="Err" />);
    const checkbox = screen.getByRole('checkbox');
    const id = checkbox.getAttribute('id');
    expect(id).toBeTruthy();
    const errorEl = screen.getByRole('alert');
    expect(errorEl.getAttribute('id')).toBe(`${id}-error`);
  });

  it('preserves externally provided id', () => {
    render(<Checkbox id="custom-id" label="Custom" />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'custom-id');
  });

  it('sets aria-invalid when invalid', () => {
    render(<Checkbox label="Invalid" invalid />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies invalid class', () => {
    render(<Checkbox label="Invalid" invalid />);
    expect(screen.getByRole('checkbox').closest('.zy-checkbox')).toHaveClass(
      'zy-checkbox--invalid',
    );
  });

  it('can be disabled', () => {
    render(<Checkbox label="Disabled" disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox.closest('.zy-checkbox')).toHaveClass('zy-checkbox--disabled');
  });

  it('applies fullWidth class', () => {
    render(<Checkbox label="Full" fullWidth />);
    expect(screen.getByRole('checkbox').closest('.zy-checkbox')).toHaveClass('zy-checkbox--full');
  });

  it('calls onChange when clicked', async () => {
    const onChange = vi.fn();
    render(<Checkbox label="Click me" onChange={onChange} />);
    await userEvent.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('does not call onChange when disabled', async () => {
    const onChange = vi.fn();
    render(<Checkbox label="No click" disabled onChange={onChange} />);
    await userEvent.click(screen.getByRole('checkbox'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('supports defaultChecked', () => {
    render(<Checkbox label="Checked" defaultChecked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Checkbox label="Ref" ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it('updates indeterminate when props rerender', () => {
    const { rerender } = render(<Checkbox label="Indeterminate" indeterminate={false} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toHaveProperty('indeterminate', true);
    rerender(<Checkbox label="Indeterminate" indeterminate />);
    expect(checkbox).toHaveProperty('indeterminate', true);
    rerender(<Checkbox label="Indeterminate" indeterminate={false} />);
    expect(checkbox).toHaveProperty('indeterminate', false);
  });
});
