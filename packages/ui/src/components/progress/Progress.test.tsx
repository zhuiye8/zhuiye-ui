import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Progress, ProgressIndicator } from './Progress';

describe('Progress', () => {
  it('renders a progress bar', () => {
    render(<Progress data-testid="progress" />);
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });

  it('has role="progressbar"', () => {
    render(<Progress data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveAttribute('role', 'progressbar');
  });

  it('applies variant class', () => {
    render(<Progress variant="danger" data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveClass('zy-progress--danger');
  });

  it('applies size class', () => {
    render(<Progress size="lg" data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveClass('zy-progress--lg');
  });

  it('defaults to primary variant and md size', () => {
    render(<Progress data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    expect(progress).toHaveClass('zy-progress--primary');
    expect(progress).toHaveClass('zy-progress--md');
  });

  it('applies custom className', () => {
    render(<Progress className="custom" data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    expect(progress).toHaveClass('zy-progress');
    expect(progress).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Progress ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('passes through extra props', () => {
    render(<Progress title="Upload progress" data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveAttribute('title', 'Upload progress');
  });

  it('handles determinate value', () => {
    render(<Progress value={50} data-testid="progress" />);
    const progress = screen.getByTestId('progress');
    expect(progress).toHaveAttribute('aria-valuenow', '50');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
  });

  it('clamps value to 0..100', () => {
    render(<Progress value={150} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveAttribute('aria-valuenow', '100');
  });

  it('clamps negative value to 0', () => {
    render(<Progress value={-10} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveAttribute('aria-valuenow', '0');
  });

  it('sets data-state to complete when value equals max', () => {
    render(<Progress value={100} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveAttribute('data-state', 'complete');
  });

  it('sets data-state to indeterminate when value is null', () => {
    render(<Progress value={null} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveAttribute('data-state', 'indeterminate');
  });

  it('sets data-state to loading when value is partial', () => {
    render(<Progress value={50} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveAttribute('data-state', 'loading');
  });

  it('respects custom max', () => {
    render(<Progress value={50} max={200} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveAttribute('aria-valuemax', '200');
  });

  it('renders all variant classes', () => {
    const variants = ['primary', 'success', 'warning', 'danger', 'neutral'] as const;
    variants.forEach((variant) => {
      const { unmount } = render(
        <Progress variant={variant} data-testid={`progress-${variant}`} />,
      );
      expect(screen.getByTestId(`progress-${variant}`)).toHaveClass(`zy-progress--${variant}`);
      unmount();
    });
  });

  it('renders all size classes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    sizes.forEach((size) => {
      const { unmount } = render(<Progress size={size} data-testid={`progress-${size}`} />);
      expect(screen.getByTestId(`progress-${size}`)).toHaveClass(`zy-progress--${size}`);
      unmount();
    });
  });
});

describe('ProgressIndicator', () => {
  it('applies indicator class and value CSS variable', () => {
    render(
      <Progress value={25}>
        <ProgressIndicator value={25} data-testid="indicator" />
      </Progress>,
    );
    const indicator = screen.getByTestId('indicator');

    expect(indicator).toHaveClass('zy-progress__indicator');
    expect(indicator).toHaveStyle({ '--zy-progress-value': '25%' });
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(
      <Progress>
        <ProgressIndicator ref={ref} />
      </Progress>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});
