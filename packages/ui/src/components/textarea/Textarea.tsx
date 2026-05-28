import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';

export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Whether the textarea is in an invalid state */
  invalid?: boolean;
  /** Error message to display below the textarea */
  errorMessage?: string;
  /** Whether the textarea should take full width */
  fullWidth?: boolean;
  /** Control the resize behavior */
  resize?: TextareaResize;
}

const resizeStyles: Record<TextareaResize, string> = {
  none: 'zy-textarea--resize-none',
  vertical: 'zy-textarea--resize-vertical',
  horizontal: 'zy-textarea--resize-horizontal',
  both: 'zy-textarea--resize-both',
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      invalid = false,
      errorMessage,
      fullWidth = false,
      resize = 'vertical',
      disabled,
      className = '',
      id,
      'aria-describedby': consumerDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const classes = [
      'zy-textarea',
      fullWidth ? 'zy-textarea--full' : '',
      invalid ? 'zy-textarea--invalid' : '',
      disabled ? 'zy-textarea--disabled' : '',
      resizeStyles[resize],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const autoId = useId();
    const resolvedId = id ?? autoId;
    const errorId = errorMessage ? `${resolvedId}-error` : undefined;
    const describedBy = [consumerDescribedBy, errorId].filter(Boolean).join(' ') || undefined;

    return (
      <div className={fullWidth ? 'zy-textarea-wrapper--full' : 'zy-textarea-wrapper'}>
        <textarea
          ref={ref}
          className={classes}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          id={resolvedId}
          {...rest}
        />
        {errorMessage && (
          <p className="zy-textarea__error" id={errorId} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
