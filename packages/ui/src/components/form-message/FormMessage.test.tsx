import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FormMessage } from './FormMessage';

describe('FormMessage', () => {
  it('renders children text', () => {
    render(<FormMessage>Hello</FormMessage>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('renders as a p element', () => {
    render(<FormMessage>Info</FormMessage>);
    expect(screen.getByText('Info').tagName).toBe('P');
  });

  it('applies neutral tone class by default', () => {
    render(<FormMessage>Default</FormMessage>);
    expect(screen.getByText('Default')).toHaveClass('zy-form-message--neutral');
  });

  it('applies danger tone class', () => {
    render(<FormMessage tone="danger">Error</FormMessage>);
    expect(screen.getByText('Error')).toHaveClass('zy-form-message--danger');
  });

  it('applies success tone class', () => {
    render(<FormMessage tone="success">Done</FormMessage>);
    expect(screen.getByText('Done')).toHaveClass('zy-form-message--success');
  });

  it('applies warning tone class', () => {
    render(<FormMessage tone="warning">Caution</FormMessage>);
    expect(screen.getByText('Caution')).toHaveClass('zy-form-message--warning');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<FormMessage ref={ref}>Ref test</FormMessage>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLParagraphElement));
  });

  it('merges custom className', () => {
    render(<FormMessage className="custom">Styled</FormMessage>);
    const el = screen.getByText('Styled');
    expect(el).toHaveClass('zy-form-message');
    expect(el).toHaveClass('custom');
  });

  it('passes id through', () => {
    render(<FormMessage id="my-msg">With id</FormMessage>);
    expect(screen.getByText('With id')).toHaveAttribute('id', 'my-msg');
  });

  it('passes role through', () => {
    render(<FormMessage role="alert">Alert</FormMessage>);
    expect(screen.getByRole('alert')).toHaveTextContent('Alert');
  });
});
