import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { VisuallyHidden } from './VisuallyHidden';

describe('VisuallyHidden', () => {
  it('renders children text', () => {
    render(<VisuallyHidden>Hidden text</VisuallyHidden>);
    expect(screen.getByText('Hidden text')).toBeInTheDocument();
  });

  it('applies visually-hidden CSS class', () => {
    render(<VisuallyHidden>Hidden</VisuallyHidden>);
    expect(screen.getByText('Hidden')).toHaveClass('zy-visually-hidden');
  });

  it('forwards ref to the underlying element', () => {
    const ref = vi.fn();
    render(<VisuallyHidden ref={ref}>Ref test</VisuallyHidden>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
  });

  it('merges custom className', () => {
    render(<VisuallyHidden className="custom">Styled</VisuallyHidden>);
    const el = screen.getByText('Styled');
    expect(el).toHaveClass('zy-visually-hidden');
    expect(el).toHaveClass('custom');
  });

  it('renders as a span element', () => {
    render(<VisuallyHidden>Span hidden</VisuallyHidden>);
    const el = screen.getByText('Span hidden');
    expect(el.tagName).toBe('SPAN');
    expect(el).toHaveClass('zy-visually-hidden');
  });

  it('passes through HTML span attributes', () => {
    render(
      <VisuallyHidden data-testid="hidden-el" id="my-id">
        Attrs
      </VisuallyHidden>,
    );
    const el = screen.getByTestId('hidden-el');
    expect(el).toHaveAttribute('id', 'my-id');
  });
});
