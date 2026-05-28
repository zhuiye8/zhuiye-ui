import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, TooltipArrow } from './Tooltip';

function renderTooltip(props?: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  tone?: 'neutral' | 'inverse';
  showArrow?: boolean;
  className?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
}) {
  return render(
    <TooltipProvider delayDuration={props?.delayDuration ?? 0}>
      <Tooltip
        defaultOpen={props?.defaultOpen}
        open={props?.open}
        onOpenChange={props?.onOpenChange}
      >
        <TooltipTrigger>Trigger</TooltipTrigger>
        <TooltipContent
          tone={props?.tone}
          showArrow={props?.showArrow}
          className={props?.className}
          side={props?.side}
          align={props?.align}
        >
          Tooltip text
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>,
  );
}

describe('Tooltip', () => {
  it('defaultOpen renders initially open', () => {
    renderTooltip({ defaultOpen: true });
    expect(screen.getAllByText('Tooltip text').length).toBeGreaterThanOrEqual(1);
  });

  it('hover opens the tooltip', async () => {
    const user = userEvent.setup();
    renderTooltip();
    expect(screen.queryByText('Tooltip text')).toBeNull();
    await user.hover(screen.getByRole('button', { name: 'Trigger' }));
    expect((await screen.findAllByText('Tooltip text')).length).toBeGreaterThanOrEqual(1);
  });

  it('focus opens the tooltip', async () => {
    const user = userEvent.setup();
    renderTooltip();
    expect(screen.queryByText('Tooltip text')).toBeNull();
    await user.tab();
    expect((await screen.findAllByText('Tooltip text')).length).toBeGreaterThanOrEqual(1);
  });

  it('escape closes when open', async () => {
    const user = userEvent.setup();
    renderTooltip({ defaultOpen: true });
    expect(screen.getAllByText('Tooltip text').length).toBeGreaterThanOrEqual(1);
    await user.keyboard('{Escape}');
    expect(screen.queryByText('Tooltip text')).toBeNull();
  });

  it('controlled open + onOpenChange works', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    renderTooltip({ open: false, onOpenChange });
    expect(screen.queryByText('Tooltip text')).toBeNull();
    await user.hover(screen.getByRole('button', { name: 'Trigger' }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('tone classes apply', () => {
    const { rerender } = render(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent tone="inverse" data-testid="content">
            Tooltip text
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(screen.getByTestId('content')).toHaveClass('zy-tooltip--inverse');

    rerender(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent tone="neutral" data-testid="content">
            Tooltip text
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(screen.getByTestId('content')).toHaveClass('zy-tooltip--neutral');
  });

  it('showArrow={false} removes arrow', () => {
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent showArrow={false}>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(screen.getAllByText('Tooltip text').length).toBeGreaterThanOrEqual(1);
    expect(document.querySelector('.zy-tooltip__arrow')).not.toBeInTheDocument();
  });

  it('custom className merges on content', () => {
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent className="custom-tooltip" data-testid="content">
            Tooltip text
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('zy-tooltip__content');
    expect(content).toHaveClass('zy-tooltip--inverse');
    expect(content).toHaveClass('custom-tooltip');
  });

  it('side and align props pass through', () => {
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent side="top" align="start" data-testid="content">
            Tooltip text
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    const content = screen.getByTestId('content');
    expect(content).toHaveAttribute('data-side', 'top');
    expect(content).toHaveAttribute('data-align', 'start');
  });

  it('forwards ref to content', () => {
    const ref = vi.fn();
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent ref={ref}>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('forwards ref to arrow', () => {
    const ref = vi.fn();
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent showArrow={false}>
            Tooltip text
            <TooltipArrow ref={ref} />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(SVGSVGElement));
  });

  it('renders default tone inverse', () => {
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip defaultOpen>
          <TooltipTrigger>Trigger</TooltipTrigger>
          <TooltipContent data-testid="content">Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );
    expect(screen.getByTestId('content')).toHaveClass('zy-tooltip--inverse');
  });
});
