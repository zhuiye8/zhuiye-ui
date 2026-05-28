import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Separator } from './Separator';

describe('Separator', () => {
  it('renders a horizontal decorative hr by default', () => {
    const { container } = render(<Separator />);
    const hr = container.querySelector('hr');
    expect(hr).toBeInTheDocument();
    expect(hr).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders with role="separator" when not decorative', () => {
    render(<Separator decorative={false} />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('does not set aria-orientation on non-decorative horizontal separator', () => {
    render(<Separator decorative={false} orientation="horizontal" />);
    const el = screen.getByRole('separator');
    expect(el).not.toHaveAttribute('aria-orientation');
  });

  it('renders vertical separator as a div with role="separator" and aria-orientation', () => {
    render(<Separator decorative={false} orientation="vertical" />);
    const el = screen.getByRole('separator');
    expect(el.tagName).toBe('DIV');
    expect(el).toHaveAttribute('aria-orientation', 'vertical');
    expect(el).toHaveClass('zy-separator--vertical');
  });

  it('renders vertical decorative separator with presentation role', () => {
    const { container } = render(<Separator decorative orientation="vertical" />);
    const el = container.querySelector('.zy-separator--vertical');
    expect(el).toHaveAttribute('aria-hidden', 'true');
    expect(el).toHaveAttribute('role', 'presentation');
  });

  it('applies custom className', () => {
    const { container } = render(<Separator className="my-sep" />);
    const hr = container.querySelector('hr');
    expect(hr).toHaveClass('zy-separator');
    expect(hr).toHaveClass('my-sep');
  });

  it('forwards ref to HTMLHRElement for horizontal separator', () => {
    const ref = vi.fn();
    render(<Separator ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLHRElement));
  });

  it('forwards ref to HTMLDivElement for vertical separator', () => {
    const ref = vi.fn();
    render(<Separator orientation="vertical" ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});
