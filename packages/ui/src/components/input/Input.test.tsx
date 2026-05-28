import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('applies size class', () => {
    render(<Input size="lg" />);
    const input = screen.getByRole('textbox');
    expect(input.closest('.zy-input')).toHaveClass('zy-input--lg');
  });

  it('applies invalid class and aria-invalid', () => {
    render(<Input invalid />);
    const input = screen.getByRole('textbox');
    expect(input.closest('.zy-input')).toHaveClass('zy-input--invalid');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows error message with role alert', () => {
    render(<Input id="email" errorMessage="Email is required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
  });

  it('links error message to input via aria-describedby', () => {
    render(<Input id="email" errorMessage="Required" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'email-error');
  });

  it('links error message with auto-generated id when no id is provided', () => {
    render(<Input errorMessage="Required" />);
    const input = screen.getByRole('textbox');
    const describedBy = input.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    expect(screen.getByRole('alert')).toHaveAttribute('id', describedBy!);
  });

  it('preserves consumer aria-describedby when no errorMessage', () => {
    render(<Input aria-describedby="custom-desc" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'custom-desc');
  });

  it('merges consumer aria-describedby with error id', () => {
    render(<Input id="email" aria-describedby="custom-desc" errorMessage="Required" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'custom-desc email-error');
  });

  it('renders left adornment', () => {
    render(<Input leftAdornment={<span data-testid="left">$</span>} />);
    expect(screen.getByTestId('left')).toBeInTheDocument();
  });

  it('renders right adornment', () => {
    render(<Input rightAdornment={<span data-testid="right">✓</span>} />);
    expect(screen.getByTestId('right')).toBeInTheDocument();
  });

  it('applies fullWidth class', () => {
    render(<Input fullWidth />);
    const input = screen.getByRole('textbox');
    expect(input.closest('.zy-input')).toHaveClass('zy-input--full');
  });

  it('can be disabled', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input.closest('.zy-input')).toHaveClass('zy-input--disabled');
    expect(input).toBeDisabled();
  });

  it('calls onChange when typing', async () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} />);
    await userEvent.type(screen.getByRole('textbox'), 'a');
    expect(onChange).toHaveBeenCalled();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });
});
