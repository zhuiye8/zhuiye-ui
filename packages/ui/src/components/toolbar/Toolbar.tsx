import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';

export type ToolbarVariant = 'plain' | 'subtle' | 'framed';
export type ToolbarSize = 'sm' | 'md' | 'lg';
export type ToolbarTone = 'neutral' | 'primary' | 'danger';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const variantStyles: Record<ToolbarVariant, string> = {
  plain: 'zy-toolbar--plain',
  subtle: 'zy-toolbar--subtle',
  framed: 'zy-toolbar--framed',
};

const sizeStyles: Record<ToolbarSize, string> = {
  sm: 'zy-toolbar--sm',
  md: 'zy-toolbar--md',
  lg: 'zy-toolbar--lg',
};

const toneStyles: Record<ToolbarTone, string> = {
  neutral: 'zy-toolbar__control--neutral',
  primary: 'zy-toolbar__control--primary',
  danger: 'zy-toolbar__control--danger',
};

export interface ToolbarProps extends ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root> {
  variant?: ToolbarVariant;
  size?: ToolbarSize;
}

export interface ToolbarButtonProps extends ComponentPropsWithoutRef<
  typeof ToolbarPrimitive.Button
> {
  tone?: ToolbarTone;
}

export interface ToolbarLinkProps extends ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link> {
  tone?: ToolbarTone;
}

export type ToolbarSeparatorProps = ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>;
export type ToolbarToggleGroupProps = ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleGroup>;

export interface ToolbarToggleItemProps extends ComponentPropsWithoutRef<
  typeof ToolbarPrimitive.ToggleItem
> {
  tone?: ToolbarTone;
}

export const Toolbar = forwardRef<ComponentRef<typeof ToolbarPrimitive.Root>, ToolbarProps>(
  ({ variant = 'plain', size = 'md', className = '', ...rest }, ref) => (
    <ToolbarPrimitive.Root
      ref={ref}
      className={cx('zy-toolbar', variantStyles[variant], sizeStyles[size], className)}
      {...rest}
    />
  ),
);
Toolbar.displayName = 'Toolbar';

export const ToolbarButton = forwardRef<
  ComponentRef<typeof ToolbarPrimitive.Button>,
  ToolbarButtonProps
>(({ tone = 'neutral', className = '', ...rest }, ref) => (
  <ToolbarPrimitive.Button
    ref={ref}
    className={cx('zy-toolbar__control', toneStyles[tone], className)}
    {...rest}
  />
));
ToolbarButton.displayName = 'ToolbarButton';

export const ToolbarLink = forwardRef<ComponentRef<typeof ToolbarPrimitive.Link>, ToolbarLinkProps>(
  ({ tone = 'neutral', className = '', ...rest }, ref) => (
    <ToolbarPrimitive.Link
      ref={ref}
      className={cx('zy-toolbar__control', 'zy-toolbar__link', toneStyles[tone], className)}
      {...rest}
    />
  ),
);
ToolbarLink.displayName = 'ToolbarLink';

export const ToolbarSeparator = forwardRef<
  ComponentRef<typeof ToolbarPrimitive.Separator>,
  ToolbarSeparatorProps
>(({ className = '', ...rest }, ref) => (
  <ToolbarPrimitive.Separator
    ref={ref}
    className={cx('zy-toolbar__separator', className)}
    {...rest}
  />
));
ToolbarSeparator.displayName = 'ToolbarSeparator';

export const ToolbarToggleGroup = forwardRef<
  ComponentRef<typeof ToolbarPrimitive.ToggleGroup>,
  ToolbarToggleGroupProps
>(({ className = '', ...rest }, ref) => (
  <ToolbarPrimitive.ToggleGroup
    ref={ref}
    className={cx('zy-toolbar__toggle-group', className)}
    {...rest}
  />
));
ToolbarToggleGroup.displayName = 'ToolbarToggleGroup';

export const ToolbarToggleItem = forwardRef<
  ComponentRef<typeof ToolbarPrimitive.ToggleItem>,
  ToolbarToggleItemProps
>(({ tone = 'neutral', className = '', ...rest }, ref) => (
  <ToolbarPrimitive.ToggleItem
    ref={ref}
    className={cx('zy-toolbar__control', 'zy-toolbar__toggle-item', toneStyles[tone], className)}
    {...rest}
  />
));
ToolbarToggleItem.displayName = 'ToolbarToggleItem';
