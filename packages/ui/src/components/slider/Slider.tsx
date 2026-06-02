import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

export type SliderSize = 'sm' | 'md' | 'lg';
export type SliderTone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface SliderProps extends ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  size?: SliderSize;
  tone?: SliderTone;
  fullWidth?: boolean;
}

export type SliderTrackProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Track>;
export type SliderRangeProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Range>;
export type SliderThumbProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>;

const sizeStyles: Record<SliderSize, string> = {
  sm: 'zy-slider--sm',
  md: 'zy-slider--md',
  lg: 'zy-slider--lg',
};

const toneStyles: Record<SliderTone, string> = {
  primary: 'zy-slider--primary',
  success: 'zy-slider--success',
  warning: 'zy-slider--warning',
  danger: 'zy-slider--danger',
  neutral: 'zy-slider--neutral',
};

export const Slider = forwardRef<ComponentRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ size = 'md', tone = 'primary', fullWidth, className = '', ...rest }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cx(
        'zy-slider',
        sizeStyles[size],
        toneStyles[tone],
        fullWidth && 'zy-slider--full',
        className,
      )}
      {...rest}
    />
  ),
);
Slider.displayName = 'Slider';

export const SliderTrack = forwardRef<ComponentRef<typeof SliderPrimitive.Track>, SliderTrackProps>(
  ({ className = '', ...rest }, ref) => (
    <SliderPrimitive.Track ref={ref} className={cx('zy-slider__track', className)} {...rest} />
  ),
);
SliderTrack.displayName = 'SliderTrack';

export const SliderRange = forwardRef<ComponentRef<typeof SliderPrimitive.Range>, SliderRangeProps>(
  ({ className = '', ...rest }, ref) => (
    <SliderPrimitive.Range ref={ref} className={cx('zy-slider__range', className)} {...rest} />
  ),
);
SliderRange.displayName = 'SliderRange';

export const SliderThumb = forwardRef<ComponentRef<typeof SliderPrimitive.Thumb>, SliderThumbProps>(
  ({ className = '', ...rest }, ref) => (
    <SliderPrimitive.Thumb ref={ref} className={cx('zy-slider__thumb', className)} {...rest} />
  ),
);
SliderThumb.displayName = 'SliderThumb';
