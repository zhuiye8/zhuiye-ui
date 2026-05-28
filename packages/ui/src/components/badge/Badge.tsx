import { forwardRef, type HTMLAttributes } from 'react';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant */
  variant?: BadgeVariant;
  /** Size of the badge */
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
  neutral: 'zy-badge--neutral',
  primary: 'zy-badge--primary',
  success: 'zy-badge--success',
  warning: 'zy-badge--warning',
  danger: 'zy-badge--danger',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'zy-badge--sm',
  md: 'zy-badge--md',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'neutral', size = 'md', className = '', children, ...rest }, ref) => {
    const classes = ['zy-badge', variantStyles[variant], sizeStyles[size], className]
      .filter(Boolean)
      .join(' ');

    return (
      <span ref={ref} className={classes} {...rest}>
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
