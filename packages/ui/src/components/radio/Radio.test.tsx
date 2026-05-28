import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders a radio input', () => {
    render(<Radio value="a" label="Option A" />);
    expect(screen.getByRole('radio', { name: 'Option A' })).toBeInTheDocument();
  });

  it('renders label text', () => {
    render(<Radio value="a" label="Choice A" />);
    expect(screen.getByText('Choice A')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<Radio value="a" label="Option" description="Helper text" />);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('links description via aria-describedby', () => {
    render(<Radio id="opt" value="a" label="Option" description="Helper" />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-describedby', 'opt-description');
  });

  it('preserves consumer aria-describedby when no description', () => {
    render(<Radio value="a" label="Option" aria-describedby="custom-desc" />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-describedby', 'custom-desc');
  });

  it('merges consumer aria-describedby with description id', () => {
    render(
      <Radio id="opt" value="a" label="Option" description="Helper" aria-describedby="custom" />,
    );
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-describedby', 'custom opt-description');
  });

  it('generates stable id when id is not provided', () => {
    render(<Radio value="a" label="Auto" />);
    const radio = screen.getByRole('radio');
    expect(radio.getAttribute('id')).toBeTruthy();
  });

  it('preserves externally provided id', () => {
    render(<Radio id="custom-id" value="a" label="Custom" />);
    expect(screen.getByRole('radio')).toHaveAttribute('id', 'custom-id');
  });

  it('can be disabled', () => {
    render(<Radio value="a" label="Disabled" disabled />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
    expect(radio.closest('.zy-radio')).toHaveClass('zy-radio--disabled');
  });

  it('calls onChange when clicked', async () => {
    const onChange = vi.fn();
    render(<Radio value="a" label="Click me" onChange={onChange} />);
    await userEvent.click(screen.getByRole('radio'));
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('does not call onChange when disabled', async () => {
    const onChange = vi.fn();
    render(<Radio value="a" label="No click" disabled onChange={onChange} />);
    await userEvent.click(screen.getByRole('radio'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Radio value="a" label="Ref" ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it('sets the value attribute', () => {
    render(<Radio value="test-value" label="Test" />);
    expect(screen.getByRole('radio')).toHaveAttribute('value', 'test-value');
  });
});
