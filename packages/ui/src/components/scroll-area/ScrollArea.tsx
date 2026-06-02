import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export type ScrollAreaVariant = 'plain' | 'surface' | 'framed';
export type ScrollAreaSize = 'sm' | 'md' | 'lg' | 'auto';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const variantStyles: Record<ScrollAreaVariant, string> = {
  plain: 'zy-scroll-area--plain',
  surface: 'zy-scroll-area--surface',
  framed: 'zy-scroll-area--framed',
};

const sizeStyles: Record<ScrollAreaSize, string> = {
  sm: 'zy-scroll-area--sm',
  md: 'zy-scroll-area--md',
  lg: 'zy-scroll-area--lg',
  auto: 'zy-scroll-area--auto',
};

export interface ScrollAreaProps extends ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  variant?: ScrollAreaVariant;
  size?: ScrollAreaSize;
}

export type ScrollAreaViewportProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>;
export type ScrollAreaScrollbarProps = ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Scrollbar
>;
export type ScrollAreaThumbProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Thumb>;
export type ScrollAreaCornerProps = ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Corner>;

export const ScrollArea = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ variant = 'plain', size = 'auto', className = '', ...rest }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cx('zy-scroll-area', variantStyles[variant], sizeStyles[size], className)}
    {...rest}
  />
));
ScrollArea.displayName = 'ScrollArea';

export const ScrollAreaViewport = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.Viewport>,
  ScrollAreaViewportProps
>(({ className = '', ...rest }, ref) => (
  <ScrollAreaPrimitive.Viewport
    ref={ref}
    className={cx('zy-scroll-area__viewport', className)}
    {...rest}
  />
));
ScrollAreaViewport.displayName = 'ScrollAreaViewport';

export const ScrollAreaScrollbar = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.Scrollbar>,
  ScrollAreaScrollbarProps
>(({ className = '', orientation = 'vertical', ...rest }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cx('zy-scroll-area__scrollbar', className)}
    {...rest}
  />
));
ScrollAreaScrollbar.displayName = 'ScrollAreaScrollbar';

export const ScrollAreaThumb = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.Thumb>,
  ScrollAreaThumbProps
>(({ className = '', ...rest }, ref) => (
  <ScrollAreaPrimitive.Thumb
    ref={ref}
    className={cx('zy-scroll-area__thumb', className)}
    {...rest}
  />
));
ScrollAreaThumb.displayName = 'ScrollAreaThumb';

export const ScrollAreaCorner = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.Corner>,
  ScrollAreaCornerProps
>(({ className = '', ...rest }, ref) => (
  <ScrollAreaPrimitive.Corner
    ref={ref}
    className={cx('zy-scroll-area__corner', className)}
    {...rest}
  />
));
ScrollAreaCorner.displayName = 'ScrollAreaCorner';
