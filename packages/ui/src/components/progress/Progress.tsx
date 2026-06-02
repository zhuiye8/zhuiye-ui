import { forwardRef, type ComponentPropsWithoutRef, type CSSProperties } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

export type ProgressVariant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
export type ProgressSize = 'sm' | 'md' | 'lg';

export interface ProgressProps extends ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  /** Visual style variant */
  variant?: ProgressVariant;
  /** Size of the progress bar */
  size?: ProgressSize;
  /** Accessible label for the progress bar */
  'aria-label'?: string;
}

export interface ProgressIndicatorProps extends ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Indicator
> {
  /** Value used to position the indicator when rendered manually */
  value?: number | null;
  /** Maximum value used with value */
  max?: number;
}

type ProgressIndicatorStyle = CSSProperties & {
  '--zy-progress-value'?: string;
};

const variantStyles: Record<ProgressVariant, string> = {
  primary: 'zy-progress--primary',
  success: 'zy-progress--success',
  warning: 'zy-progress--warning',
  danger: 'zy-progress--danger',
  neutral: 'zy-progress--neutral',
};

const sizeStyles: Record<ProgressSize, string> = {
  sm: 'zy-progress--sm',
  md: 'zy-progress--md',
  lg: 'zy-progress--lg',
};

function getClampedValue(value: number | null | undefined, max: number) {
  if (value == null) {
    return null;
  }

  return Math.min(Math.max(value, 0), max);
}

function getPercent(value: number | null | undefined, max: number) {
  const clampedValue = getClampedValue(value, max);

  if (clampedValue == null) {
    return null;
  }

  return (clampedValue / max) * 100;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    { variant = 'primary', size = 'md', className = '', value, max = 100, children, ...rest },
    ref,
  ) => {
    const classes = ['zy-progress', variantStyles[variant], sizeStyles[size], className]
      .filter(Boolean)
      .join(' ');
    const normalizedMax = max > 0 ? max : 100;
    const clampedValue = getClampedValue(value, normalizedMax);

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={classes}
        value={clampedValue}
        max={normalizedMax}
        {...rest}
      >
        {children ?? <ProgressIndicator value={clampedValue} max={normalizedMax} />}
      </ProgressPrimitive.Root>
    );
  },
);

Progress.displayName = 'Progress';

export const ProgressIndicator = forwardRef<HTMLDivElement, ProgressIndicatorProps>(
  ({ className = '', value, max = 100, style, ...rest }, ref) => {
    const normalizedMax = max > 0 ? max : 100;
    const percent = getPercent(value, normalizedMax);
    const indicatorStyle: ProgressIndicatorStyle =
      percent == null ? { ...style } : { '--zy-progress-value': `${percent}%`, ...style };

    return (
      <ProgressPrimitive.Indicator
        ref={ref}
        className={`zy-progress__indicator ${className}`.trim()}
        style={indicatorStyle}
        {...rest}
      />
    );
  },
);

ProgressIndicator.displayName = 'ProgressIndicator';
