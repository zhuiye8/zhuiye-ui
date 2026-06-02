import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';

export type ToggleVariant = 'ghost' | 'outline' | 'soft';
export type ToggleSize = 'sm' | 'md' | 'lg';
export type ToggleTone = 'neutral' | 'primary' | 'danger';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface ToggleProps extends ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  variant?: ToggleVariant;
  size?: ToggleSize;
  tone?: ToggleTone;
}

const variantStyles: Record<ToggleVariant, string> = {
  ghost: 'zy-toggle--ghost',
  outline: 'zy-toggle--outline',
  soft: 'zy-toggle--soft',
};

const sizeStyles: Record<ToggleSize, string> = {
  sm: 'zy-toggle--sm',
  md: 'zy-toggle--md',
  lg: 'zy-toggle--lg',
};

const toneStyles: Record<ToggleTone, string> = {
  neutral: 'zy-toggle--neutral',
  primary: 'zy-toggle--primary',
  danger: 'zy-toggle--danger',
};

export const Toggle = forwardRef<ComponentRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ variant = 'ghost', size = 'md', tone = 'neutral', className = '', ...rest }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cx(
        'zy-toggle',
        variantStyles[variant],
        sizeStyles[size],
        toneStyles[tone],
        className,
      )}
      {...rest}
    />
  ),
);
Toggle.displayName = 'Toggle';
