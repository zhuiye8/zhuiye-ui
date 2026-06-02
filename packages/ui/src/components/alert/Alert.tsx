import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export type AlertVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
export type AlertSize = 'sm' | 'md' | 'lg';

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  /** Visual style variant */
  variant?: AlertVariant;
  /** Size of the alert */
  size?: AlertSize;
}

export type AlertTitleProps = ComponentPropsWithoutRef<'h4'>;

export type AlertDescriptionProps = ComponentPropsWithoutRef<'p'>;

export type AlertActionsProps = ComponentPropsWithoutRef<'div'>;

const variantStyles: Record<AlertVariant, string> = {
  neutral: 'zy-alert--neutral',
  info: 'zy-alert--info',
  success: 'zy-alert--success',
  warning: 'zy-alert--warning',
  danger: 'zy-alert--danger',
};

const sizeStyles: Record<AlertSize, string> = {
  sm: 'zy-alert--sm',
  md: 'zy-alert--md',
  lg: 'zy-alert--lg',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'neutral', size = 'md', role, className = '', children, ...rest }, ref) => {
    const classes = ['zy-alert', variantStyles[variant], sizeStyles[size], className]
      .filter(Boolean)
      .join(' ');
    const semanticRole =
      role ?? (variant === 'danger' || variant === 'warning' ? 'alert' : 'status');

    return (
      <div ref={ref} role={semanticRole} className={classes} {...rest}>
        <span className="zy-alert__rail" aria-hidden="true" />
        <div className="zy-alert__body">{children}</div>
      </div>
    );
  },
);

Alert.displayName = 'Alert';

export const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className = '', ...rest }, ref) => (
    <h4 ref={ref} className={`zy-alert__title ${className}`.trim()} {...rest} />
  ),
);

AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className = '', ...rest }, ref) => (
    <p ref={ref} className={`zy-alert__description ${className}`.trim()} {...rest} />
  ),
);

AlertDescription.displayName = 'AlertDescription';

export const AlertActions = forwardRef<HTMLDivElement, AlertActionsProps>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={`zy-alert__actions ${className}`.trim()} {...rest} />
  ),
);

AlertActions.displayName = 'AlertActions';
