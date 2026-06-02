import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ComponentRef,
  type ReactNode,
} from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

export type MenubarVariant = 'plain' | 'subtle' | 'framed';
export type MenubarSize = 'sm' | 'md' | 'lg';
export type MenubarItemTone = 'default' | 'danger';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const variantStyles: Record<MenubarVariant, string> = {
  plain: 'zy-menubar--plain',
  subtle: 'zy-menubar--subtle',
  framed: 'zy-menubar--framed',
};

const sizeStyles: Record<MenubarSize, string> = {
  sm: 'zy-menubar--sm',
  md: 'zy-menubar--md',
  lg: 'zy-menubar--lg',
};

export interface MenubarProps extends ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> {
  variant?: MenubarVariant;
  size?: MenubarSize;
}

export interface MenubarMenuProps {
  value?: string;
  children?: ReactNode;
}

export interface MenubarTriggerProps extends ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Trigger
> {
  showChevron?: boolean;
}

export interface MenubarContentProps extends ComponentPropsWithoutRef<
  typeof MenubarPrimitive.Content
> {
  showArrow?: boolean;
  portalProps?: ComponentPropsWithoutRef<typeof MenubarPrimitive.Portal>;
}

export interface MenubarSubContentProps extends ComponentPropsWithoutRef<
  typeof MenubarPrimitive.SubContent
> {
  showArrow?: boolean;
  portalProps?: ComponentPropsWithoutRef<typeof MenubarPrimitive.Portal>;
}

export const Menubar = forwardRef<ComponentRef<typeof MenubarPrimitive.Root>, MenubarProps>(
  ({ variant = 'plain', size = 'md', className = '', ...rest }, ref) => (
    <MenubarPrimitive.Root
      ref={ref}
      className={cx('zy-menubar', variantStyles[variant], sizeStyles[size], className)}
      {...rest}
    />
  ),
);
Menubar.displayName = 'Menubar';

export function MenubarMenu(props: MenubarMenuProps) {
  return <MenubarPrimitive.Menu {...props} />;
}
MenubarMenu.displayName = 'MenubarMenu';

export const MenubarPortal = MenubarPrimitive.Portal;
export const MenubarGroup = MenubarPrimitive.Group;
export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;
export const MenubarSub = MenubarPrimitive.Sub;

export const MenubarTrigger = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerProps
>(({ showChevron = false, className = '', children, ...rest }, ref) => (
  <MenubarPrimitive.Trigger ref={ref} className={cx('zy-menubar__trigger', className)} {...rest}>
    {children}
    {showChevron && <span className="zy-menubar__trigger-chevron" aria-hidden="true" />}
  </MenubarPrimitive.Trigger>
));
MenubarTrigger.displayName = 'MenubarTrigger';

export const MenubarContent = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Content>,
  MenubarContentProps
>(({ showArrow = true, portalProps, sideOffset = 6, className = '', children, ...rest }, ref) => (
  <MenubarPrimitive.Portal {...portalProps}>
    <MenubarPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cx('zy-menubar__content', className)}
      {...rest}
    >
      <div className="zy-menubar__viewport">{children}</div>
      {showArrow && <MenubarArrow />}
    </MenubarPrimitive.Content>
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = 'MenubarContent';

export const MenubarItem = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Item>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
    tone?: MenubarItemTone;
  }
>(({ className = '', inset, tone = 'default', ...rest }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cx(
      'zy-menubar__item',
      inset && 'zy-menubar__item--inset',
      tone === 'danger' && 'zy-menubar__item--danger',
      className,
    )}
    {...rest}
  />
));
MenubarItem.displayName = 'MenubarItem';

export const MenubarLabel = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Label>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className = '', inset, ...rest }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cx('zy-menubar__label', inset && 'zy-menubar__label--inset', className)}
    {...rest}
  />
));
MenubarLabel.displayName = 'MenubarLabel';

export const MenubarSeparator = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className = '', ...rest }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cx('zy-menubar__separator', className)}
    {...rest}
  />
));
MenubarSeparator.displayName = 'MenubarSeparator';

export const MenubarCheckboxItem = forwardRef<
  ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className = '', children, ...rest }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cx('zy-menubar__item', 'zy-menubar__checkbox-item', className)}
    {...rest}
  >
    <span className="zy-menubar__item-indicator" aria-hidden="true" />
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = 'MenubarCheckboxItem';

export const MenubarRadioItem = forwardRef<
  ComponentRef<typeof MenubarPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className = '', children, ...rest }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cx('zy-menubar__item', 'zy-menubar__radio-item', className)}
    {...rest}
  >
    <span
      className="zy-menubar__item-indicator zy-menubar__item-indicator--radio"
      aria-hidden="true"
    />
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = 'MenubarRadioItem';

export const MenubarItemIndicator = forwardRef<
  ComponentRef<typeof MenubarPrimitive.ItemIndicator>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.ItemIndicator>
>(({ className = '', ...rest }, ref) => (
  <MenubarPrimitive.ItemIndicator
    ref={ref}
    className={cx('zy-menubar__item-indicator', className)}
    {...rest}
  />
));
MenubarItemIndicator.displayName = 'MenubarItemIndicator';

export const MenubarSubTrigger = forwardRef<
  ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className = '', inset, children, ...rest }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cx(
      'zy-menubar__item',
      'zy-menubar__sub-trigger',
      inset && 'zy-menubar__item--inset',
      className,
    )}
    {...rest}
  >
    {children}
    <span className="zy-menubar__chevron" aria-hidden="true" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = 'MenubarSubTrigger';

export const MenubarSubContent = forwardRef<
  ComponentRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContentProps
>(({ showArrow = true, portalProps, sideOffset = 6, className = '', children, ...rest }, ref) => (
  <MenubarPrimitive.Portal {...portalProps}>
    <MenubarPrimitive.SubContent
      ref={ref}
      sideOffset={sideOffset}
      className={cx('zy-menubar__content', className)}
      {...rest}
    >
      <div className="zy-menubar__viewport">{children}</div>
      {showArrow && <MenubarArrow />}
    </MenubarPrimitive.SubContent>
  </MenubarPrimitive.Portal>
));
MenubarSubContent.displayName = 'MenubarSubContent';

export const MenubarArrow = forwardRef<
  ComponentRef<typeof MenubarPrimitive.Arrow>,
  ComponentPropsWithRef<typeof MenubarPrimitive.Arrow>
>(({ className = '', ...rest }, ref) => (
  <MenubarPrimitive.Arrow
    ref={ref}
    className={cx('zy-menubar__arrow', className)}
    width={12}
    height={6}
    {...rest}
  />
));
MenubarArrow.displayName = 'MenubarArrow';

export const MenubarShortcut = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
  ({ className = '', ...rest }, ref) => (
    <span ref={ref} className={cx('zy-menubar__shortcut', className)} {...rest} />
  ),
);
MenubarShortcut.displayName = 'MenubarShortcut';
