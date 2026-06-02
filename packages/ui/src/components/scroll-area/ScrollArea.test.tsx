import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaCorner,
} from './ScrollArea';

function renderScrollArea() {
  return render(
    <ScrollArea variant="framed" size="sm" type="always" data-testid="root">
      <ScrollAreaViewport data-testid="viewport">
        <div style={{ height: '600px', width: '600px' }}>Scrollable content</div>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        forceMount
        orientation="vertical"
        data-testid="vertical-scrollbar"
      ></ScrollAreaScrollbar>
      <ScrollAreaScrollbar
        forceMount
        orientation="horizontal"
        data-testid="horizontal-scrollbar"
      ></ScrollAreaScrollbar>
      <ScrollAreaCorner data-testid="corner" />
    </ScrollArea>,
  );
}

describe('ScrollArea', () => {
  it('renders root and viewport classes', () => {
    renderScrollArea();
    expect(screen.getByTestId('root')).toHaveClass('zy-scroll-area');
    expect(screen.getByTestId('root')).toHaveClass('zy-scroll-area--framed');
    expect(screen.getByTestId('root')).toHaveClass('zy-scroll-area--sm');
    expect(screen.getByTestId('viewport')).toHaveClass('zy-scroll-area__viewport');
  });

  it('renders vertical and horizontal scrollbars', () => {
    renderScrollArea();
    expect(screen.getByTestId('vertical-scrollbar')).toHaveClass('zy-scroll-area__scrollbar');
    expect(screen.getByTestId('vertical-scrollbar')).toHaveAttribute(
      'data-orientation',
      'vertical',
    );
    expect(screen.getByTestId('horizontal-scrollbar')).toHaveAttribute(
      'data-orientation',
      'horizontal',
    );
  });

  it('passes className through', () => {
    render(
      <ScrollArea className="custom-scroll" data-testid="root">
        <ScrollAreaViewport className="custom-viewport" data-testid="viewport" />
      </ScrollArea>,
    );
    expect(screen.getByTestId('root')).toHaveClass('custom-scroll');
    expect(screen.getByTestId('viewport')).toHaveClass('custom-viewport');
  });

  it('forwards refs', () => {
    const rootRef = vi.fn();
    const viewportRef = vi.fn();
    render(
      <ScrollArea ref={rootRef}>
        <ScrollAreaViewport ref={viewportRef}>Content</ScrollAreaViewport>
      </ScrollArea>,
    );
    expect(rootRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(viewportRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});
