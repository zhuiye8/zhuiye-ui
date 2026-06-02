import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ReactNode,
} from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';

export type ToastTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
export type ToastSize = 'sm' | 'md';
export type ToastViewportPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const ToastProvider = ToastPrimitive.Provider;

export interface ToastProps extends ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  tone?: ToastTone;
  size?: ToastSize;
  showCloseButton?: boolean;
}

export interface ToastViewportProps extends ComponentPropsWithoutRef<
  typeof ToastPrimitive.Viewport
> {
  position?: ToastViewportPosition;
}

export type ToastTitleProps = ComponentPropsWithoutRef<typeof ToastPrimitive.Title>;
export type ToastDescriptionProps = ComponentPropsWithoutRef<typeof ToastPrimitive.Description>;
export type ToastActionProps = ComponentPropsWithoutRef<typeof ToastPrimitive.Action>;
export interface ToastCloseProps extends ComponentPropsWithoutRef<typeof ToastPrimitive.Close> {
  label?: string;
  children?: ReactNode;
}

const toneStyles: Record<ToastTone, string> = {
  neutral: 'zy-toast--neutral',
  info: 'zy-toast--info',
  success: 'zy-toast--success',
  warning: 'zy-toast--warning',
  danger: 'zy-toast--danger',
};

const sizeStyles: Record<ToastSize, string> = {
  sm: 'zy-toast--sm',
  md: 'zy-toast--md',
};

const positionStyles: Record<ToastViewportPosition, string> = {
  'top-left': 'zy-toast__viewport--top-left',
  'top-center': 'zy-toast__viewport--top-center',
  'top-right': 'zy-toast__viewport--top-right',
  'bottom-left': 'zy-toast__viewport--bottom-left',
  'bottom-center': 'zy-toast__viewport--bottom-center',
  'bottom-right': 'zy-toast__viewport--bottom-right',
};

export const ToastViewport = forwardRef<
  ComponentRef<typeof ToastPrimitive.Viewport>,
  ToastViewportProps
>(({ position = 'bottom-right', className = '', ...rest }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cx('zy-toast__viewport', positionStyles[position], className)}
    {...rest}
  />
));
ToastViewport.displayName = 'ToastViewport';

export const Toast = forwardRef<ComponentRef<typeof ToastPrimitive.Root>, ToastProps>(
  (
    { tone = 'neutral', size = 'md', showCloseButton = true, className = '', children, ...rest },
    ref,
  ) => (
    <ToastPrimitive.Root
      ref={ref}
      className={cx('zy-toast', toneStyles[tone], sizeStyles[size], className)}
      {...rest}
    >
      <span className="zy-toast__rail" aria-hidden="true" />
      <div className="zy-toast__body">{children}</div>
      {showCloseButton && <ToastClose />}
    </ToastPrimitive.Root>
  ),
);
Toast.displayName = 'Toast';

export const ToastTitle = forwardRef<ComponentRef<typeof ToastPrimitive.Title>, ToastTitleProps>(
  ({ className = '', ...rest }, ref) => (
    <ToastPrimitive.Title ref={ref} className={cx('zy-toast__title', className)} {...rest} />
  ),
);
ToastTitle.displayName = 'ToastTitle';

export const ToastDescription = forwardRef<
  ComponentRef<typeof ToastPrimitive.Description>,
  ToastDescriptionProps
>(({ className = '', ...rest }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cx('zy-toast__description', className)}
    {...rest}
  />
));
ToastDescription.displayName = 'ToastDescription';

export const ToastAction = forwardRef<ComponentRef<typeof ToastPrimitive.Action>, ToastActionProps>(
  ({ className = '', ...rest }, ref) => (
    <ToastPrimitive.Action ref={ref} className={cx('zy-toast__action', className)} {...rest} />
  ),
);
ToastAction.displayName = 'ToastAction';

export const ToastClose = forwardRef<ComponentRef<typeof ToastPrimitive.Close>, ToastCloseProps>(
  ({ label = 'Close', className = '', children, ...rest }, ref) => (
    <ToastPrimitive.Close
      ref={ref}
      aria-label={label}
      className={cx('zy-toast__close', className)}
      {...rest}
    >
      {children ?? <span className="zy-toast__close-icon" aria-hidden="true" />}
    </ToastPrimitive.Close>
  ),
);
ToastClose.displayName = 'ToastClose';
