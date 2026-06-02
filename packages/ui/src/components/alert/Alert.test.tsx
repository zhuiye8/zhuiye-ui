import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Alert, AlertTitle, AlertDescription, AlertActions } from './Alert';

describe('Alert', () => {
  it('renders children text', () => {
    render(<Alert>Alert content</Alert>);
    expect(screen.getByText('Alert content')).toBeInTheDocument();
  });

  it('renders as a div element', () => {
    render(<Alert data-testid="alert">Test</Alert>);
    expect(screen.getByTestId('alert').tagName).toBe('DIV');
  });

  it('has role="status" by default for neutral alerts', () => {
    render(<Alert data-testid="alert">Test</Alert>);
    expect(screen.getByTestId('alert')).toHaveAttribute('role', 'status');
  });

  it('uses role="alert" by default for warning and danger alerts', () => {
    render(
      <>
        <Alert variant="warning" data-testid="warning">
          Warning
        </Alert>
        <Alert variant="danger" data-testid="danger">
          Danger
        </Alert>
      </>,
    );
    expect(screen.getByTestId('warning')).toHaveAttribute('role', 'alert');
    expect(screen.getByTestId('danger')).toHaveAttribute('role', 'alert');
  });

  it('allows custom role override', () => {
    render(
      <Alert role="status" data-testid="alert">
        Test
      </Alert>,
    );
    expect(screen.getByTestId('alert')).toHaveAttribute('role', 'status');
  });

  it('applies variant class', () => {
    render(
      <Alert variant="danger" data-testid="alert">
        Error
      </Alert>,
    );
    expect(screen.getByTestId('alert')).toHaveClass('zy-alert--danger');
  });

  it('applies size class', () => {
    render(
      <Alert size="sm" data-testid="alert">
        Small
      </Alert>,
    );
    expect(screen.getByTestId('alert')).toHaveClass('zy-alert--sm');
  });

  it('defaults to neutral variant and md size', () => {
    render(<Alert data-testid="alert">Default</Alert>);
    const alert = screen.getByTestId('alert');
    expect(alert).toHaveClass('zy-alert--neutral');
    expect(alert).toHaveClass('zy-alert--md');
  });

  it('applies custom className', () => {
    render(
      <Alert className="custom" data-testid="alert">
        Test
      </Alert>,
    );
    expect(screen.getByTestId('alert')).toHaveClass('zy-alert');
    expect(screen.getByTestId('alert')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Alert ref={ref}>Ref</Alert>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('passes through extra props', () => {
    render(
      <Alert title="Warning" data-testid="alert">
        Test
      </Alert>,
    );
    expect(screen.getByTestId('alert')).toHaveAttribute('title', 'Warning');
  });

  it('renders all variant classes', () => {
    const variants = ['neutral', 'info', 'success', 'warning', 'danger'] as const;
    variants.forEach((variant) => {
      const { unmount } = render(
        <Alert variant={variant} data-testid={`alert-${variant}`}>
          Test
        </Alert>,
      );
      expect(screen.getByTestId(`alert-${variant}`)).toHaveClass(`zy-alert--${variant}`);
      unmount();
    });
  });

  it('renders all size classes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    sizes.forEach((size) => {
      const { unmount } = render(
        <Alert size={size} data-testid={`alert-${size}`}>
          Test
        </Alert>,
      );
      expect(screen.getByTestId(`alert-${size}`)).toHaveClass(`zy-alert--${size}`);
      unmount();
    });
  });
});

describe('AlertTitle', () => {
  it('renders as an h4 element', () => {
    render(<AlertTitle data-testid="title">Title</AlertTitle>);
    expect(screen.getByTestId('title').tagName).toBe('H4');
  });

  it('applies custom className', () => {
    render(
      <AlertTitle className="custom" data-testid="title">
        Title
      </AlertTitle>,
    );
    expect(screen.getByTestId('title')).toHaveClass('zy-alert__title');
    expect(screen.getByTestId('title')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<AlertTitle ref={ref}>Title</AlertTitle>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLHeadingElement));
  });
});

describe('AlertDescription', () => {
  it('renders as a p element', () => {
    render(<AlertDescription data-testid="desc">Description</AlertDescription>);
    expect(screen.getByTestId('desc').tagName).toBe('P');
  });

  it('applies custom className', () => {
    render(
      <AlertDescription className="custom" data-testid="desc">
        Desc
      </AlertDescription>,
    );
    expect(screen.getByTestId('desc')).toHaveClass('zy-alert__description');
    expect(screen.getByTestId('desc')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<AlertDescription ref={ref}>Desc</AlertDescription>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLParagraphElement));
  });
});

describe('AlertActions', () => {
  it('renders as a div element', () => {
    render(<AlertActions data-testid="actions">Actions</AlertActions>);
    expect(screen.getByTestId('actions').tagName).toBe('DIV');
  });

  it('applies custom className', () => {
    render(
      <AlertActions className="custom" data-testid="actions">
        Actions
      </AlertActions>,
    );
    expect(screen.getByTestId('actions')).toHaveClass('zy-alert__actions');
    expect(screen.getByTestId('actions')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<AlertActions ref={ref}>Actions</AlertActions>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});

describe('Alert composition', () => {
  it('renders compound alert with title, description, and actions', () => {
    render(
      <Alert variant="warning" data-testid="alert">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Something happened.</AlertDescription>
        <AlertActions>
          <button>Retry</button>
        </AlertActions>
      </Alert>,
    );

    expect(screen.getByText('Warning')).toBeInTheDocument();
    expect(screen.getByText('Something happened.')).toBeInTheDocument();
    expect(screen.getByText('Retry')).toBeInTheDocument();
    expect(screen.getByTestId('alert')).toHaveClass('zy-alert--warning');
  });
});
