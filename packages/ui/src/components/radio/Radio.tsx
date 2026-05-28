import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** The value of the radio option */
  value: string;
  /** Label text rendered beside the radio */
  label?: ReactNode;
  /** Helper text displayed below the radio */
  description?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      value,
      label,
      description,
      disabled,
      className = '',
      id,
      name,
      checked,
      onChange,
      'aria-describedby': consumerDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const resolvedId = id ?? autoId;
    const descriptionId = description ? `${resolvedId}-description` : undefined;
    const describedBy = [consumerDescribedBy, descriptionId].filter(Boolean).join(' ') || undefined;

    const wrapperClasses = ['zy-radio', disabled ? 'zy-radio--disabled' : '', className]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClasses}>
        <label className="zy-radio__label" htmlFor={resolvedId}>
          <span className="zy-radio__control">
            <input
              ref={ref}
              type="radio"
              id={resolvedId}
              name={name}
              value={value}
              checked={checked}
              onChange={onChange}
              disabled={disabled}
              aria-describedby={describedBy}
              className="zy-radio__input"
              {...rest}
            />
            <span className="zy-radio__circle" aria-hidden="true" />
          </span>
          {label && <span className="zy-radio__text">{label}</span>}
        </label>
        {description && (
          <p className="zy-radio__description" id={descriptionId}>
            {description}
          </p>
        )}
      </div>
    );
  },
);

Radio.displayName = 'Radio';
