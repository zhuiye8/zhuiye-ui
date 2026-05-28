import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

export type IconSlotSize = 'sm' | 'md' | 'lg';

type IconSlotBaseProps = Omit<HTMLAttributes<HTMLSpanElement>, 'children'> & {
  /** Icon content */
  children: ReactNode;
  /** Size of the icon slot */
  size?: IconSlotSize;
};

export type IconSlotDecorativeProps = IconSlotBaseProps & {
  /** When true, hides from screen readers */
  decorative?: true;
  label?: string;
};

export type IconSlotAccessibleProps = IconSlotBaseProps & {
  /** When false, exposes to screen readers */
  decorative: false;
  /** Accessible label when not decorative */
  label: string;
};

export type IconSlotProps = IconSlotDecorativeProps | IconSlotAccessibleProps;

const sizeMap: Record<IconSlotSize, string> = {
  sm: 'zy-icon-slot--sm',
  md: 'zy-icon-slot--md',
  lg: 'zy-icon-slot--lg',
};

export const IconSlot = forwardRef<HTMLSpanElement, IconSlotProps>(
  ({ children, size = 'md', decorative = true, label, className = '', ...rest }, ref) => {
    const classes = ['zy-icon-slot', sizeMap[size], className].filter(Boolean).join(' ');

    if (decorative) {
      return (
        <span ref={ref} className={classes} aria-hidden="true" {...rest}>
          {children}
        </span>
      );
    }

    return (
      <span ref={ref} className={classes} role="img" aria-label={label} {...rest}>
        {children}
      </span>
    );
  },
);

IconSlot.displayName = 'IconSlot';
