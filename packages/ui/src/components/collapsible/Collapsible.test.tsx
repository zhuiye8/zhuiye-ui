import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleTitle,
  CollapsibleDescription,
} from './Collapsible';

function renderCollapsible(opts?: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  forceMount?: boolean;
  showChevron?: boolean;
}) {
  return render(
    <Collapsible
      defaultOpen={opts?.defaultOpen}
      open={opts?.open}
      onOpenChange={opts?.onOpenChange}
      disabled={opts?.disabled}
    >
      <CollapsibleHeader>
        <CollapsibleTitle>Toggle Section</CollapsibleTitle>
        <CollapsibleDescription>Click to expand</CollapsibleDescription>
      </CollapsibleHeader>
      <CollapsibleTrigger showChevron={opts?.showChevron}>Show Details</CollapsibleTrigger>
      <CollapsibleContent forceMount={opts?.forceMount ? true : undefined}>
        Hidden Content
      </CollapsibleContent>
    </Collapsible>,
  );
}

describe('Collapsible', () => {
  it('renders default closed without content', () => {
    renderCollapsible();
    expect(screen.queryByText('Hidden Content')).not.toBeInTheDocument();
  });

  it('defaultOpen renders content', () => {
    renderCollapsible({ defaultOpen: true });
    expect(screen.getByText('Hidden Content')).toBeInTheDocument();
  });

  it('clicking trigger toggles content', async () => {
    const user = userEvent.setup();
    renderCollapsible();
    expect(screen.queryByText('Hidden Content')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Show Details' }));
    expect(screen.getByText('Hidden Content')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Show Details' }));
    expect(screen.queryByText('Hidden Content')).not.toBeInTheDocument();
  });

  it('controlled open calls onOpenChange', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    renderCollapsible({ open: false, onOpenChange });
    await user.click(screen.getByRole('button', { name: 'Show Details' }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('disabled trigger cannot toggle', async () => {
    const user = userEvent.setup();
    renderCollapsible({ disabled: true });
    const trigger = screen.getByRole('button', { name: 'Show Details' });
    expect(trigger).toBeDisabled();
    await user.click(trigger);
    expect(screen.queryByText('Hidden Content')).not.toBeInTheDocument();
  });

  it('forceMount keeps content mounted when closed', () => {
    renderCollapsible({ forceMount: true });
    expect(screen.getByText('Hidden Content')).toBeInTheDocument();
  });

  it('Enter/Space keyboard activation', async () => {
    const user = userEvent.setup();
    renderCollapsible();
    const trigger = screen.getByRole('button', { name: 'Show Details' });
    trigger.focus();
    await user.keyboard('{Enter}');
    await waitFor(() => {
      expect(screen.getByText('Hidden Content')).toBeInTheDocument();
    });
    await user.click(trigger);
    await waitFor(() => {
      expect(screen.queryByText('Hidden Content')).not.toBeInTheDocument();
    });
  });

  it('forwards ref to trigger', () => {
    const ref = vi.fn();
    render(
      <Collapsible>
        <CollapsibleTrigger ref={ref}>Open</CollapsibleTrigger>
        <CollapsibleContent>Body</CollapsibleContent>
      </Collapsible>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('forwards ref to content', () => {
    const ref = vi.fn();
    render(
      <Collapsible defaultOpen>
        <CollapsibleTrigger>Open</CollapsibleTrigger>
        <CollapsibleContent ref={ref}>Body</CollapsibleContent>
      </Collapsible>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('className/style pass-through', () => {
    render(
      <Collapsible className="custom-collapsible" data-testid="root">
        <CollapsibleHeader className="custom-header" data-testid="header">
          <CollapsibleTitle className="custom-title" data-testid="title">
            Title
          </CollapsibleTitle>
          <CollapsibleDescription className="custom-desc" data-testid="desc">
            Desc
          </CollapsibleDescription>
        </CollapsibleHeader>
        <CollapsibleTrigger className="custom-trigger" data-testid="trigger">
          Toggle
        </CollapsibleTrigger>
        <CollapsibleContent className="custom-content" data-testid="content">
          Body
        </CollapsibleContent>
      </Collapsible>,
    );
    expect(screen.getByTestId('root')).toHaveClass('zy-collapsible', 'custom-collapsible');
    expect(screen.getByTestId('header')).toHaveClass('zy-collapsible__header', 'custom-header');
    expect(screen.getByTestId('title')).toHaveClass('zy-collapsible__title', 'custom-title');
    expect(screen.getByTestId('desc')).toHaveClass('zy-collapsible__description', 'custom-desc');
    expect(screen.getByTestId('trigger')).toHaveClass('zy-collapsible__trigger', 'custom-trigger');
    expect(screen.getByTestId('content')).toHaveClass('zy-collapsible__content', 'custom-content');
  });
});
