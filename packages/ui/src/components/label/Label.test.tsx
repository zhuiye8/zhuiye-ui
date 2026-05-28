import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Label } from './Label';

describe('Label', () => {
  it('renders children text', () => {
    render(<Label>Email</Label>);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders as a label element', () => {
    render(<Label>Name</Label>);
    expect(screen.getByText('Name').closest('label')).toBeInTheDocument();
  });

  it('shows required marker when required', () => {
    render(<Label required>Email</Label>);
    expect(screen.getByLabelText('required')).toBeInTheDocument();
  });

  it('does not show required marker by default', () => {
    render(<Label>Email</Label>);
    expect(screen.queryByLabelText('required')).not.toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<Label description="We will never share your email">Email</Label>);
    expect(screen.getByText('We will never share your email')).toBeInTheDocument();
  });

  it('applies error class when error is true', () => {
    render(<Label error>Email</Label>);
    const label = screen.getByText('Email').closest('label');
    expect(label).toHaveClass('zy-label--error');
  });

  it('applies custom className', () => {
    render(<Label className="custom">Email</Label>);
    const label = screen.getByText('Email').closest('label');
    expect(label).toHaveClass('zy-label');
    expect(label).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Label ref={ref}>Email</Label>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLLabelElement));
  });

  it('passes htmlFor to the label element', () => {
    render(<Label htmlFor="email">Email</Label>);
    const label = screen.getByText('Email').closest('label');
    expect(label).toHaveAttribute('for', 'email');
  });
});
