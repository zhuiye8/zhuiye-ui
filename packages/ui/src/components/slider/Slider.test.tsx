import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Slider, SliderTrack, SliderRange, SliderThumb } from './Slider';

function renderSlider(opts?: {
  defaultValue?: number[];
  value?: number[];
  onValueChange?: (value: number[]) => void;
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
}) {
  return render(
    <Slider
      defaultValue={opts?.defaultValue ?? [40]}
      value={opts?.value}
      onValueChange={opts?.onValueChange}
      orientation={opts?.orientation}
      disabled={opts?.disabled}
      max={100}
      step={1}
    >
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb aria-label="Volume" />
    </Slider>,
  );
}

describe('Slider', () => {
  it('renders an accessible slider thumb with default value', () => {
    renderSlider();
    const slider = screen.getByRole('slider', { name: 'Volume' });
    expect(slider).toHaveAttribute('aria-valuenow', '40');
    expect(slider).toHaveClass('zy-slider__thumb');
  });

  it('supports keyboard value changes', async () => {
    const user = userEvent.setup();
    renderSlider();
    const slider = screen.getByRole('slider', { name: 'Volume' });
    slider.focus();
    await user.keyboard('{ArrowRight}');
    await waitFor(() => {
      expect(slider).toHaveAttribute('aria-valuenow', '41');
    });
  });

  it('controlled value calls onValueChange without changing rendered value', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderSlider({ value: [20], onValueChange });
    const slider = screen.getByRole('slider', { name: 'Volume' });
    slider.focus();
    await user.keyboard('{ArrowRight}');
    expect(onValueChange).toHaveBeenCalledWith([21]);
    expect(slider).toHaveAttribute('aria-valuenow', '20');
  });

  it('supports multiple thumbs for range selection', () => {
    render(
      <Slider defaultValue={[20, 80]} minStepsBetweenThumbs={1}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb aria-label="Minimum price" />
        <SliderThumb aria-label="Maximum price" />
      </Slider>,
    );

    expect(screen.getByRole('slider', { name: 'Minimum price' })).toHaveAttribute(
      'aria-valuenow',
      '20',
    );
    expect(screen.getByRole('slider', { name: 'Maximum price' })).toHaveAttribute(
      'aria-valuenow',
      '80',
    );
  });

  it('applies vertical orientation data attributes', () => {
    renderSlider({ orientation: 'vertical' });
    expect(document.querySelector('.zy-slider')).toHaveAttribute('data-orientation', 'vertical');
    expect(document.querySelector('.zy-slider__track')).toHaveAttribute(
      'data-orientation',
      'vertical',
    );
  });

  it('applies disabled state', () => {
    renderSlider({ disabled: true });
    expect(document.querySelector('.zy-slider')).toHaveAttribute('data-disabled');
    expect(screen.getByRole('slider', { name: 'Volume' })).toHaveAttribute('data-disabled');
  });

  it('forwards refs to compound parts', () => {
    const rootRef = vi.fn();
    const trackRef = vi.fn();
    const rangeRef = vi.fn();
    const thumbRef = vi.fn();

    render(
      <Slider ref={rootRef} defaultValue={[50]}>
        <SliderTrack ref={trackRef}>
          <SliderRange ref={rangeRef} />
        </SliderTrack>
        <SliderThumb ref={thumbRef} aria-label="Amount" />
      </Slider>,
    );

    expect(rootRef).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
    expect(trackRef).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
    expect(rangeRef).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
    expect(thumbRef).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
  });

  it('passes className and variant classes through', () => {
    render(
      <Slider size="lg" tone="success" fullWidth defaultValue={[30]} className="custom-slider">
        <SliderTrack className="custom-track">
          <SliderRange className="custom-range" />
        </SliderTrack>
        <SliderThumb className="custom-thumb" aria-label="Completion" />
      </Slider>,
    );

    expect(document.querySelector('.zy-slider')).toHaveClass(
      'zy-slider--lg',
      'zy-slider--success',
      'zy-slider--full',
      'custom-slider',
    );
    expect(document.querySelector('.zy-slider__track')).toHaveClass('custom-track');
    expect(document.querySelector('.zy-slider__range')).toHaveClass('custom-range');
    expect(screen.getByRole('slider', { name: 'Completion' })).toHaveClass('custom-thumb');
  });
});
