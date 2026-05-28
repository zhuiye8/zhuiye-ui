import {
  forwardRef,
  useId,
  useRef,
  useEffect,
  useCallback,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> {
  /** Label text rendered beside the checkbox */
  label?: ReactNode;
  /** Helper text displayed below the checkbox */
  description?: ReactNode;
  /** Error message displayed below the checkbox */
  errorMessage?: ReactNode;
  /** Whether the checkbox is in an invalid state */
  invalid?: boolean;
  /** Whether the checkbox should take full width */
  fullWidth?: boolean;
  /** Indeterminate state (visual only, does not affect checked) */
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      errorMessage,
      invalid = false,
      fullWidth = false,
      indeterminate = false,
      disabled,
      className = '',
      id,
      'aria-describedby': consumerDescribedBy,
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

    const internalRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const mergedRef = useCallback(
      (el: HTMLInputElement | null) => {
        internalRef.current = el;
        if (typeof ref === 'function') {
          ref(el);
        } else if (ref) {
          ref.current = el;
        }
      },
      [ref],
    );

    const wrapperClasses = [
      'zy-checkbox',
      fullWidth ? 'zy-checkbox--full' : '',
      disabled ? 'zy-checkbox--disabled' : '',
      invalid ? 'zy-checkbox--invalid' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        <label className="zy-checkbox__label" htmlFor={resolvedId}>
          <span className="zy-checkbox__control">
            <input
              ref={mergedRef}
              type="checkbox"
              id={resolvedId}
              className="zy-checkbox__input"
              disabled={disabled}
              aria-invalid={invalid || undefined}
              aria-describedby={describedBy}
              {...rest}
            />
            <span className="zy-checkbox__box" aria-hidden="true">
              {indeterminate ? (
                <svg
                  className="zy-checkbox__icon"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.5 8h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  className="zy-checkbox__icon"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 8.5L6.5 11.5L12.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </span>
          {label && <span className="zy-checkbox__text">{label}</span>}
        </label>
        {description && (
          <p className="zy-checkbox__description" id={descriptionId}>
            {description}
          </p>
        )}
        {errorMessage && (
          <p className="zy-checkbox__error" id={errorId} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
