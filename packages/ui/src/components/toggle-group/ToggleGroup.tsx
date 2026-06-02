import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

export type ToggleGroupVariant = 'ghost' | 'outline' | 'soft';
export type ToggleGroupSize = 'sm' | 'md' | 'lg';
export type ToggleGroupTone = 'neutral' | 'primary' | 'danger';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export type ToggleGroupProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  tone?: ToggleGroupTone;
};

export type ToggleGroupItemProps = ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>;

const variantStyles: Record<ToggleGroupVariant, string> = {
  ghost: 'zy-toggle-group--ghost',
  outline: 'zy-toggle-group--outline',
  soft: 'zy-toggle-group--soft',
};

const sizeStyles: Record<ToggleGroupSize, string> = {
  sm: 'zy-toggle-group--sm',
  md: 'zy-toggle-group--md',
  lg: 'zy-toggle-group--lg',
};

const toneStyles: Record<ToggleGroupTone, string> = {
  neutral: 'zy-toggle-group--neutral',
  primary: 'zy-toggle-group--primary',
  danger: 'zy-toggle-group--danger',
};

export const ToggleGroup = forwardRef<
  ComponentRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ variant = 'outline', size = 'md', tone = 'neutral', className = '', ...rest }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cx(
      'zy-toggle-group',
      variantStyles[variant],
      sizeStyles[size],
      toneStyles[tone],
      className,
    )}
    {...rest}
  />
));
ToggleGroup.displayName = 'ToggleGroup';

export const ToggleGroupItem = forwardRef<
  ComponentRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className = '', ...rest }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cx('zy-toggle-group__item', className)}
    {...rest}
  />
));
ToggleGroupItem.displayName = 'ToggleGroupItem';
