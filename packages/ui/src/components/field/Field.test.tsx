import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { forwardRef, type InputHTMLAttributes } from 'react';
import { Field, type FieldControlProps } from './Field';

const MockInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & FieldControlProps
>(({ invalid, ...rest }, ref) => <input ref={ref} aria-invalid={invalid || undefined} {...rest} />);
MockInput.displayName = 'MockInput';

describe('Field', () => {
  it('renders label text', () => {
    render(
      <Field label="Email">
        <MockInput />
      </Field>,
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders as a div', () => {
    const { container } = render(
      <Field label="Name">
        <MockInput />
      </Field>,
    );
    expect(container.firstElementChild?.tagName).toBe('DIV');
  });

  it('generates a stable id and associates label with input', () => {
    render(
      <Field label="Email">
        <MockInput />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Email').closest('label');
    expect(input).toHaveAttribute('id');
    expect(label).toHaveAttribute('for', input.getAttribute('id'));
  });

  it('respects explicit controlId', () => {
    render(
      <Field label="Email" controlId="my-email">
        <MockInput />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'my-email');
    expect(screen.getByText('Email').closest('label')).toHaveAttribute('for', 'my-email');
  });

  it('child id wins over controlId', () => {
    render(
      <Field label="Email" controlId="my-email">
        <MockInput id="child-id" />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'child-id');
    expect(screen.getByText('Email').closest('label')).toHaveAttribute('for', 'child-id');
  });

  it('renders description text', () => {
    render(
      <Field label="Email" description="We will never share your email.">
        <MockInput />
      </Field>,
    );
    expect(screen.getByText('We will never share your email.')).toBeInTheDocument();
  });

  it('description id is in aria-describedby', () => {
    render(
      <Field label="Email" description="Help text" controlId="ctl">
        <MockInput />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('aria-describedby')).toContain('ctl-description');
  });

  it('renders error message with role="alert"', () => {
    render(
      <Field label="Email" errorMessage="Required field">
        <MockInput />
      </Field>,
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Required field');
  });

  it('error id is in aria-describedby', () => {
    render(
      <Field label="Email" errorMessage="Error!" controlId="ctl">
        <MockInput />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('aria-describedby')).toContain('ctl-error');
  });

  it('merges consumer aria-describedby', () => {
    render(
      <Field label="Email" description="Help" controlId="ctl">
        <MockInput aria-describedby="external-id" />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    const describedBy = input.getAttribute('aria-describedby') ?? '';
    expect(describedBy).toContain('external-id');
    expect(describedBy).toContain('ctl-description');
  });

  it('injects disabled when child does not define it', () => {
    render(
      <Field label="Email" disabled>
        <MockInput />
      </Field>,
    );
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('does not override explicit child disabled', () => {
    render(
      <Field label="Email" disabled>
        <MockInput disabled={false} />
      </Field>,
    );
    expect(screen.getByRole('textbox')).not.toBeDisabled();
  });

  it('injects invalid when child does not define it', () => {
    render(
      <Field label="Email" invalid>
        <MockInput />
      </Field>,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not override explicit child invalid', () => {
    render(
      <Field label="Email" invalid>
        <MockInput invalid={false} />
      </Field>,
    );
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid');
  });

  it('sets invalid from errorMessage even without invalid prop', () => {
    render(
      <Field label="Email" errorMessage="Required">
        <MockInput />
      </Field>,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('applies zy-field--invalid class when invalid', () => {
    const { container } = render(
      <Field label="Email" invalid>
        <MockInput />
      </Field>,
    );
    expect(container.firstElementChild).toHaveClass('zy-field--invalid');
  });

  it('applies zy-field--invalid class when errorMessage exists', () => {
    const { container } = render(
      <Field label="Email" errorMessage="Error">
        <MockInput />
      </Field>,
    );
    expect(container.firstElementChild).toHaveClass('zy-field--invalid');
  });

  it('applies zy-field--disabled class when disabled', () => {
    const { container } = render(
      <Field label="Email" disabled>
        <MockInput />
      </Field>,
    );
    expect(container.firstElementChild).toHaveClass('zy-field--disabled');
  });

  it('applies zy-field--full class when fullWidth', () => {
    const { container } = render(
      <Field label="Email" fullWidth>
        <MockInput />
      </Field>,
    );
    expect(container.firstElementChild).toHaveClass('zy-field--full');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(
      <Field label="Email" ref={ref}>
        <MockInput />
      </Field>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('merges custom className', () => {
    const { container } = render(
      <Field label="Email" className="custom">
        <MockInput />
      </Field>,
    );
    const el = container.firstElementChild!;
    expect(el).toHaveClass('zy-field');
    expect(el).toHaveClass('custom');
  });

  it('shows required marker when required', () => {
    render(
      <Field label="Email" required>
        <MockInput />
      </Field>,
    );
    expect(screen.getByLabelText('required')).toBeInTheDocument();
  });

  it('does not show required marker by default', () => {
    render(
      <Field label="Email">
        <MockInput />
      </Field>,
    );
    expect(screen.queryByLabelText('required')).not.toBeInTheDocument();
  });

  it('native input receives auto id and label association', () => {
    render(
      <Field label="Email">
        <input />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Email').closest('label');
    expect(input).toHaveAttribute('id');
    expect(label).toHaveAttribute('for', input.getAttribute('id'));
  });

  it('native input receives merged aria-describedby', () => {
    render(
      <Field label="Email" description="Help text" controlId="ctl">
        <input aria-describedby="external-id" />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    const describedBy = input.getAttribute('aria-describedby') ?? '';
    expect(describedBy).toContain('external-id');
    expect(describedBy).toContain('ctl-description');
  });

  it('native input receives aria-invalid="true" for invalid/error', () => {
    render(
      <Field label="Email" errorMessage="Required">
        <input />
      </Field>,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('native input does not receive an invalid attribute', () => {
    render(
      <Field label="Email" invalid>
        <input />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).not.toHaveAttribute('invalid');
  });

  it('explicit native aria-invalid="false" is preserved', () => {
    render(
      <Field label="Email" invalid>
        <input aria-invalid="false" />
      </Field>,
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });
});
