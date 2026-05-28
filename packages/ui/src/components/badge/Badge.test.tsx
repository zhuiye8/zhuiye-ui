import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    render(<Badge data-testid="badge">Test</Badge>);
    expect(screen.getByTestId('badge').tagName).toBe('SPAN');
  });

  it('applies variant class', () => {
    render(
      <Badge variant="danger" data-testid="badge">
        Error
      </Badge>,
    );
    expect(screen.getByTestId('badge')).toHaveClass('zy-badge--danger');
  });

  it('applies size class', () => {
    render(
      <Badge size="sm" data-testid="badge">
        Small
      </Badge>,
    );
    expect(screen.getByTestId('badge')).toHaveClass('zy-badge--sm');
  });

  it('defaults to neutral variant and md size', () => {
    render(<Badge data-testid="badge">Default</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('zy-badge--neutral');
    expect(badge).toHaveClass('zy-badge--md');
  });

  it('applies custom className', () => {
    render(
      <Badge className="custom" data-testid="badge">
        Test
      </Badge>,
    );
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('zy-badge');
    expect(badge).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Badge ref={ref}>Ref</Badge>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
  });

  it('passes through extra props', () => {
    render(
      <Badge title="Status badge" data-testid="badge">
        Active
      </Badge>,
    );
    expect(screen.getByTestId('badge')).toHaveAttribute('title', 'Status badge');
  });
});
