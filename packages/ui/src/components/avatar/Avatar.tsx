import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ComponentPropsWithoutRef,
} from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps extends ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  /** Size of the avatar */
  size?: AvatarSize;
  /** Shape of the avatar */
  shape?: AvatarShape;
}

export type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;

export type AvatarFallbackProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;

export interface AvatarGroupProps extends ComponentPropsWithoutRef<'div'> {
  /** Size applied to all avatars in the group */
  size?: AvatarSize;
  /** Shape applied to all avatars in the group */
  shape?: AvatarShape;
  /** Maximum number of avatars to display before showing +N */
  max?: number;
  /** Total count for overflow display when max is set */
  total?: number;
}

const sizeStyles: Record<AvatarSize, string> = {
  xs: 'zy-avatar--xs',
  sm: 'zy-avatar--sm',
  md: 'zy-avatar--md',
  lg: 'zy-avatar--lg',
  xl: 'zy-avatar--xl',
};

const shapeStyles: Record<AvatarShape, string> = {
  circle: 'zy-avatar--circle',
  square: 'zy-avatar--square',
};

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ size = 'md', shape = 'circle', className = '', ...rest }, ref) => {
    const classes = ['zy-avatar', sizeStyles[size], shapeStyles[shape], className]
      .filter(Boolean)
      .join(' ');

    return <AvatarPrimitive.Root ref={ref} className={classes} {...rest} />;
  },
);

Avatar.displayName = 'Avatar';

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className = '', ...rest }, ref) => (
    <AvatarPrimitive.Image ref={ref} className={`zy-avatar__image ${className}`.trim()} {...rest} />
  ),
);

AvatarImage.displayName = 'AvatarImage';

export const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className = '', ...rest }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={`zy-avatar__fallback ${className}`.trim()}
      {...rest}
    />
  ),
);

AvatarFallback.displayName = 'AvatarFallback';

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    { size = 'md', shape = 'circle', max, total, role = 'list', className = '', children, ...rest },
    ref,
  ) => {
    const classes = ['zy-avatar-group', className].filter(Boolean).join(' ');
    const childArray = Children.toArray(children);
    const visibleChildren = max != null ? childArray.slice(0, max) : childArray;
    const totalCount = total ?? childArray.length;
    const remainingCount = max != null ? Math.max(0, totalCount - visibleChildren.length) : 0;

    return (
      <div ref={ref} role={role} className={classes} {...rest}>
        {visibleChildren.map((child, index) => (
          <div
            key={isValidElement(child) && child.key != null ? child.key : index}
            role={role === 'list' ? 'listitem' : undefined}
            className="zy-avatar-group__item"
            data-size={size}
          >
            {isValidElement<AvatarProps>(child) && child.type === Avatar
              ? cloneElement(child, {
                  size: child.props.size ?? size,
                  shape: child.props.shape ?? shape,
                })
              : child}
          </div>
        ))}
        {remainingCount > 0 && (
          <div
            role={role === 'list' ? 'listitem' : undefined}
            className="zy-avatar-group__item"
            data-size={size}
          >
            <Avatar
              size={size}
              shape={shape}
              className="zy-avatar--overflow"
              aria-label={`${remainingCount} more`}
            >
              <AvatarFallback aria-hidden="true">+{remainingCount}</AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    );
  },
);

AvatarGroup.displayName = 'AvatarGroup';
