import { forwardRef, type HTMLAttributes } from 'react';

export type FormMessageTone = 'neutral' | 'danger' | 'success' | 'warning';

export interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Visual tone of the message */
  tone?: FormMessageTone;
}

export const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ tone = 'neutral', className = '', ...rest }, ref) => {
    const classes = ['zy-form-message', `zy-form-message--${tone}`, className]
      .filter(Boolean)
      .join(' ');

    return <p ref={ref} className={classes} {...rest} />;
  },
);

FormMessage.displayName = 'FormMessage';
