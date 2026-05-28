import { forwardRef, useId, type FieldsetHTMLAttributes, type ReactNode } from 'react';
import { FormMessage } from '../form-message';

export type FieldsetOrientation = 'vertical' | 'horizontal';

export interface FieldsetProps extends Omit<
  FieldsetHTMLAttributes<HTMLFieldSetElement>,
  'children'
> {
  /** Legend text for the group */
  legend: ReactNode;
  /** Optional description text */
  description?: ReactNode;
  /** Error message displayed when invalid */
  errorMessage?: ReactNode;
  /** Whether the group is required */
  required?: boolean;
  /** Whether the group is in an invalid state */
  invalid?: boolean;
  /** Whether the group is disabled */
  disabled?: boolean;
  /** Layout orientation */
  orientation?: FieldsetOrientation;
  /** Content of the fieldset */
  children?: ReactNode;
}

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  (
    {
      legend,
      description,
      errorMessage,
      required = false,
      invalid = false,
      disabled = false,
      orientation = 'vertical',
      className = '',
      children,
      'aria-describedby': consumerDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const descriptionId = description ? `${autoId}-description` : undefined;
    const errorId = errorMessage ? `${autoId}-error` : undefined;

    const hasError = invalid || !!errorMessage;
    const mergedDescribedBy =
      [consumerDescribedBy, descriptionId, errorId].filter(Boolean).join(' ') || undefined;

    const classes = [
      'zy-fieldset',
      orientation === 'horizontal' ? 'zy-fieldset--horizontal' : '',
      hasError ? 'zy-fieldset--invalid' : '',
      disabled ? 'zy-fieldset--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <fieldset
        ref={ref}
        className={classes}
        disabled={disabled}
        aria-describedby={mergedDescribedBy}
        aria-invalid={hasError || undefined}
        {...rest}
      >
        <legend className="zy-fieldset__legend">
          {legend}
          {required && (
            <span className="zy-fieldset__required" aria-label="required">
              *
            </span>
          )}
        </legend>
        {description && (
          <p className="zy-fieldset__description" id={descriptionId}>
            {description}
          </p>
        )}
        {children}
        {errorMessage && (
          <FormMessage id={errorId} tone="danger" role="alert">
            {errorMessage}
          </FormMessage>
        )}
      </fieldset>
    );
  },
);

Fieldset.displayName = 'Fieldset';
