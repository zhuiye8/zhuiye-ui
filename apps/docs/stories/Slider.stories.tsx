import type { Meta, StoryObj } from '@storybook/react';
import { useState, type ReactNode } from 'react';
import { Slider, SliderTrack, SliderRange, SliderThumb } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

function SliderFrame({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gap: 'var(--zy-spacing-3)',
        width: 'min(440px, calc(100vw - var(--zy-spacing-8)))',
      }}
    >
      {children}
    </div>
  );
}

function ValueLabel({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        color: 'var(--zy-muted-foreground)',
        fontSize: 'var(--zy-font-size-sm)',
      }}
    >
      {children}
    </span>
  );
}

export const Default: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <SliderFrame>
        <ValueLabel>{copy.slider.volume}</ValueLabel>
        <Slider defaultValue={[48]} max={100} fullWidth>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb aria-label={copy.slider.volume} />
        </Slider>
      </SliderFrame>
    );
  },
};

export const Range: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <SliderFrame>
        <ValueLabel>{copy.slider.priceRange}</ValueLabel>
        <Slider
          defaultValue={[24, 72]}
          minStepsBetweenThumbs={4}
          max={100}
          tone="success"
          fullWidth
        >
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb aria-label={copy.slider.minPrice} />
          <SliderThumb aria-label={copy.slider.maxPrice} />
        </Slider>
      </SliderFrame>
    );
  },
};

export const TonesAndSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--zy-spacing-6)',
        width: 'min(460px, calc(100vw - var(--zy-spacing-8)))',
      }}
    >
      {[
        ['primary', 'md', 42],
        ['success', 'sm', 58],
        ['warning', 'lg', 64],
        ['danger', 'md', 32],
        ['neutral', 'md', 78],
      ].map(([tone, size, value]) => (
        <SliderFrame key={`${tone}-${size}`}>
          <ValueLabel>
            {tone} / {size}
          </ValueLabel>
          <Slider
            defaultValue={[value as number]}
            tone={tone as 'primary' | 'success' | 'warning' | 'danger' | 'neutral'}
            size={size as 'sm' | 'md' | 'lg'}
            max={100}
            fullWidth
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb aria-label={`${tone} value`} />
          </Slider>
        </SliderFrame>
      ))}
    </div>
  ),
};

export const Vertical: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'end',
          gap: 'var(--zy-spacing-8)',
          height: '220px',
        }}
      >
        {[
          [copy.slider.low, 28],
          [copy.slider.medium, 56],
          [copy.slider.high, 82],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              display: 'grid',
              justifyItems: 'center',
              gap: 'var(--zy-spacing-3)',
            }}
          >
            <Slider defaultValue={[value as number]} orientation="vertical" max={100}>
              <SliderTrack>
                <SliderRange />
              </SliderTrack>
              <SliderThumb aria-label={`${label} level`} />
            </Slider>
            <ValueLabel>{label}</ValueLabel>
          </div>
        ))}
      </div>
    );
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const copy = useStoryCopy();
    const [value, setValue] = useState([36]);
    return (
      <SliderFrame>
        <ValueLabel>
          {copy.slider.opacity}: {value[0]}%
        </ValueLabel>
        <Slider value={value} onValueChange={setValue} max={100} fullWidth>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb aria-label={copy.slider.opacity} />
        </Slider>
      </SliderFrame>
    );
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        data-theme="dark"
        style={{
          padding: 'var(--zy-spacing-6)',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: 'var(--zy-radius-md)',
          width: 'min(500px, calc(100vw - var(--zy-spacing-8)))',
        }}
      >
        <SliderFrame>
          <ValueLabel>{copy.slider.darkSlider}</ValueLabel>
          <Slider defaultValue={[62]} tone="primary" max={100} fullWidth>
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb aria-label={copy.slider.darkSlider} />
          </Slider>
        </SliderFrame>
      </div>
    );
  },
};
