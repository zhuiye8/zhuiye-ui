import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ComponentRef,
} from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export type DropdownMenuItemTone = 'default' | 'danger';

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface DropdownMenuContentProps extends Omit<
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>,
  'trapFocus' | 'disableOutsidePointerEvents'
> {
  showArrow?: boolean;
  portalProps?: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>;
}

export const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ showArrow = true, portalProps, sideOffset = 6, className = '', children, ...rest }, ref) => (
    <DropdownMenuPrimitive.Portal {...portalProps}>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={`zy-dropdown-menu__content ${className}`.trim()}
        {...rest}
      >
        <div className="zy-dropdown-menu__viewport">{children}</div>
        {showArrow && <DropdownMenuArrow />}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  ),
);
DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    tone?: DropdownMenuItemTone;
  }
>(({ className = '', inset, tone = 'default', ...rest }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cx(
      'zy-dropdown-menu__item',
      inset && 'zy-dropdown-menu__item--inset',
      tone === 'danger' && 'zy-dropdown-menu__item--danger',
      className,
    )}
    {...rest}
  />
));
DropdownMenuItem.displayName = 'DropdownMenuItem';

export const DropdownMenuLabel = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className = '', inset, ...rest }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cx('zy-dropdown-menu__label', inset && 'zy-dropdown-menu__label--inset', className)}
    {...rest}
  />
));
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export const DropdownMenuSeparator = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className = '', ...rest }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cx('zy-dropdown-menu__separator', className)}
    {...rest}
  />
));
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export const DropdownMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className = '', children, ...rest }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={`zy-dropdown-menu__item zy-dropdown-menu__checkbox-item ${className}`.trim()}
    {...rest}
  >
    <span className="zy-dropdown-menu__item-indicator" aria-hidden="true" />
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

export const DropdownMenuRadioItem = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className = '', children, ...rest }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={`zy-dropdown-menu__item zy-dropdown-menu__radio-item ${className}`.trim()}
    {...rest}
  >
    <span
      className="zy-dropdown-menu__item-indicator zy-dropdown-menu__item-indicator--radio"
      aria-hidden="true"
    />
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

export const DropdownMenuItemIndicator = forwardRef<
  ComponentRef<typeof DropdownMenuPrimitive.ItemIndicator>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.ItemIndicator>
>(({ className = '', ...rest }, ref) => (
  <DropdownMenuPrimitive.ItemIndicator
    ref={ref}
    className={cx('zy-dropdown-menu__item-indicator', className)}
    {...rest}
  />
));
DropdownMenuItemIndicator.displayName = 'DropdownMenuItemIndicator';

export interface DropdownMenuSubContentProps extends Omit<
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>,
  'trapFocus' | 'disableOutsidePointerEvents'
> {
  showArrow?: boolean;
  portalProps?: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Portal>;
}

export const DropdownMenuSubTrigger = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className = '', inset, children, ...rest }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={`zy-dropdown-menu__item zy-dropdown-menu__sub-trigger${inset ? ' zy-dropdown-menu__item--inset' : ''} ${className}`.trim()}
    {...rest}
  >
    {children}
    <span className="zy-dropdown-menu__chevron" aria-hidden="true" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

export const DropdownMenuSubContent = forwardRef<HTMLDivElement, DropdownMenuSubContentProps>(
  ({ showArrow = true, portalProps, sideOffset = 6, className = '', children, ...rest }, ref) => (
    <DropdownMenuPrimitive.Portal {...portalProps}>
      <DropdownMenuPrimitive.SubContent
        ref={ref}
        sideOffset={sideOffset}
        className={`zy-dropdown-menu__content ${className}`.trim()}
        {...rest}
      >
        <div className="zy-dropdown-menu__viewport">{children}</div>
        {showArrow && <DropdownMenuArrow />}
      </DropdownMenuPrimitive.SubContent>
    </DropdownMenuPrimitive.Portal>
  ),
);
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';

export const DropdownMenuArrow = forwardRef<
  SVGSVGElement,
  ComponentPropsWithRef<typeof DropdownMenuPrimitive.Arrow>
>(({ className = '', ...rest }, ref) => (
  <DropdownMenuPrimitive.Arrow
    ref={ref}
    className={`zy-dropdown-menu__arrow ${className}`.trim()}
    width={12}
    height={6}
    {...rest}
  />
));
DropdownMenuArrow.displayName = 'DropdownMenuArrow';

export const DropdownMenuShortcut = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
  ({ className = '', ...rest }, ref) => (
    <span ref={ref} className={`zy-dropdown-menu__shortcut ${className}`.trim()} {...rest} />
  ),
);
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
