import { forwardRef, useId, useState, type ButtonHTMLAttributes, type ReactNode } from 'react';

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Whether the switch is checked (controlled) */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Callback when the checked state changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Label text rendered beside the switch */
  label?: ReactNode;
  /** Helper text displayed below the switch */
  description?: ReactNode;
  /** Error message displayed below the switch */
  errorMessage?: ReactNode;
  /** Whether the switch is in an invalid state */
  invalid?: boolean;
  /** Whether the switch should take full width */
  fullWidth?: boolean;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked = false,
      onCheckedChange,
      label,
      description,
      errorMessage,
      invalid = false,
      fullWidth = false,
      disabled,
      className = '',
      id,
      'aria-describedby': consumerDescribedBy,
      onClick,
      onKeyDown,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const resolvedId = id ?? autoId;
    const descriptionId = description ? `${resolvedId}-description` : undefined;
    const errorId = errorMessage ? `${resolvedId}-error` : undefined;
    const describedBy =
      [consumerDescribedBy, descriptionId, errorId].filter(Boolean).join(' ') || undefined;

    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isChecked = isControlled ? checked : internalChecked;

    const wrapperClasses = [
      'zy-switch',
      fullWidth ? 'zy-switch--full' : '',
      disabled ? 'zy-switch--disabled' : '',
      invalid ? 'zy-switch--invalid' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      onClick?.(e);
      if (disabled || e.defaultPrevented) return;
      const next = !isChecked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
      onKeyDown?.(e);
      if (disabled || e.defaultPrevented) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        const next = !isChecked;
        if (!isControlled) {
          setInternalChecked(next);
        }
        onCheckedChange?.(next);
      }
    };

    return (
      <div className={wrapperClasses}>
        <label className="zy-switch__label" htmlFor={resolvedId}>
          <button
            ref={ref}
            id={resolvedId}
            type="button"
            role="switch"
            aria-checked={isChecked}
            aria-invalid={invalid || undefined}
            aria-describedby={describedBy}
            disabled={disabled}
            className={['zy-switch__track', isChecked ? 'zy-switch__track--checked' : '']
              .filter(Boolean)
              .join(' ')}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            {...rest}
          >
            <span
              className={['zy-switch__thumb', isChecked ? 'zy-switch__thumb--checked' : '']
                .filter(Boolean)
                .join(' ')}
            />
          </button>
          {label && <span className="zy-switch__text">{label}</span>}
        </label>
        {description && (
          <p className="zy-switch__description" id={descriptionId}>
            {description}
          </p>
        )}
        {errorMessage && (
          <p className="zy-switch__error" id={errorId} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

Switch.displayName = 'Switch';
