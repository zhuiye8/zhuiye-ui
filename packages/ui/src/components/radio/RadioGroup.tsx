import {
  forwardRef,
  useId,
  useCallback,
  Children,
  type HTMLAttributes,
  type ReactNode,
  type ReactElement,
  isValidElement,
  cloneElement,
} from 'react';
import { Radio, type RadioProps } from './Radio';

export type RadioGroupOrientation = 'horizontal' | 'vertical';

export interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Label for the radio group */
  label?: ReactNode;
  /** Helper text displayed below the group */
  description?: ReactNode;
  /** Error message displayed below the group */
  errorMessage?: ReactNode;
  /** Whether the group is in an invalid state */
  invalid?: boolean;
  /** Whether the radio group is disabled */
  disabled?: boolean;
  /** Layout orientation */
  orientation?: RadioGroupOrientation;
  /** The name attribute for all radio inputs */
  name?: string;
  /** The currently selected value (controlled) */
  value?: string;
  /** The default selected value (uncontrolled) */
  defaultValue?: string;
  /** Callback when the selected value changes */
  onValueChange?: (value: string) => void;
  /** Whether the radio group should take full width */
  fullWidth?: boolean;
  /** Radio children */
  children: ReactNode;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      label,
      description,
      errorMessage,
      invalid = false,
      disabled = false,
      orientation = 'vertical',
      name,
      value,
      defaultValue,
      onValueChange,
      fullWidth = false,
      className = '',
      children,
      id,
      'aria-describedby': consumerDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const resolvedId = id ?? autoId;
    const generatedName = name ?? `radio-group-${resolvedId}`;
    const descriptionId = description ? `${resolvedId}-description` : undefined;
    const errorId = errorMessage ? `${resolvedId}-error` : undefined;
    const describedBy =
      [consumerDescribedBy, descriptionId, errorId].filter(Boolean).join(' ') || undefined;

    const wrapperClasses = [
      'zy-radio-group',
      fullWidth ? 'zy-radio-group--full' : '',
      disabled ? 'zy-radio-group--disabled' : '',
      invalid ? 'zy-radio-group--invalid' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const listClasses = [
      'zy-radio-group__list',
      orientation === 'horizontal' ? 'zy-radio-group__list--horizontal' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const handleChange = useCallback(
      (childOnChange: React.ChangeEventHandler<HTMLInputElement> | undefined) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
          childOnChange?.(e);
          if (!e.defaultPrevented) {
            onValueChange?.(e.target.value);
          }
        },
      [onValueChange],
    );

    const enhancedChildren = Children.map(children, (child) => {
      if (!isValidElement<RadioProps>(child) || child.type !== Radio) {
        return child;
      }
      return cloneElement(child as ReactElement<RadioProps>, {
        name: generatedName,
        checked: value !== undefined ? child.props.value === value : undefined,
        defaultChecked:
          defaultValue !== undefined && value === undefined
            ? child.props.value === defaultValue
            : undefined,
        onChange: handleChange(child.props.onChange),
        disabled: disabled || child.props.disabled,
      });
    });

    return (
      <div
        ref={ref}
        className={wrapperClasses}
        role="radiogroup"
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        aria-labelledby={label ? `${resolvedId}-label` : undefined}
        {...rest}
      >
        {label && (
          <div className="zy-radio-group__label" id={`${resolvedId}-label`}>
            {label}
          </div>
        )}
        <div className={listClasses}>{enhancedChildren}</div>
        {description && (
          <p className="zy-radio-group__description" id={descriptionId}>
            {description}
          </p>
        )}
        {errorMessage && (
          <p className="zy-radio-group__error" id={errorId} role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
