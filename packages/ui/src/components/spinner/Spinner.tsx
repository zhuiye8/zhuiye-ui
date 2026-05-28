import { forwardRef, type HTMLAttributes } from 'react';
import { VisuallyHidden } from '../visually-hidden';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Size of the spinner */
  size?: SpinnerSize;
  /** Accessible label text when not decorative */
  label?: string;
  /** When true, hides from screen readers and removes status role */
  decorative?: boolean;
}

const sizeMap: Record<SpinnerSize, string> = {
  sm: 'zy-spinner--sm',
  md: 'zy-spinner--md',
  lg: 'zy-spinner--lg',
};

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = 'md', label = 'Loading', decorative = false, className = '', ...rest }, ref) => {
    const classes = ['zy-spinner', sizeMap[size], className].filter(Boolean).join(' ');

    if (decorative) {
      return (
        <span ref={ref} className={classes} aria-hidden="true" {...rest}>
          <svg
            className="zy-spinner__icon"
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
      );
    }

    return (
      <span ref={ref} className={classes} role="status" {...rest}>
        <svg
          className="zy-spinner__icon"
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
        <VisuallyHidden>{label}</VisuallyHidden>
      </span>
    );
  },
);

Spinner.displayName = 'Spinner';
