import { forwardRef, type LabelHTMLAttributes, type ReactNode } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Whether the associated field is required */
  required?: boolean;
  /** Optional description text rendered below the label */
  description?: ReactNode;
  /** Whether to show the label in an error state */
  error?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required = false, description, error = false, className = '', children, ...rest }, ref) => {
    const classes = ['zy-label', error ? 'zy-label--error' : '', className]
      .filter(Boolean)
      .join(' ');

    return (
      <label ref={ref} className={classes} {...rest}>
        <span className="zy-label__text">
          {children}
          {required && (
            <span className="zy-label__required" aria-label="required">
              *
            </span>
          )}
        </span>
        {description && <span className="zy-label__description">{description}</span>}
      </label>
    );
  },
);

Label.displayName = 'Label';
