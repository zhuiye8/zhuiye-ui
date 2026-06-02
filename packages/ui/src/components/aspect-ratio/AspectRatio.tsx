import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

export type AspectRatioVariant = 'plain' | 'surface' | 'framed';
export type AspectRatioRadius = 'none' | 'sm' | 'md' | 'lg';
export type AspectRatioMediaFit = 'cover' | 'contain' | 'fill';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const variantStyles: Record<AspectRatioVariant, string> = {
  plain: 'zy-aspect-ratio--plain',
  surface: 'zy-aspect-ratio--surface',
  framed: 'zy-aspect-ratio--framed',
};

const radiusStyles: Record<AspectRatioRadius, string> = {
  none: 'zy-aspect-ratio--radius-none',
  sm: 'zy-aspect-ratio--radius-sm',
  md: 'zy-aspect-ratio--radius-md',
  lg: 'zy-aspect-ratio--radius-lg',
};

const fitStyles: Record<AspectRatioMediaFit, string> = {
  cover: 'zy-aspect-ratio__media--cover',
  contain: 'zy-aspect-ratio__media--contain',
  fill: 'zy-aspect-ratio__media--fill',
};

export interface AspectRatioProps extends ComponentPropsWithoutRef<
  typeof AspectRatioPrimitive.Root
> {
  variant?: AspectRatioVariant;
  radius?: AspectRatioRadius;
}

export interface AspectRatioMediaProps extends ComponentPropsWithoutRef<'div'> {
  fit?: AspectRatioMediaFit;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (
    { variant = 'surface', radius = 'md', className = '', ratio, asChild, children, ...rest },
    ref,
  ) => (
    <div
      ref={ref}
      className={cx('zy-aspect-ratio', variantStyles[variant], radiusStyles[radius], className)}
      {...rest}
    >
      <AspectRatioPrimitive.Root ratio={ratio} asChild={asChild} className="zy-aspect-ratio__root">
        {children}
      </AspectRatioPrimitive.Root>
    </div>
  ),
);
AspectRatio.displayName = 'AspectRatio';

export const AspectRatioMedia = forwardRef<HTMLDivElement, AspectRatioMediaProps>(
  ({ fit = 'cover', className = '', ...rest }, ref) => (
    <div ref={ref} className={cx('zy-aspect-ratio__media', fitStyles[fit], className)} {...rest} />
  ),
);
AspectRatioMedia.displayName = 'AspectRatioMedia';
