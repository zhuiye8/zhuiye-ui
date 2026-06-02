import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardHeader,
  HoverCardBody,
  HoverCardFooter,
  HoverCardTitle,
  HoverCardDescription,
} from './HoverCard';

function renderHoverCard(opts?: { openDelay?: number; closeDelay?: number }) {
  return render(
    <HoverCard openDelay={opts?.openDelay ?? 0} closeDelay={opts?.closeDelay ?? 0}>
      <HoverCardTrigger href="#profile">Profile</HoverCardTrigger>
      <HoverCardContent showArrow={false}>
        <HoverCardHeader>
          <HoverCardTitle>Project Atlas</HoverCardTitle>
          <HoverCardDescription>Preview details for the selected workspace.</HoverCardDescription>
        </HoverCardHeader>
      </HoverCardContent>
    </HoverCard>,
  );
}

describe('HoverCard', () => {
  it('renders trigger and opens on hover', async () => {
    const user = userEvent.setup();
    renderHoverCard();
    const trigger = screen.getByRole('link', { name: 'Profile' });
    expect(trigger).toHaveClass('zy-hover-card__trigger');
    expect(screen.queryByText('Project Atlas')).not.toBeInTheDocument();
    await user.hover(trigger);
    expect(await screen.findByText('Project Atlas')).toBeInTheDocument();
  });

  it('closes after unhover when delay is zero', async () => {
    const user = userEvent.setup();
    renderHoverCard();
    const trigger = screen.getByRole('link', { name: 'Profile' });
    await user.hover(trigger);
    expect(await screen.findByText('Project Atlas')).toBeInTheDocument();
    await user.unhover(trigger);
    await waitFor(() => {
      expect(screen.queryByText('Project Atlas')).not.toBeInTheDocument();
    });
  });

  it('supports controlled open state', () => {
    const onOpenChange = vi.fn();
    render(
      <HoverCard open onOpenChange={onOpenChange}>
        <HoverCardTrigger href="#status">Status</HoverCardTrigger>
        <HoverCardContent showArrow={false}>Open content</HoverCardContent>
      </HoverCard>,
    );
    expect(screen.getByText('Open content')).toBeInTheDocument();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('renders layout helpers', () => {
    render(
      <HoverCard defaultOpen>
        <HoverCardTrigger href="#team">Team</HoverCardTrigger>
        <HoverCardContent showArrow={false}>
          <HoverCardHeader>
            <HoverCardTitle>Design Systems</HoverCardTitle>
            <HoverCardDescription>Reusable primitives and guidelines.</HoverCardDescription>
          </HoverCardHeader>
          <HoverCardBody>Three contributors active this week.</HoverCardBody>
          <HoverCardFooter>Updated today</HoverCardFooter>
        </HoverCardContent>
      </HoverCard>,
    );
    expect(screen.getByText('Design Systems')).toHaveClass('zy-hover-card__title');
    expect(screen.getByText('Reusable primitives and guidelines.')).toHaveClass(
      'zy-hover-card__description',
    );
    expect(screen.getByText('Three contributors active this week.')).toHaveClass(
      'zy-hover-card__body',
    );
    expect(screen.getByText('Updated today')).toHaveClass('zy-hover-card__footer');
  });

  it('forwards ref to trigger and content', () => {
    const triggerRef = vi.fn();
    const contentRef = vi.fn();
    render(
      <HoverCard defaultOpen>
        <HoverCardTrigger ref={triggerRef} href="#ref">
          Ref trigger
        </HoverCardTrigger>
        <HoverCardContent ref={contentRef} showArrow={false}>
          Ref content
        </HoverCardContent>
      </HoverCard>,
    );
    expect(triggerRef).toHaveBeenCalledWith(expect.any(HTMLAnchorElement));
    expect(contentRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('passes className through to content', () => {
    render(
      <HoverCard defaultOpen>
        <HoverCardTrigger href="#class">Class trigger</HoverCardTrigger>
        <HoverCardContent className="custom-hover-card" showArrow={false} data-testid="card">
          Class content
        </HoverCardContent>
      </HoverCard>,
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('zy-hover-card__content');
    expect(card).toHaveClass('custom-hover-card');
  });
});
