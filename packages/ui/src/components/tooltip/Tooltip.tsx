import { forwardRef, type ComponentPropsWithoutRef, type ComponentPropsWithRef } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export type TooltipTone = 'neutral' | 'inverse';

export interface TooltipContentProps extends Omit<
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
  'trapFocus' | 'disableOutsidePointerEvents'
> {
  tone?: TooltipTone;
  showArrow?: boolean;
  portalProps?: ComponentPropsWithoutRef<typeof TooltipPrimitive.Portal>;
}

const toneStyles: Record<TooltipTone, string> = {
  neutral: 'zy-tooltip--neutral',
  inverse: 'zy-tooltip--inverse',
};

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipPortal = TooltipPrimitive.Portal;

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (
    {
      tone = 'inverse',
      showArrow = true,
      portalProps,
      sideOffset = 6,
      className = '',
      children,
      ...rest
    },
    ref,
  ) => (
    <TooltipPrimitive.Portal {...portalProps}>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={`zy-tooltip__content ${toneStyles[tone]} ${className}`.trim()}
        {...rest}
      >
        {children}
        {showArrow && <TooltipArrow />}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  ),
);
TooltipContent.displayName = 'TooltipContent';

export const TooltipArrow = forwardRef<
  SVGSVGElement,
  ComponentPropsWithRef<typeof TooltipPrimitive.Arrow>
>(({ className = '', ...rest }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={`zy-tooltip__arrow ${className}`.trim()}
    width={10}
    height={5}
    {...rest}
  />
));
TooltipArrow.displayName = 'TooltipArrow';
