import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './Dialog';

function renderDialog(props?: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  showCloseButton?: boolean;
  className?: string;
  overlayClassName?: string;
}) {
  return render(
    <Dialog defaultOpen={props?.defaultOpen} open={props?.open} onOpenChange={props?.onOpenChange}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent
        size={props?.size}
        showCloseButton={props?.showCloseButton}
        className={props?.className}
        overlayClassName={props?.overlayClassName}
      >
        <DialogHeader>
          <DialogTitle>Test Title</DialogTitle>
          <DialogDescription>Test Description</DialogDescription>
        </DialogHeader>
        <p>Dialog body</p>
        <DialogFooter>
          <DialogClose>Cancel</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>,
  );
}

describe('Dialog', () => {
  it('trigger opens the dialog', async () => {
    const user = userEvent.setup();
    renderDialog();
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Dialog body')).toBeInTheDocument();
  });

  it('close button closes the dialog', async () => {
    const user = userEvent.setup();
    renderDialog();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const closeButton = screen.getByRole('button', { name: 'Close' });
    expect(closeButton).toBeInTheDocument();
    await user.click(closeButton);
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
  });

  it('DialogClose asChild closes the dialog', async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent showCloseButton={false} aria-describedby={undefined}>
          <DialogTitle>Title</DialogTitle>
          <DialogClose asChild>
            <button type="button">Custom Close</button>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Title')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Custom Close' }));
    expect(screen.queryByText('Title')).not.toBeInTheDocument();
  });

  it('defaultOpen renders initially open', () => {
    render(
      <Dialog defaultOpen>
        <DialogContent aria-describedby={undefined}>
          <DialogTitle>Initially Open</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByText('Initially Open')).toBeInTheDocument();
  });

  it('controlled open + onOpenChange works', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Dialog open={false} onOpenChange={onOpenChange}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogTitle>Controlled</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.queryByText('Controlled')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('title and description wire to accessible dialog content', async () => {
    const user = userEvent.setup();
    renderDialog();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const dialog = screen.getByRole('dialog');
    const title = screen.getByText('Test Title');
    const description = screen.getByText('Test Description');
    expect(dialog).toContainElement(title);
    expect(dialog).toContainElement(description);
    expect(title.tagName).toBe('H2');
    expect(description.tagName).toBe('P');
  });

  it('escape closes the dialog', async () => {
    const user = userEvent.setup();
    renderDialog();
    const trigger = screen.getByRole('button', { name: 'Open' });
    await user.click(trigger);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('size classes apply', () => {
    const { rerender } = render(
      <Dialog defaultOpen>
        <DialogContent size="sm" data-testid="content" aria-describedby={undefined}>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByTestId('content')).toHaveClass('zy-dialog--sm');

    rerender(
      <Dialog defaultOpen>
        <DialogContent size="lg" data-testid="content" aria-describedby={undefined}>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByTestId('content')).toHaveClass('zy-dialog--lg');
  });

  it('showCloseButton={false} removes the close button', async () => {
    const user = userEvent.setup();
    renderDialog({ showCloseButton: false });
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
  });

  it('custom className merges on content', async () => {
    const user = userEvent.setup();
    renderDialog({ className: 'custom-content' });
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const content = screen.getByRole('dialog');
    expect(content).toHaveClass('zy-dialog__content');
    expect(content).toHaveClass('zy-dialog--md');
    expect(content).toHaveClass('custom-content');
  });

  it('custom overlayClassName merges on overlay', async () => {
    const user = userEvent.setup();
    renderDialog({ overlayClassName: 'custom-overlay' });
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const overlay = document.querySelector('.zy-dialog__overlay');
    expect(overlay).toBeTruthy();
    expect(overlay).toHaveClass('custom-overlay');
  });

  it('forwards ref to content', async () => {
    const ref = vi.fn();
    render(
      <Dialog defaultOpen>
        <DialogContent ref={ref} aria-describedby={undefined}>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('forwards ref to title', async () => {
    const ref = vi.fn();
    render(
      <Dialog defaultOpen>
        <DialogContent aria-describedby={undefined}>
          <DialogTitle ref={ref}>Title</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLHeadingElement));
  });

  it('forwards ref to description', async () => {
    const ref = vi.fn();
    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription ref={ref}>Desc</DialogDescription>
        </DialogContent>
      </Dialog>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLParagraphElement));
  });

  it('forwards ref to overlay', async () => {
    const ref = vi.fn();
    render(
      <Dialog defaultOpen>
        <DialogPortal>
          <DialogOverlay ref={ref} />
        </DialogPortal>
        <DialogContent overlayClassName="test-overlay" aria-describedby={undefined}>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>,
    );
    const overlay = document.querySelector('.zy-dialog__overlay');
    expect(overlay).toBeTruthy();
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('renders default size md', async () => {
    const user = userEvent.setup();
    renderDialog();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const content = screen.getByRole('dialog');
    expect(content).toHaveClass('zy-dialog--md');
  });

  it('DialogHeader and DialogFooter render', async () => {
    const user = userEvent.setup();
    renderDialog();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(document.querySelector('.zy-dialog__header')).toBeInTheDocument();
    expect(document.querySelector('.zy-dialog__footer')).toBeInTheDocument();
  });
});
