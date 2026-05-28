import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders a textarea element', () => {
    render(<Textarea placeholder="Enter message" />);
    expect(screen.getByPlaceholderText('Enter message')).toBeInTheDocument();
  });

  it('applies resize class', () => {
    render(<Textarea resize="none" data-testid="textarea" />);
    expect(screen.getByTestId('textarea')).toHaveClass('zy-textarea--resize-none');
  });

  it('applies invalid class and aria-invalid', () => {
    render(<Textarea invalid data-testid="textarea" />);
    expect(screen.getByTestId('textarea')).toHaveClass('zy-textarea--invalid');
    expect(screen.getByTestId('textarea')).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows error message with role alert', () => {
    render(<Textarea id="msg" errorMessage="Message is required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Message is required');
  });

  it('links error message to textarea via aria-describedby', () => {
    render(<Textarea id="msg" errorMessage="Required" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'msg-error');
  });

  it('links error message with auto-generated id when no id is provided', () => {
    render(<Textarea errorMessage="Required" />);
    const textarea = screen.getByRole('textbox');
    const describedBy = textarea.getAttribute('aria-describedby');
    expect(describedBy).toBeTruthy();
    expect(screen.getByRole('alert')).toHaveAttribute('id', describedBy!);
  });

  it('preserves consumer aria-describedby when no errorMessage', () => {
    render(<Textarea aria-describedby="custom-desc" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'custom-desc');
  });

  it('merges consumer aria-describedby with error id', () => {
    render(<Textarea id="msg" aria-describedby="custom-desc" errorMessage="Required" />);
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      'custom-desc msg-error',
    );
  });

  it('applies fullWidth class', () => {
    render(<Textarea fullWidth data-testid="textarea" />);
    expect(screen.getByTestId('textarea')).toHaveClass('zy-textarea--full');
  });

  it('can be disabled', () => {
    render(<Textarea disabled data-testid="textarea" />);
    expect(screen.getByTestId('textarea')).toHaveClass('zy-textarea--disabled');
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('can be readOnly', () => {
    render(<Textarea readOnly data-testid="textarea" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
  });

  it('calls onChange when typing', async () => {
    const onChange = vi.fn();
    render(<Textarea onChange={onChange} />);
    await userEvent.type(screen.getByRole('textbox'), 'a');
    expect(onChange).toHaveBeenCalled();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Textarea ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLTextAreaElement));
  });
});
