import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ComponentRef,
} from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

export type HoverCardSize = 'sm' | 'md' | 'lg';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const sizeStyles: Record<HoverCardSize, string> = {
  sm: 'zy-hover-card--sm',
  md: 'zy-hover-card--md',
  lg: 'zy-hover-card--lg',
};

export interface HoverCardContentProps extends ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Content
> {
  size?: HoverCardSize;
  showArrow?: boolean;
  portalProps?: ComponentPropsWithoutRef<typeof HoverCardPrimitive.Portal>;
}

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardPortal = HoverCardPrimitive.Portal;

export const HoverCardTrigger = forwardRef<
  ComponentRef<typeof HoverCardPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>
>(({ className = '', ...rest }, ref) => (
  <HoverCardPrimitive.Trigger
    ref={ref}
    className={cx('zy-hover-card__trigger', className)}
    {...rest}
  />
));
HoverCardTrigger.displayName = 'HoverCardTrigger';

export const HoverCardContent = forwardRef<
  ComponentRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(
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
    <HoverCardPrimitive.Portal {...portalProps}>
      <HoverCardPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cx('zy-hover-card__content', sizeStyles[size], className)}
        {...rest}
      >
        {children}
        {showArrow && <HoverCardArrow />}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  ),
);
HoverCardContent.displayName = 'HoverCardContent';

export const HoverCardArrow = forwardRef<
  ComponentRef<typeof HoverCardPrimitive.Arrow>,
  ComponentPropsWithRef<typeof HoverCardPrimitive.Arrow>
>(({ className = '', ...rest }, ref) => (
  <HoverCardPrimitive.Arrow
    ref={ref}
    className={cx('zy-hover-card__arrow', className)}
    width={12}
    height={6}
    {...rest}
  />
));
HoverCardArrow.displayName = 'HoverCardArrow';

export const HoverCardHeader = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={cx('zy-hover-card__header', className)} {...rest} />
  ),
);
HoverCardHeader.displayName = 'HoverCardHeader';

export const HoverCardBody = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={cx('zy-hover-card__body', className)} {...rest} />
  ),
);
HoverCardBody.displayName = 'HoverCardBody';

export const HoverCardFooter = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={cx('zy-hover-card__footer', className)} {...rest} />
  ),
);
HoverCardFooter.displayName = 'HoverCardFooter';

export const HoverCardTitle = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h3'>>(
  ({ className = '', ...rest }, ref) => (
    <h3 ref={ref} className={cx('zy-hover-card__title', className)} {...rest} />
  ),
);
HoverCardTitle.displayName = 'HoverCardTitle';

export const HoverCardDescription = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<'p'>>(
  ({ className = '', ...rest }, ref) => (
    <p ref={ref} className={cx('zy-hover-card__description', className)} {...rest} />
  ),
);
HoverCardDescription.displayName = 'HoverCardDescription';
