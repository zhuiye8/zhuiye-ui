import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './Sheet';

function renderSheet(opts?: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return render(
    <Sheet defaultOpen={opts?.defaultOpen} open={opts?.open} onOpenChange={opts?.onOpenChange}>
      <SheetTrigger>Open sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Account details</SheetTitle>
          <SheetDescription>Review profile and billing settings.</SheetDescription>
        </SheetHeader>
        <SheetBody>Sheet body</SheetBody>
        <SheetFooter>
          <SheetClose>Done</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>,
  );
}

describe('Sheet', () => {
  it('opens when the trigger is clicked', async () => {
    const user = userEvent.setup();
    renderSheet();
    await user.click(screen.getByRole('button', { name: 'Open sheet' }));
    expect(screen.getByRole('dialog', { name: 'Account details' })).toHaveClass(
      'zy-sheet__content',
    );
    expect(screen.getByText('Sheet body')).toBeInTheDocument();
  });

  it('closes when the close button is clicked', async () => {
    const user = userEvent.setup();
    renderSheet({ defaultOpen: true });
    await user.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('supports controlled open state', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    renderSheet({ open: false, onOpenChange });
    await user.click(screen.getByRole('button', { name: 'Open sheet' }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('applies side and size classes', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent side="left" size="lg">
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Filter project activity.</SheetDescription>
        </SheetContent>
      </Sheet>,
    );

    const dialog = screen.getByRole('dialog', { name: 'Filters' });
    expect(dialog).toHaveClass('zy-sheet__content--left', 'zy-sheet--lg');
    expect(dialog).toHaveAttribute('data-side', 'left');
  });

  it('can hide the automatic close button', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent showCloseButton={false}>
          <SheetTitle>Readonly sheet</SheetTitle>
          <SheetDescription>No close icon.</SheetDescription>
        </SheetContent>
      </Sheet>,
    );

    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
  });

  it('forwards refs to content and layout helpers', () => {
    const contentRef = vi.fn();
    const overlayRef = vi.fn();
    const headerRef = vi.fn();
    const bodyRef = vi.fn();
    const footerRef = vi.fn();
    const titleRef = vi.fn();
    const descriptionRef = vi.fn();

    render(
      <Sheet defaultOpen>
        <SheetOverlay ref={overlayRef} />
        <SheetContent ref={contentRef}>
          <SheetHeader ref={headerRef}>
            <SheetTitle ref={titleRef}>Refs</SheetTitle>
            <SheetDescription ref={descriptionRef}>Ref forwarding.</SheetDescription>
          </SheetHeader>
          <SheetBody ref={bodyRef}>Body</SheetBody>
          <SheetFooter ref={footerRef}>Footer</SheetFooter>
        </SheetContent>
      </Sheet>,
    );

    expect(overlayRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(contentRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(headerRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(bodyRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(footerRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(titleRef).toHaveBeenCalledWith(expect.any(HTMLHeadingElement));
    expect(descriptionRef).toHaveBeenCalledWith(expect.any(HTMLParagraphElement));
  });

  it('passes className through to compound parts', () => {
    render(
      <Sheet defaultOpen>
        <SheetContent className="custom-content" overlayClassName="custom-overlay">
          <SheetHeader className="custom-header">
            <SheetTitle className="custom-title">Custom</SheetTitle>
            <SheetDescription className="custom-description">Custom description.</SheetDescription>
          </SheetHeader>
          <SheetBody className="custom-body">Body</SheetBody>
          <SheetFooter className="custom-footer">Footer</SheetFooter>
        </SheetContent>
      </Sheet>,
    );

    expect(screen.getByRole('dialog', { name: 'Custom' })).toHaveClass('custom-content');
    expect(document.querySelector('.zy-sheet__overlay')).toHaveClass('custom-overlay');
    expect(document.querySelector('.zy-sheet__header')).toHaveClass('custom-header');
    expect(document.querySelector('.zy-sheet__title')).toHaveClass('custom-title');
    expect(document.querySelector('.zy-sheet__description')).toHaveClass('custom-description');
    expect(document.querySelector('.zy-sheet__body')).toHaveClass('custom-body');
    expect(document.querySelector('.zy-sheet__footer')).toHaveClass('custom-footer');
  });
});
