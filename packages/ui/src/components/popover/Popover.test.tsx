import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  Popover,
  PopoverTrigger,
  PopoverClose,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverFooter,
  PopoverTitle,
  PopoverDescription,
} from './Popover';

function renderPopover(props?: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}) {
  return render(
    <Popover defaultOpen={props?.defaultOpen} open={props?.open} onOpenChange={props?.onOpenChange}>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent
        size={props?.size}
        showArrow={props?.showArrow}
        className={props?.className}
        side={props?.side}
        align={props?.align}
      >
        <PopoverHeader>
          <PopoverTitle>Test Title</PopoverTitle>
          <PopoverDescription>Test Description</PopoverDescription>
        </PopoverHeader>
        <p>Popover body</p>
        <PopoverFooter>
          <PopoverClose>Close</PopoverClose>
        </PopoverFooter>
      </PopoverContent>
    </Popover>,
  );
}

describe('Popover', () => {
  it('trigger opens the popover', async () => {
    const user = userEvent.setup();
    renderPopover();
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Popover body')).toBeInTheDocument();
  });

  it('close button closes the popover', async () => {
    const user = userEvent.setup();
    renderPopover();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
  });

  it('PopoverClose asChild closes the popover', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent showArrow={false}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverClose asChild>
            <button type="button">Custom Close</button>
          </PopoverClose>
        </PopoverContent>
      </Popover>,
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Title')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Custom Close' }));
    expect(screen.queryByText('Title')).not.toBeInTheDocument();
  });

  it('defaultOpen renders initially open', () => {
    render(
      <Popover defaultOpen>
        <PopoverContent>
          <PopoverTitle>Initially Open</PopoverTitle>
        </PopoverContent>
      </Popover>,
    );
    expect(screen.getByText('Initially Open')).toBeInTheDocument();
  });

  it('controlled open + onOpenChange works', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Popover open={false} onOpenChange={onOpenChange}>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverTitle>Controlled</PopoverTitle>
        </PopoverContent>
      </Popover>,
    );
    expect(screen.queryByText('Controlled')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('size classes apply', () => {
    const { rerender } = render(
      <Popover defaultOpen>
        <PopoverContent size="sm" data-testid="content">
          <PopoverTitle>Title</PopoverTitle>
        </PopoverContent>
      </Popover>,
    );
    expect(screen.getByTestId('content')).toHaveClass('zy-popover--sm');

    rerender(
      <Popover defaultOpen>
        <PopoverContent size="lg" data-testid="content">
          <PopoverTitle>Title</PopoverTitle>
        </PopoverContent>
      </Popover>,
    );
    expect(screen.getByTestId('content')).toHaveClass('zy-popover--lg');
  });

  it('showArrow={false} removes arrow', async () => {
    const user = userEvent.setup();
    renderPopover({ showArrow: false });
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(document.querySelector('.zy-popover__arrow')).not.toBeInTheDocument();
  });

  it('custom className merges on content', async () => {
    const user = userEvent.setup();
    renderPopover({ className: 'custom-popover' });
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const content = document.querySelector('.zy-popover__content');
    expect(content).toBeTruthy();
    expect(content).toHaveClass('zy-popover__content');
    expect(content).toHaveClass('zy-popover--md');
    expect(content).toHaveClass('custom-popover');
  });

  it('side and align props pass through', async () => {
    const user = userEvent.setup();
    renderPopover({ side: 'top', align: 'start' });
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const content = document.querySelector('.zy-popover__content');
    expect(content).toBeTruthy();
    expect(content).toHaveAttribute('data-side', 'top');
    expect(content).toHaveAttribute('data-align', 'start');
  });

  it('PopoverHeader, PopoverFooter, PopoverTitle, PopoverDescription render', async () => {
    const user = userEvent.setup();
    renderPopover();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(document.querySelector('.zy-popover__header')).toBeInTheDocument();
    expect(document.querySelector('.zy-popover__footer')).toBeInTheDocument();
    expect(document.querySelector('.zy-popover__title')).toBeInTheDocument();
    expect(document.querySelector('.zy-popover__description')).toBeInTheDocument();
  });

  it('forwards ref to content', async () => {
    const ref = vi.fn();
    render(
      <Popover defaultOpen>
        <PopoverContent ref={ref}>
          <PopoverTitle>Title</PopoverTitle>
        </PopoverContent>
      </Popover>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('forwards ref to arrow', () => {
    const ref = vi.fn();
    render(
      <Popover defaultOpen>
        <PopoverContent showArrow={false}>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverArrow ref={ref} />
        </PopoverContent>
      </Popover>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(SVGSVGElement));
  });

  it('renders default size md', async () => {
    const user = userEvent.setup();
    renderPopover();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const content = document.querySelector('.zy-popover__content');
    expect(content).toBeTruthy();
    expect(content).toHaveClass('zy-popover--md');
  });
});
