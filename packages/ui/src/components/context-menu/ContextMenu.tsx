import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ComponentRef,
} from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

export type ContextMenuItemTone = 'default' | 'danger';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuPortal = ContextMenuPrimitive.Portal;
export const ContextMenuGroup = ContextMenuPrimitive.Group;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuSub = ContextMenuPrimitive.Sub;

export const ContextMenuTrigger = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger>
>(({ className = '', ...rest }, ref) => (
  <ContextMenuPrimitive.Trigger
    ref={ref}
    className={cx('zy-context-menu__trigger', className)}
    {...rest}
  />
));
ContextMenuTrigger.displayName = 'ContextMenuTrigger';

export interface ContextMenuContentProps extends ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Content
> {
  showArrow?: boolean;
  portalProps?: ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Portal>;
}

export const ContextMenuContent = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentProps
>(({ showArrow = false, portalProps, className = '', children, ...rest }, ref) => (
  <ContextMenuPrimitive.Portal {...portalProps}>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cx('zy-context-menu__content', className)}
      {...rest}
    >
      <div className="zy-context-menu__viewport">{children}</div>
      {showArrow && <ContextMenuArrow />}
    </ContextMenuPrimitive.Content>
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = 'ContextMenuContent';

export const ContextMenuItem = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
    tone?: ContextMenuItemTone;
  }
>(({ className = '', inset, tone = 'default', ...rest }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cx(
      'zy-context-menu__item',
      inset && 'zy-context-menu__item--inset',
      tone === 'danger' && 'zy-context-menu__item--danger',
      className,
    )}
    {...rest}
  />
));
ContextMenuItem.displayName = 'ContextMenuItem';

export const ContextMenuLabel = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.Label>,
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className = '', inset, ...rest }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cx('zy-context-menu__label', inset && 'zy-context-menu__label--inset', className)}
    {...rest}
  />
));
ContextMenuLabel.displayName = 'ContextMenuLabel';

export const ContextMenuSeparator = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className = '', ...rest }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cx('zy-context-menu__separator', className)}
    {...rest}
  />
));
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

export const ContextMenuCheckboxItem = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className = '', children, ...rest }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cx('zy-context-menu__item', 'zy-context-menu__checkbox-item', className)}
    {...rest}
  >
    <span className="zy-context-menu__item-indicator" aria-hidden="true" />
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

export const ContextMenuRadioItem = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.RadioItem>,
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className = '', children, ...rest }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cx('zy-context-menu__item', 'zy-context-menu__radio-item', className)}
    {...rest}
  >
    <span
      className="zy-context-menu__item-indicator zy-context-menu__item-indicator--radio"
      aria-hidden="true"
    />
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

export const ContextMenuItemIndicator = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.ItemIndicator>,
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.ItemIndicator>
>(({ className = '', ...rest }, ref) => (
  <ContextMenuPrimitive.ItemIndicator
    ref={ref}
    className={cx('zy-context-menu__item-indicator', className)}
    {...rest}
  />
));
ContextMenuItemIndicator.displayName = 'ContextMenuItemIndicator';

export interface ContextMenuSubContentProps extends ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.SubContent
> {
  showArrow?: boolean;
  portalProps?: ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Portal>;
}

export const ContextMenuSubTrigger = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className = '', inset, children, ...rest }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cx(
      'zy-context-menu__item',
      'zy-context-menu__sub-trigger',
      inset && 'zy-context-menu__item--inset',
      className,
    )}
    {...rest}
  >
    {children}
    <span className="zy-context-menu__chevron" aria-hidden="true" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

export const ContextMenuSubContent = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentProps
>(({ showArrow = false, portalProps, sideOffset = 6, className = '', children, ...rest }, ref) => (
  <ContextMenuPrimitive.Portal {...portalProps}>
    <ContextMenuPrimitive.SubContent
      ref={ref}
      sideOffset={sideOffset}
      className={cx('zy-context-menu__content', className)}
      {...rest}
    >
      <div className="zy-context-menu__viewport">{children}</div>
      {showArrow && <ContextMenuArrow />}
    </ContextMenuPrimitive.SubContent>
  </ContextMenuPrimitive.Portal>
));
ContextMenuSubContent.displayName = 'ContextMenuSubContent';

export const ContextMenuArrow = forwardRef<
  ComponentRef<typeof ContextMenuPrimitive.Arrow>,
  ComponentPropsWithRef<typeof ContextMenuPrimitive.Arrow>
>(({ className = '', ...rest }, ref) => (
  <ContextMenuPrimitive.Arrow
    ref={ref}
    className={cx('zy-context-menu__arrow', className)}
    width={12}
    height={6}
    {...rest}
  />
));
ContextMenuArrow.displayName = 'ContextMenuArrow';

export const ContextMenuShortcut = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
  ({ className = '', ...rest }, ref) => (
    <span ref={ref} className={cx('zy-context-menu__shortcut', className)} {...rest} />
  ),
);
ContextMenuShortcut.displayName = 'ContextMenuShortcut';
