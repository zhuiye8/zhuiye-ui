import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AspectRatio, AspectRatioMedia } from './AspectRatio';

describe('AspectRatio', () => {
  it('renders with default classes', () => {
    render(
      <AspectRatio data-testid="ratio">
        <AspectRatioMedia>Preview</AspectRatioMedia>
      </AspectRatio>,
    );
    expect(screen.getByTestId('ratio')).toHaveClass('zy-aspect-ratio');
    expect(screen.getByTestId('ratio')).toHaveClass('zy-aspect-ratio--surface');
    expect(screen.getByText('Preview')).toHaveClass('zy-aspect-ratio__media');
    expect(screen.getByText('Preview')).toHaveClass('zy-aspect-ratio__media--cover');
  });

  it('applies variant, radius, and media fit classes', () => {
    render(
      <AspectRatio variant="framed" radius="lg" ratio={16 / 9} data-testid="ratio">
        <AspectRatioMedia fit="contain" data-testid="media">
          Media
        </AspectRatioMedia>
      </AspectRatio>,
    );
    expect(screen.getByTestId('ratio')).toHaveClass('zy-aspect-ratio--framed');
    expect(screen.getByTestId('ratio')).toHaveClass('zy-aspect-ratio--radius-lg');
    expect(screen.getByTestId('media')).toHaveClass('zy-aspect-ratio__media--contain');
  });

  it('passes className through', () => {
    render(
      <AspectRatio className="custom-ratio" data-testid="ratio">
        <AspectRatioMedia className="custom-media" data-testid="media" />
      </AspectRatio>,
    );
    expect(screen.getByTestId('ratio')).toHaveClass('custom-ratio');
    expect(screen.getByTestId('media')).toHaveClass('custom-media');
  });

  it('forwards refs', () => {
    const ratioRef = vi.fn();
    const mediaRef = vi.fn();
    render(
      <AspectRatio ref={ratioRef}>
        <AspectRatioMedia ref={mediaRef}>Preview</AspectRatioMedia>
      </AspectRatio>,
    );
    expect(ratioRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(mediaRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });
});
