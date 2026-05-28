import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Fieldset } from './Fieldset';

describe('Fieldset', () => {
  it('renders fieldset and legend', () => {
    render(<Fieldset legend="Preferences">Content</Fieldset>);
    expect(screen.getByText('Preferences')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders as a fieldset element', () => {
    const { container } = render(<Fieldset legend="Group">Body</Fieldset>);
    expect(container.firstElementChild?.tagName).toBe('FIELDSET');
  });

  it('renders legend element', () => {
    render(<Fieldset legend="Settings">Body</Fieldset>);
    const legend = screen.getByText('Settings');
    expect(legend.tagName).toBe('LEGEND');
  });

  it('shows required marker when required', () => {
    render(
      <Fieldset legend="Required group" required>
        Body
      </Fieldset>,
    );
    expect(screen.getByLabelText('required')).toBeInTheDocument();
  });

  it('does not show required marker by default', () => {
    render(<Fieldset legend="Optional group">Body</Fieldset>);
    expect(screen.queryByLabelText('required')).not.toBeInTheDocument();
  });

  it('renders description text', () => {
    render(
      <Fieldset legend="Notifications" description="Choose your preferences">
        Body
      </Fieldset>,
    );
    expect(screen.getByText('Choose your preferences')).toBeInTheDocument();
  });

  it('renders error message with role="alert"', () => {
    render(
      <Fieldset legend="Options" errorMessage="Select at least one">
        Body
      </Fieldset>,
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Select at least one');
  });

  it('merges description and error into aria-describedby', () => {
    render(
      <Fieldset legend="Group" description="Help text" errorMessage="Error text">
        Body
      </Fieldset>,
    );
    const fieldset = screen.getByRole('group');
    const describedBy = fieldset.getAttribute('aria-describedby') ?? '';
    expect(describedBy).toContain('-description');
    expect(describedBy).toContain('-error');
  });

  it('preserves consumer aria-describedby', () => {
    render(
      <Fieldset legend="Group" description="Help" aria-describedby="external">
        Body
      </Fieldset>,
    );
    const fieldset = screen.getByRole('group');
    const describedBy = fieldset.getAttribute('aria-describedby') ?? '';
    expect(describedBy).toContain('external');
    expect(describedBy).toContain('-description');
  });

  it('sets aria-invalid when invalid', () => {
    render(
      <Fieldset legend="Group" invalid>
        Body
      </Fieldset>,
    );
    expect(screen.getByRole('group')).toHaveAttribute('aria-invalid', 'true');
  });

  it('sets aria-invalid when errorMessage exists', () => {
    render(
      <Fieldset legend="Group" errorMessage="Error">
        Body
      </Fieldset>,
    );
    expect(screen.getByRole('group')).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not set aria-invalid by default', () => {
    render(<Fieldset legend="Group">Body</Fieldset>);
    expect(screen.getByRole('group')).not.toHaveAttribute('aria-invalid');
  });

  it('sets native disabled attribute', () => {
    render(
      <Fieldset legend="Group" disabled>
        Body
      </Fieldset>,
    );
    expect(screen.getByRole('group')).toBeDisabled();
  });

  it('applies horizontal orientation class', () => {
    const { container } = render(
      <Fieldset legend="Group" orientation="horizontal">
        Body
      </Fieldset>,
    );
    expect(container.firstElementChild).toHaveClass('zy-fieldset--horizontal');
  });

  it('does not apply horizontal class for vertical orientation', () => {
    const { container } = render(
      <Fieldset legend="Group" orientation="vertical">
        Body
      </Fieldset>,
    );
    expect(container.firstElementChild).not.toHaveClass('zy-fieldset--horizontal');
  });

  it('applies zy-fieldset--invalid class when invalid', () => {
    const { container } = render(
      <Fieldset legend="Group" invalid>
        Body
      </Fieldset>,
    );
    expect(container.firstElementChild).toHaveClass('zy-fieldset--invalid');
  });

  it('applies zy-fieldset--disabled class when disabled', () => {
    const { container } = render(
      <Fieldset legend="Group" disabled>
        Body
      </Fieldset>,
    );
    expect(container.firstElementChild).toHaveClass('zy-fieldset--disabled');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(
      <Fieldset legend="Group" ref={ref}>
        Body
      </Fieldset>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLFieldSetElement));
  });

  it('merges custom className', () => {
    const { container } = render(
      <Fieldset legend="Group" className="custom">
        Body
      </Fieldset>,
    );
    const el = container.firstElementChild!;
    expect(el).toHaveClass('zy-fieldset');
    expect(el).toHaveClass('custom');
  });
});
