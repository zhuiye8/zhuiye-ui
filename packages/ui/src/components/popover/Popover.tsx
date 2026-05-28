import { forwardRef, type ComponentPropsWithoutRef, type ComponentPropsWithRef } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export type PopoverSize = 'sm' | 'md' | 'lg';

export interface PopoverContentProps extends Omit<
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
  'trapFocus' | 'disableOutsidePointerEvents'
> {
  size?: PopoverSize;
  showArrow?: boolean;
  portalProps?: ComponentPropsWithoutRef<typeof PopoverPrimitive.Portal>;
}

const sizeStyles: Record<PopoverSize, string> = {
  sm: 'zy-popover--sm',
  md: 'zy-popover--md',
  lg: 'zy-popover--lg',
};

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverClose = PopoverPrimitive.Close;
export const PopoverPortal = PopoverPrimitive.Portal;

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    {
      size = 'md',
      showArrow = true,
      portalProps,
      sideOffset = 8,
      className = '',
      children,
      ...rest
    },
    ref,
  ) => (
    <PopoverPrimitive.Portal {...portalProps}>
      <PopoverPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={`zy-popover__content ${sizeStyles[size]} ${className}`.trim()}
        {...rest}
      >
        {children}
        {showArrow && <PopoverArrow />}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  ),
);
PopoverContent.displayName = 'PopoverContent';

export const PopoverArrow = forwardRef<
  SVGSVGElement,
  ComponentPropsWithRef<typeof PopoverPrimitive.Arrow>
>(({ className = '', ...rest }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={`zy-popover__arrow ${className}`.trim()}
    width={12}
    height={6}
    {...rest}
  />
));
PopoverArrow.displayName = 'PopoverArrow';

export const PopoverHeader = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={`zy-popover__header ${className}`.trim()} {...rest} />
  ),
);
PopoverHeader.displayName = 'PopoverHeader';

export const PopoverFooter = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={`zy-popover__footer ${className}`.trim()} {...rest} />
  ),
);
PopoverFooter.displayName = 'PopoverFooter';

export const PopoverTitle = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h3'>>(
  ({ className = '', ...rest }, ref) => (
    <h3 ref={ref} className={`zy-popover__title ${className}`.trim()} {...rest} />
  ),
);
PopoverTitle.displayName = 'PopoverTitle';

export const PopoverDescription = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<'p'>>(
  ({ className = '', ...rest }, ref) => (
    <p ref={ref} className={`zy-popover__description ${className}`.trim()} {...rest} />
  ),
);
PopoverDescription.displayName = 'PopoverDescription';
