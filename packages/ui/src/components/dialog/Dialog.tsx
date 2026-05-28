import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export type DialogSize = 'sm' | 'md' | 'lg';

export interface DialogContentProps extends Omit<
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
  'trapFocus' | 'disableOutsidePointerEvents'
> {
  /** Size of the dialog panel */
  size?: DialogSize;
  /** Whether to show the close button in the top-right corner */
  showCloseButton?: boolean;
  /** Additional class name for the overlay */
  overlayClassName?: string;
}

const sizeStyles: Record<DialogSize, string> = {
  sm: 'zy-dialog--sm',
  md: 'zy-dialog--md',
  lg: 'zy-dialog--lg',
};

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogPortal = DialogPrimitive.Portal;

export const DialogOverlay = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className = '', ...rest }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={`zy-dialog__overlay ${className}`.trim()}
    {...rest}
  />
));
DialogOverlay.displayName = 'DialogOverlay';

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (
    {
      size = 'md',
      showCloseButton = true,
      overlayClassName = '',
      className = '',
      children,
      ...rest
    },
    ref,
  ) => (
    <DialogPortal>
      <DialogOverlay className={overlayClassName}>
        <DialogPrimitive.Content
          ref={ref}
          className={`zy-dialog__content ${sizeStyles[size]} ${className}`.trim()}
          {...rest}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close asChild>
              <button type="button" className="zy-dialog__close" aria-label="Close">
                <span className="zy-dialog__close-icon" aria-hidden="true" />
              </button>
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  ),
);
DialogContent.displayName = 'DialogContent';

export const DialogHeader = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={`zy-dialog__header ${className}`.trim()} {...rest} />
  ),
);
DialogHeader.displayName = 'DialogHeader';

export const DialogFooter = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={`zy-dialog__footer ${className}`.trim()} {...rest} />
  ),
);
DialogFooter.displayName = 'DialogFooter';

export const DialogTitle = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className = '', ...rest }, ref) => (
  <DialogPrimitive.Title ref={ref} className={`zy-dialog__title ${className}`.trim()} {...rest} />
));
DialogTitle.displayName = 'DialogTitle';

export const DialogDescription = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className = '', ...rest }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={`zy-dialog__description ${className}`.trim()}
    {...rest}
  />
));
DialogDescription.displayName = 'DialogDescription';
