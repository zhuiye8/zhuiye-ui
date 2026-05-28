import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size of the input */
  size?: InputSize;
  /** Whether the input is in an invalid state */
  invalid?: boolean;
  /** Error message to display below the input */
  errorMessage?: string;
  /** Whether the input should take full width */
  fullWidth?: boolean;
  /** Content to render before the input value */
  leftAdornment?: ReactNode;
  /** Content to render after the input value */
  rightAdornment?: ReactNode;
}

const sizeStyles: Record<InputSize, string> = {
  sm: 'zy-input--sm',
  md: 'zy-input--md',
  lg: 'zy-input--lg',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      invalid = false,
      errorMessage,
      fullWidth = false,
      leftAdornment,
      rightAdornment,
      disabled,
      className = '',
      id,
      'aria-describedby': consumerDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const classes = [
      'zy-input',
      sizeStyles[size],
      fullWidth ? 'zy-input--full' : '',
      invalid ? 'zy-input--invalid' : '',
      disabled ? 'zy-input--disabled' : '',
      leftAdornment ? 'zy-input--has-left' : '',
      rightAdornment ? 'zy-input--has-right' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const autoId = useId();
    const resolvedId = id ?? autoId;
    const errorId = errorMessage ? `${resolvedId}-error` : undefined;
    const describedBy = [consumerDescribedBy, errorId].filter(Boolean).join(' ') || undefined;

    return (
      <div className={fullWidth ? 'zy-input-wrapper--full' : 'zy-input-wrapper'}>
        <div className={classes}>
          {leftAdornment && (
            <span className="zy-input__adornment zy-input__adornment--left" aria-hidden="true">
              {leftAdornment}
            </span>
          )}
          <input
            ref={ref}
            className="zy-input__field"
            disabled={disabled}
            aria-invalid={invalid || undefined}
            aria-describedby={describedBy}
            id={resolvedId}
            {...rest}
          />
          {rightAdornment && (
            <span className="zy-input__adornment zy-input__adornment--right" aria-hidden="true">
              {rightAdornment}
            </span>
          )}
        </div>
        {errorMessage && (
          <p className="zy-input__error" id={errorId} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
