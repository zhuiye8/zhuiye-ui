import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export type TabsVariant = 'underline' | 'pills' | 'contained';
export type TabsSize = 'sm' | 'md' | 'lg';

export type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

export interface TabsListProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  variant?: TabsVariant;
  size?: TabsSize;
}

export type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;

export type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;

const variantStyles: Record<TabsVariant, string> = {
  underline: 'zy-tabs__list--underline',
  pills: 'zy-tabs__list--pills',
  contained: 'zy-tabs__list--contained',
};

const sizeStyles: Record<TabsSize, string> = {
  sm: 'zy-tabs__list--sm',
  md: 'zy-tabs__list--md',
  lg: 'zy-tabs__list--lg',
};

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(({ className = '', ...rest }, ref) => (
  <TabsPrimitive.Root ref={ref} className={`zy-tabs ${className}`.trim()} {...rest} />
));
Tabs.displayName = 'Tabs';

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ variant = 'underline', size = 'md', className = '', ...rest }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={`zy-tabs__list ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()}
      {...rest}
    />
  ),
);
TabsList.displayName = 'TabsList';

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className = '', ...rest }, ref) => (
    <TabsPrimitive.Trigger ref={ref} className={`zy-tabs__trigger ${className}`.trim()} {...rest} />
  ),
);
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className = '', ...rest }, ref) => (
    <TabsPrimitive.Content ref={ref} className={`zy-tabs__content ${className}`.trim()} {...rest} />
  ),
);
TabsContent.displayName = 'TabsContent';
