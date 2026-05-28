import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Show loading spinner and disable interaction */
  loading?: boolean;
  /** Icon rendered before the label */
  leftIcon?: ReactNode;
  /** Icon rendered after the label */
  rightIcon?: ReactNode;
  /** Full width button */
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'zy-btn--primary',
  secondary: 'zy-btn--secondary',
  outline: 'zy-btn--outline',
  ghost: 'zy-btn--ghost',
  danger: 'zy-btn--danger',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'zy-btn--sm',
  md: 'zy-btn--md',
  lg: 'zy-btn--lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className = '',
      children,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const classes = [
      'zy-btn',
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? 'zy-btn--full' : '',
      loading ? 'zy-btn--loading' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...rest}
      >
        {loading && (
          <span className="zy-btn__spinner" aria-hidden="true">
            <svg
              className="zy-btn__spinner-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="31.4 31.4"
              />
            </svg>
          </span>
        )}
        {!loading && leftIcon && (
          <span className="zy-btn__icon zy-btn__icon--left" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <span className="zy-btn__label">{children}</span>
        {!loading && rightIcon && (
          <span className="zy-btn__icon zy-btn__icon--right" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
