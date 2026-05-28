import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders with role="status" by default', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders accessible label text', () => {
    render(<Spinner />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('renders custom label text', () => {
    render(<Spinner label="Please wait" />);
    expect(screen.getByText('Please wait')).toBeInTheDocument();
  });

  it('applies size class', () => {
    render(<Spinner size="lg" />);
    expect(screen.getByRole('status')).toHaveClass('zy-spinner--lg');
  });

  it('applies default md size class', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toHaveClass('zy-spinner--md');
  });

  it('sets aria-hidden and removes role when decorative', () => {
    render(<Spinner decorative />);
    const el = document.querySelector('.zy-spinner');
    expect(el).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('does not render label text when decorative', () => {
    render(<Spinner decorative />);
    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Spinner ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
  });

  it('merges custom className', () => {
    render(<Spinner className="custom-spinner" />);
    const el = screen.getByRole('status');
    expect(el).toHaveClass('zy-spinner');
    expect(el).toHaveClass('custom-spinner');
  });

  it('passes through HTML span attributes', () => {
    render(<Spinner data-testid="my-spinner" id="spin-1" />);
    const el = screen.getByTestId('my-spinner');
    expect(el).toHaveAttribute('id', 'spin-1');
  });
});
