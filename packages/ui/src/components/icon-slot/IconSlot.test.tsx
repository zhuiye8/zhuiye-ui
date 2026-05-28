import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IconSlot } from './IconSlot';

describe('IconSlot', () => {
  it('renders children', () => {
    render(<IconSlot>*</IconSlot>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('is decorative by default with aria-hidden', () => {
    render(<IconSlot>X</IconSlot>);
    const el = screen.getByText('X').closest('.zy-icon-slot');
    expect(el).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders with role="img" and aria-label when not decorative', () => {
    render(
      <IconSlot decorative={false} label="Star icon">
        star
      </IconSlot>,
    );
    const el = screen.getByRole('img', { name: 'Star icon' });
    expect(el).toBeInTheDocument();
  });

  it('applies size class', () => {
    render(<IconSlot size="lg">L</IconSlot>);
    const el = screen.getByText('L').closest('.zy-icon-slot');
    expect(el).toHaveClass('zy-icon-slot--lg');
  });

  it('applies default md size class', () => {
    render(<IconSlot>M</IconSlot>);
    const el = screen.getByText('M').closest('.zy-icon-slot');
    expect(el).toHaveClass('zy-icon-slot--md');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<IconSlot ref={ref}>R</IconSlot>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
  });

  it('merges custom className', () => {
    render(<IconSlot className="custom-icon">C</IconSlot>);
    const el = screen.getByText('C').closest('.zy-icon-slot');
    expect(el).toHaveClass('zy-icon-slot');
    expect(el).toHaveClass('custom-icon');
  });

  it('passes through HTML span attributes', () => {
    render(
      <IconSlot data-testid="my-icon" id="icon-1">
        I
      </IconSlot>,
    );
    const el = screen.getByTestId('my-icon');
    expect(el).toHaveAttribute('id', 'icon-1');
  });
});
