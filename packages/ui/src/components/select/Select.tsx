import { forwardRef, useId, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  textValue?: string;
}

export interface SelectGroup {
  label: ReactNode;
  options: SelectOption[];
}

export type SelectOptionSource = SelectOption | SelectGroup;

export interface SelectProps extends Omit<
  ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
  'children'
> {
  /** Options to render. Flat items or groups. */
  options: SelectOptionSource[];
  /** Placeholder text when no value is selected */
  placeholder?: ReactNode;
  /** Visual size of the select trigger */
  size?: SelectSize;
  /** Whether the select is in an invalid state */
  invalid?: boolean;
  /** Whether the select should take full width */
  fullWidth?: boolean;
  /** Explicit id for the trigger button */
  id?: string;
  /** Additional class name for the trigger */
  className?: string;
  /** Additional class name for the dropdown content */
  contentClassName?: string;
  /** Additional class name for the content viewport */
  viewportClassName?: string;
  /** IDs of elements that describe the trigger */
  'aria-describedby'?: string;
}

function isGroup(option: SelectOptionSource): option is SelectGroup {
  return 'options' in option;
}

const sizeStyles: Record<SelectSize, string> = {
  sm: 'zy-select--sm',
  md: 'zy-select--md',
  lg: 'zy-select--lg',
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options,
      placeholder,
      size = 'md',
      invalid = false,
      fullWidth = false,
      id,
      className = '',
      contentClassName = '',
      viewportClassName = '',
      disabled,
      required,
      name,
      value,
      defaultValue,
      onValueChange,
      open,
      defaultOpen,
      onOpenChange,
      'aria-describedby': ariaDescribedBy,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const resolvedId = id ?? autoId;

    const triggerClasses = [
      'zy-select',
      sizeStyles[size],
      fullWidth ? 'zy-select--full' : '',
      invalid ? 'zy-select--invalid' : '',
      disabled ? 'zy-select--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <SelectPrimitive.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
        name={name}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <SelectPrimitive.Trigger
          ref={ref}
          id={resolvedId}
          className={triggerClasses}
          aria-invalid={invalid || undefined}
          aria-describedby={ariaDescribedBy}
          {...rest}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon className="zy-select__chevron" aria-hidden="true">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.64245 9.99395 7.35753 9.99395 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className={`zy-select__content ${contentClassName}`.trim()}
            position="popper"
            sideOffset={4}
          >
            <SelectPrimitive.Viewport className={`zy-select__viewport ${viewportClassName}`.trim()}>
              {options.map((option, index) => {
                if (isGroup(option)) {
                  return (
                    <SelectPrimitive.Group key={index}>
                      <SelectPrimitive.Label className="zy-select__group-label">
                        {option.label}
                      </SelectPrimitive.Label>
                      {option.options.map((item) => (
                        <SelectItem
                          key={item.value}
                          value={item.value}
                          disabled={item.disabled}
                          textValue={item.textValue}
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectPrimitive.Group>
                  );
                }
                return (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    textValue={option.textValue}
                  >
                    {option.label}
                  </SelectItem>
                );
              })}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  },
);

Select.displayName = 'Select';

function SelectItem({ children, ...props }: ComponentPropsWithoutRef<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item className="zy-select__item" {...props}>
      <SelectPrimitive.ItemIndicator className="zy-select__item-indicator">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3354 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
