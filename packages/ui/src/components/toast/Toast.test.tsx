import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
} from './Toast';

function renderToast(opts?: {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return render(
    <ToastProvider duration={100000}>
      <Toast
        open={opts?.open}
        defaultOpen={opts?.defaultOpen ?? true}
        onOpenChange={opts?.onOpenChange}
        forceMount
      >
        <ToastTitle>Saved</ToastTitle>
        <ToastDescription>Changes were saved successfully.</ToastDescription>
        <ToastAction altText="Undo save">Undo</ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>,
  );
}

describe('Toast', () => {
  it('renders title description action close and viewport', () => {
    renderToast();
    expect(screen.getByText('Saved')).toHaveClass('zy-toast__title');
    expect(screen.getByText('Changes were saved successfully.')).toHaveClass(
      'zy-toast__description',
    );
    expect(screen.getByRole('button', { name: 'Undo' })).toHaveClass('zy-toast__action');
    expect(screen.getByRole('button', { name: 'Close' })).toHaveClass('zy-toast__close');
    expect(document.querySelector('.zy-toast__viewport')).toHaveClass(
      'zy-toast__viewport--bottom-right',
    );
  });

  it('applies tone and size classes', () => {
    render(
      <ToastProvider duration={100000}>
        <Toast tone="success" size="sm" forceMount>
          <ToastDescription>Uploaded</ToastDescription>
        </Toast>
        <ToastViewport />
      </ToastProvider>,
    );

    expect(document.querySelector('.zy-toast')).toHaveClass('zy-toast--success', 'zy-toast--sm');
  });

  it('supports viewport positions', () => {
    render(
      <ToastProvider duration={100000}>
        <Toast forceMount>
          <ToastDescription>Positioned</ToastDescription>
        </Toast>
        <ToastViewport position="top-center" />
      </ToastProvider>,
    );

    expect(document.querySelector('.zy-toast__viewport')).toHaveClass(
      'zy-toast__viewport--top-center',
    );
  });

  it('can hide the automatic close button', () => {
    render(
      <ToastProvider duration={100000}>
        <Toast forceMount showCloseButton={false}>
          <ToastDescription>No close button</ToastDescription>
        </Toast>
        <ToastViewport />
      </ToastProvider>,
    );

    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
  });

  it('controlled close calls onOpenChange', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    renderToast({ open: true, onOpenChange });

    await user.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });
  });

  it('action click closes uncontrolled toast', async () => {
    const user = userEvent.setup();
    renderToast();

    await user.click(screen.getByRole('button', { name: 'Undo' }));
    await waitFor(() => {
      expect(document.querySelector('.zy-toast')).toHaveAttribute('data-state', 'closed');
    });
  });

  it('forwards refs to toast parts', () => {
    const toastRef = vi.fn();
    const viewportRef = vi.fn();
    const titleRef = vi.fn();
    const descriptionRef = vi.fn();
    const actionRef = vi.fn();
    const closeRef = vi.fn();

    render(
      <ToastProvider duration={100000}>
        <Toast ref={toastRef} forceMount>
          <ToastTitle ref={titleRef}>Refs</ToastTitle>
          <ToastDescription ref={descriptionRef}>Forward refs.</ToastDescription>
          <ToastAction ref={actionRef} altText="Undo ref">
            Undo
          </ToastAction>
          <ToastClose ref={closeRef} label="Dismiss" />
        </Toast>
        <ToastViewport ref={viewportRef} />
      </ToastProvider>,
    );

    expect(toastRef).toHaveBeenCalledWith(expect.any(HTMLLIElement));
    expect(viewportRef).toHaveBeenCalledWith(expect.any(HTMLOListElement));
    expect(titleRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(descriptionRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(actionRef).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
    expect(closeRef).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('passes className through to compound parts', () => {
    render(
      <ToastProvider duration={100000}>
        <Toast className="custom-toast" forceMount>
          <ToastTitle className="custom-title">Custom</ToastTitle>
          <ToastDescription className="custom-description">Custom description.</ToastDescription>
          <ToastAction className="custom-action" altText="Undo custom">
            Undo
          </ToastAction>
          <ToastClose className="custom-close" label="Dismiss" />
        </Toast>
        <ToastViewport className="custom-viewport" />
      </ToastProvider>,
    );

    expect(document.querySelector('.zy-toast')).toHaveClass('custom-toast');
    expect(document.querySelector('.zy-toast__title')).toHaveClass('custom-title');
    expect(document.querySelector('.zy-toast__description')).toHaveClass('custom-description');
    expect(document.querySelector('.zy-toast__action')).toHaveClass('custom-action');
    expect(screen.getByRole('button', { name: 'Dismiss' })).toHaveClass('custom-close');
    expect(document.querySelector('.zy-toast__viewport')).toHaveClass('custom-viewport');
  });
});
