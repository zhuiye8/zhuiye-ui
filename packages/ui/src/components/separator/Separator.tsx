import { forwardRef, type Ref, type HTMLAttributes } from 'react';

export type SeparatorOrientation = 'horizontal' | 'vertical';

export type SeparatorElement = HTMLHRElement | HTMLDivElement;

export interface SeparatorProps extends HTMLAttributes<SeparatorElement> {
  /** Layout orientation */
  orientation?: SeparatorOrientation;
  /** When true, hides from assistive technology */
  decorative?: boolean;
}

export const Separator = forwardRef<SeparatorElement, SeparatorProps>(
  ({ orientation = 'horizontal', decorative = true, className = '', ...rest }, ref) => {
    const classes = [
      'zy-separator',
      orientation === 'vertical' ? 'zy-separator--vertical' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    if (decorative) {
      if (orientation === 'horizontal') {
        return (
          <hr ref={ref as Ref<HTMLHRElement>} className={classes} aria-hidden="true" {...rest} />
        );
      }
      return (
        <div
          ref={ref as Ref<HTMLDivElement>}
          className={classes}
          aria-hidden="true"
          role="presentation"
          {...rest}
        />
      );
    }

    if (orientation === 'horizontal') {
      return <hr ref={ref as Ref<HTMLHRElement>} className={classes} role="separator" {...rest} />;
    }

    return (
      <div
        ref={ref as Ref<HTMLDivElement>}
        className={classes}
        role="separator"
        aria-orientation="vertical"
        {...rest}
      />
    );
  },
);

Separator.displayName = 'Separator';
