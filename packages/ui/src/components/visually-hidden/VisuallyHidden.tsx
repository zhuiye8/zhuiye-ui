import { forwardRef, type HTMLAttributes } from 'react';

export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>;

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className = '', ...rest }, ref) => {
    const classes = ['zy-visually-hidden', className].filter(Boolean).join(' ');

    return <span ref={ref} className={classes} {...rest} />;
  },
);

VisuallyHidden.displayName = 'VisuallyHidden';
