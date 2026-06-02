import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export type SheetSide = 'top' | 'right' | 'bottom' | 'left';
export type SheetSize = 'sm' | 'md' | 'lg' | 'full';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface SheetContentProps extends Omit<
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
  'trapFocus' | 'disableOutsidePointerEvents'
> {
  side?: SheetSide;
  size?: SheetSize;
  showCloseButton?: boolean;
  overlayClassName?: string;
  portalProps?: ComponentPropsWithoutRef<typeof DialogPrimitive.Portal>;
}

export type SheetOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
export type SheetHeaderProps = ComponentPropsWithoutRef<'div'>;
export type SheetBodyProps = ComponentPropsWithoutRef<'div'>;
export type SheetFooterProps = ComponentPropsWithoutRef<'div'>;
export type SheetTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
export type SheetDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;

const sideStyles: Record<SheetSide, string> = {
  top: 'zy-sheet__content--top',
  right: 'zy-sheet__content--right',
  bottom: 'zy-sheet__content--bottom',
  left: 'zy-sheet__content--left',
};

const sizeStyles: Record<SheetSize, string> = {
  sm: 'zy-sheet--sm',
  md: 'zy-sheet--md',
  lg: 'zy-sheet--lg',
  full: 'zy-sheet--full',
};

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetPortal = DialogPrimitive.Portal;

export const SheetOverlay = forwardRef<HTMLDivElement, SheetOverlayProps>(
  ({ className = '', ...rest }, ref) => (
    <DialogPrimitive.Overlay ref={ref} className={cx('zy-sheet__overlay', className)} {...rest} />
  ),
);
SheetOverlay.displayName = 'SheetOverlay';

export const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>(
  (
    {
      side = 'right',
      size = 'md',
      showCloseButton = true,
      overlayClassName = '',
      portalProps,
      className = '',
      children,
      ...rest
    },
    ref,
  ) => (
    <DialogPrimitive.Portal {...portalProps}>
      <SheetOverlay className={overlayClassName}>
        <DialogPrimitive.Content
          ref={ref}
          data-side={side}
          className={cx('zy-sheet__content', sideStyles[side], sizeStyles[size], className)}
          {...rest}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close asChild>
              <button type="button" className="zy-sheet__close" aria-label="Close">
                <span className="zy-sheet__close-icon" aria-hidden="true" />
              </button>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </SheetOverlay>
    </DialogPrimitive.Portal>
  ),
);
SheetContent.displayName = 'SheetContent';

export const SheetHeader = forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={cx('zy-sheet__header', className)} {...rest} />
  ),
);
SheetHeader.displayName = 'SheetHeader';

export const SheetBody = forwardRef<HTMLDivElement, SheetBodyProps>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={cx('zy-sheet__body', className)} {...rest} />
  ),
);
SheetBody.displayName = 'SheetBody';

export const SheetFooter = forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={cx('zy-sheet__footer', className)} {...rest} />
  ),
);
SheetFooter.displayName = 'SheetFooter';

export const SheetTitle = forwardRef<HTMLHeadingElement, SheetTitleProps>(
  ({ className = '', ...rest }, ref) => (
    <DialogPrimitive.Title ref={ref} className={cx('zy-sheet__title', className)} {...rest} />
  ),
);
SheetTitle.displayName = 'SheetTitle';

export const SheetDescription = forwardRef<HTMLParagraphElement, SheetDescriptionProps>(
  ({ className = '', ...rest }, ref) => (
    <DialogPrimitive.Description
      ref={ref}
      className={cx('zy-sheet__description', className)}
      {...rest}
    />
  ),
);
SheetDescription.displayName = 'SheetDescription';
