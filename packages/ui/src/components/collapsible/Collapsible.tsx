import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

export type CollapsibleProps = ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>;

export interface CollapsibleTriggerProps extends ComponentPropsWithoutRef<
  typeof CollapsiblePrimitive.Trigger
> {
  showChevron?: boolean;
}

export type CollapsibleContentProps = ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>;

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ className = '', ...rest }, ref) => (
    <CollapsiblePrimitive.Root
      ref={ref}
      className={`zy-collapsible ${className}`.trim()}
      {...rest}
    />
  ),
);
Collapsible.displayName = 'Collapsible';

export const CollapsibleTrigger = forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ className = '', showChevron = true, children, ...rest }, ref) => (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      className={`zy-collapsible__trigger ${className}`.trim()}
      {...rest}
    >
      <span className="zy-collapsible__trigger-text">{children}</span>
      {showChevron && <span className="zy-collapsible__chevron" aria-hidden="true" />}
    </CollapsiblePrimitive.Trigger>
  ),
);
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

export const CollapsibleContent = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ className = '', children, ...rest }, ref) => (
    <CollapsiblePrimitive.Content
      ref={ref}
      className={`zy-collapsible__content ${className}`.trim()}
      {...rest}
    >
      <div className="zy-collapsible__content-body">{children}</div>
    </CollapsiblePrimitive.Content>
  ),
);
CollapsibleContent.displayName = 'CollapsibleContent';

export type CollapsibleHeaderProps = ComponentPropsWithoutRef<'div'>;

export const CollapsibleHeader = forwardRef<HTMLDivElement, CollapsibleHeaderProps>(
  ({ className = '', ...rest }, ref) => (
    <div ref={ref} className={`zy-collapsible__header ${className}`.trim()} {...rest} />
  ),
);
CollapsibleHeader.displayName = 'CollapsibleHeader';

export type CollapsibleTitleProps = ComponentPropsWithoutRef<'h3'>;

export const CollapsibleTitle = forwardRef<HTMLHeadingElement, CollapsibleTitleProps>(
  ({ className = '', ...rest }, ref) => (
    <h3 ref={ref} className={`zy-collapsible__title ${className}`.trim()} {...rest} />
  ),
);
CollapsibleTitle.displayName = 'CollapsibleTitle';

export type CollapsibleDescriptionProps = ComponentPropsWithoutRef<'p'>;

export const CollapsibleDescription = forwardRef<HTMLParagraphElement, CollapsibleDescriptionProps>(
  ({ className = '', ...rest }, ref) => (
    <p ref={ref} className={`zy-collapsible__description ${className}`.trim()} {...rest} />
  ),
);
CollapsibleDescription.displayName = 'CollapsibleDescription';
