import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';

export type BreadcrumbSize = 'sm' | 'md' | 'lg';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export interface BreadcrumbProps extends ComponentPropsWithoutRef<'nav'> {
  size?: BreadcrumbSize;
}

export type BreadcrumbListProps = ComponentPropsWithoutRef<'ol'>;

export type BreadcrumbItemProps = ComponentPropsWithoutRef<'li'>;

export interface BreadcrumbLinkProps extends ComponentPropsWithoutRef<'a'> {
  current?: boolean;
}

export type BreadcrumbPageProps = ComponentPropsWithoutRef<'span'>;

export interface BreadcrumbSeparatorProps extends ComponentPropsWithoutRef<'li'> {
  children?: ReactNode;
}

export interface BreadcrumbEllipsisProps extends ComponentPropsWithoutRef<'span'> {
  label?: string;
}

const sizeStyles: Record<BreadcrumbSize, string> = {
  sm: 'zy-breadcrumb--sm',
  md: 'zy-breadcrumb--md',
  lg: 'zy-breadcrumb--lg',
};

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ size = 'md', className = '', 'aria-label': ariaLabel = 'Breadcrumb', ...rest }, ref) => (
    <nav
      ref={ref}
      aria-label={ariaLabel}
      className={cx('zy-breadcrumb', sizeStyles[size], className)}
      {...rest}
    />
  ),
);
Breadcrumb.displayName = 'Breadcrumb';

export const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className = '', ...rest }, ref) => (
    <ol ref={ref} className={cx('zy-breadcrumb__list', className)} {...rest} />
  ),
);
BreadcrumbList.displayName = 'BreadcrumbList';

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className = '', ...rest }, ref) => (
    <li ref={ref} className={cx('zy-breadcrumb__item', className)} {...rest} />
  ),
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

export const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ current, className = '', 'aria-current': ariaCurrent, ...rest }, ref) => (
    <a
      ref={ref}
      aria-current={current ? 'page' : ariaCurrent}
      className={cx('zy-breadcrumb__link', current && 'zy-breadcrumb__link--current', className)}
      {...rest}
    />
  ),
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbPage = forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className = '', 'aria-current': ariaCurrent = 'page', ...rest }, ref) => (
    <span
      ref={ref}
      aria-current={ariaCurrent}
      className={cx('zy-breadcrumb__page', className)}
      {...rest}
    />
  ),
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

export const BreadcrumbSeparator = forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  ({ children, className = '', ...rest }, ref) => (
    <li
      ref={ref}
      aria-hidden="true"
      role="presentation"
      className={cx('zy-breadcrumb__separator', className)}
      {...rest}
    >
      {children ?? <span className="zy-breadcrumb__separator-mark" />}
    </li>
  ),
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export const BreadcrumbEllipsis = forwardRef<HTMLSpanElement, BreadcrumbEllipsisProps>(
  ({ label = 'More pages', className = '', ...rest }, ref) => (
    <span ref={ref} className={cx('zy-breadcrumb__ellipsis', className)} {...rest}>
      <span className="zy-breadcrumb__ellipsis-dots" aria-hidden="true">
        ...
      </span>
      <span className="zy-breadcrumb__ellipsis-label">{label}</span>
    </span>
  ),
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';
