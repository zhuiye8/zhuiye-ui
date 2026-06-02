import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode,
} from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

export type NavigationMenuVariant = 'plain' | 'subtle' | 'framed';
export type NavigationMenuSize = 'sm' | 'md' | 'lg';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface NavigationMenuProps extends ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Root
> {
  variant?: NavigationMenuVariant;
  size?: NavigationMenuSize;
}

export interface NavigationMenuListProps extends ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.List
> {
  density?: 'compact' | 'comfortable';
}

export type NavigationMenuItemProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>;

export interface NavigationMenuTriggerProps extends ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Trigger
> {
  showChevron?: boolean;
}

export type NavigationMenuContentProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Content
>;

export type NavigationMenuLinkProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>;

export interface NavigationMenuIndicatorProps extends ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Indicator
> {
  children?: ReactNode;
}

export type NavigationMenuViewportProps = ComponentPropsWithoutRef<
  typeof NavigationMenuPrimitive.Viewport
>;

export type NavigationMenuSubProps = ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Sub>;

const variantStyles: Record<NavigationMenuVariant, string> = {
  plain: 'zy-navigation-menu--plain',
  subtle: 'zy-navigation-menu--subtle',
  framed: 'zy-navigation-menu--framed',
};

const sizeStyles: Record<NavigationMenuSize, string> = {
  sm: 'zy-navigation-menu--sm',
  md: 'zy-navigation-menu--md',
  lg: 'zy-navigation-menu--lg',
};

const densityStyles: Record<NonNullable<NavigationMenuListProps['density']>, string> = {
  compact: 'zy-navigation-menu__list--compact',
  comfortable: 'zy-navigation-menu__list--comfortable',
};

export const NavigationMenu = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuProps
>(({ variant = 'plain', size = 'md', className = '', ...rest }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cx('zy-navigation-menu', variantStyles[variant], sizeStyles[size], className)}
    {...rest}
  />
));
NavigationMenu.displayName = 'NavigationMenu';

export const NavigationMenuSub = NavigationMenuPrimitive.Sub;

export const NavigationMenuList = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.List>,
  NavigationMenuListProps
>(({ density = 'comfortable', className = '', ...rest }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cx('zy-navigation-menu__list', densityStyles[density], className)}
    {...rest}
  />
));
NavigationMenuList.displayName = 'NavigationMenuList';

export const NavigationMenuItem = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Item>,
  NavigationMenuItemProps
>(({ className = '', ...rest }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cx('zy-navigation-menu__item', className)}
    {...rest}
  />
));
NavigationMenuItem.displayName = 'NavigationMenuItem';

export const NavigationMenuTrigger = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(({ showChevron = true, className = '', children, ...rest }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cx('zy-navigation-menu__trigger', className)}
    {...rest}
  >
    {children}
    {showChevron && <span className="zy-navigation-menu__trigger-chevron" aria-hidden="true" />}
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

export const NavigationMenuContent = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentProps
>(({ className = '', ...rest }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cx('zy-navigation-menu__content', className)}
    {...rest}
  />
));
NavigationMenuContent.displayName = 'NavigationMenuContent';

export const NavigationMenuLink = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Link>,
  NavigationMenuLinkProps
>(({ className = '', ...rest }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    className={cx('zy-navigation-menu__link', className)}
    {...rest}
  />
));
NavigationMenuLink.displayName = 'NavigationMenuLink';

export const NavigationMenuIndicator = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Indicator>,
  NavigationMenuIndicatorProps
>(({ children, className = '', ...rest }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cx('zy-navigation-menu__indicator', className)}
    {...rest}
  >
    {children ?? <span className="zy-navigation-menu__indicator-mark" />}
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = 'NavigationMenuIndicator';

export const NavigationMenuViewport = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Viewport>,
  NavigationMenuViewportProps
>(({ className = '', ...rest }, ref) => (
  <NavigationMenuPrimitive.Viewport
    ref={ref}
    className={cx('zy-navigation-menu__viewport', className)}
    {...rest}
  />
));
NavigationMenuViewport.displayName = 'NavigationMenuViewport';
