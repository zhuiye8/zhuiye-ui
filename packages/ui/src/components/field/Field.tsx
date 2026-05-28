import {
  forwardRef,
  useId,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { Label } from '../label';
import { FormMessage } from '../form-message';

export interface FieldControlProps {
  id?: string;
  disabled?: boolean;
  invalid?: boolean;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean | 'true' | 'false';
}

export interface FieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Label for the field */
  label: ReactNode;
  /** The form control to wrap */
  children: ReactElement<FieldControlProps>;
  /** Optional description text */
  description?: ReactNode;
  /** Error message displayed when invalid */
  errorMessage?: ReactNode;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is in an invalid state */
  invalid?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Whether the field should take full width */
  fullWidth?: boolean;
  /** Explicit id for the control; auto-generated when omitted */
  controlId?: string;
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      label,
      children,
      description,
      errorMessage,
      required = false,
      invalid = false,
      disabled = false,
      fullWidth = false,
      controlId,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const childId = isValidElement(children) ? (children.props as FieldControlProps).id : undefined;
    const resolvedId = childId ?? controlId ?? autoId;

    const descriptionId = description ? `${resolvedId}-description` : undefined;
    const errorId = errorMessage ? `${resolvedId}-error` : undefined;

    const childDescribedBy = isValidElement(children)
      ? (children.props as FieldControlProps)['aria-describedby']
      : undefined;
    const mergedDescribedBy =
      [childDescribedBy, descriptionId, errorId].filter(Boolean).join(' ') || undefined;

    const childDisabled = isValidElement(children)
      ? (children.props as FieldControlProps).disabled
      : undefined;
    const childInvalid = isValidElement(children)
      ? (children.props as FieldControlProps).invalid
      : undefined;
    const childAriaInvalid = isValidElement(children)
      ? (children.props as FieldControlProps)['aria-invalid']
      : undefined;

    const hasError = invalid || !!errorMessage;

    const isNative = isValidElement(children) && typeof children.type === 'string';

    const injectedProps: Partial<FieldControlProps> = {
      'aria-describedby': mergedDescribedBy,
    };
    if (!childId) {
      injectedProps.id = resolvedId;
    }
    if (childDisabled === undefined) {
      injectedProps.disabled = disabled || undefined;
    }
    if (isNative) {
      if (childInvalid === undefined && childAriaInvalid === undefined) {
        injectedProps['aria-invalid'] = hasError || undefined;
      }
    } else {
      if (childInvalid === undefined) {
        injectedProps.invalid = hasError || undefined;
      }
    }

    const controlledChild = isValidElement(children)
      ? cloneElement(children, injectedProps)
      : children;

    const classes = [
      'zy-field',
      fullWidth ? 'zy-field--full' : '',
      hasError ? 'zy-field--invalid' : '',
      disabled ? 'zy-field--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} {...rest}>
        <Label htmlFor={resolvedId} required={required} error={hasError}>
          {label}
        </Label>
        {controlledChild}
        {description && (
          <p className="zy-field__description" id={descriptionId}>
            {description}
          </p>
        )}
        {errorMessage && (
          <FormMessage id={errorId} tone="danger" role="alert">
            {errorMessage}
          </FormMessage>
        )}
      </div>
    );
  },
);

Field.displayName = 'Field';
