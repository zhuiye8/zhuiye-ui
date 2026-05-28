import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

export type AccordionVariant = 'line' | 'card' | 'contained';
export type AccordionSize = 'sm' | 'md' | 'lg';

export type AccordionProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
  variant?: AccordionVariant;
  size?: AccordionSize;
};

export type AccordionItemProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;

export type AccordionHeaderProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>;

export interface AccordionTriggerProps extends ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> {
  showChevron?: boolean;
}

export type AccordionContentProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;

const variantStyles: Record<AccordionVariant, string> = {
  line: 'zy-accordion--line',
  card: 'zy-accordion--card',
  contained: 'zy-accordion--contained',
};

const sizeStyles: Record<AccordionSize, string> = {
  sm: 'zy-accordion--sm',
  md: 'zy-accordion--md',
  lg: 'zy-accordion--lg',
};

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ variant = 'line', size = 'md', className = '', ...rest }, ref) => (
    <AccordionPrimitive.Root
      ref={ref}
      className={`zy-accordion ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
      {...rest}
    />
  ),
);
Accordion.displayName = 'Accordion';

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className = '', ...rest }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={`zy-accordion__item ${className}`.trim()}
      {...rest}
    />
  ),
);
AccordionItem.displayName = 'AccordionItem';

export const AccordionHeader = forwardRef<HTMLHeadingElement, AccordionHeaderProps>(
  ({ className = '', ...rest }, ref) => (
    <AccordionPrimitive.Header
      ref={ref}
      className={`zy-accordion__header ${className}`.trim()}
      {...rest}
    />
  ),
);
AccordionHeader.displayName = 'AccordionHeader';

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className = '', showChevron = true, children, ...rest }, ref) => (
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`zy-accordion__trigger ${className}`.trim()}
      {...rest}
    >
      <span className="zy-accordion__trigger-text">{children}</span>
      {showChevron && <span className="zy-accordion__chevron" aria-hidden="true" />}
    </AccordionPrimitive.Trigger>
  ),
);
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className = '', children, ...rest }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={`zy-accordion__content ${className}`.trim()}
      {...rest}
    >
      <div className="zy-accordion__content-body">{children}</div>
    </AccordionPrimitive.Content>
  ),
);
AccordionContent.displayName = 'AccordionContent';
