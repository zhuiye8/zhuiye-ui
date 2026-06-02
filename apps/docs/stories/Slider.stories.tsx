import type { Meta, StoryObj } from '@storybook/react';
import { useState, type ReactNode } from 'react';
import { Slider, SliderTrack, SliderRange, SliderThumb } from '@zhuiye/ui';

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
  render: () => (
    <SliderFrame>
      <ValueLabel>Volume</ValueLabel>
      <Slider defaultValue={[48]} max={100} fullWidth>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb aria-label="Volume" />
      </Slider>
    </SliderFrame>
  ),
};

export const Range: Story = {
  render: () => (
    <SliderFrame>
      <ValueLabel>Price range</ValueLabel>
      <Slider defaultValue={[24, 72]} minStepsBetweenThumbs={4} max={100} tone="success" fullWidth>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb aria-label="Minimum price" />
        <SliderThumb aria-label="Maximum price" />
      </Slider>
    </SliderFrame>
  ),
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
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'end',
        gap: 'var(--zy-spacing-8)',
        height: '220px',
      }}
    >
      {[
        ['Low', 28],
        ['Medium', 56],
        ['High', 82],
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
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState([36]);
    return (
      <SliderFrame>
        <ValueLabel>Opacity: {value[0]}%</ValueLabel>
        <Slider value={value} onValueChange={setValue} max={100} fullWidth>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb aria-label="Opacity" />
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
  render: () => (
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
        <ValueLabel>Dark mode slider</ValueLabel>
        <Slider defaultValue={[62]} tone="primary" max={100} fullWidth>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb aria-label="Dark mode slider" />
        </Slider>
      </SliderFrame>
    </div>
  ),
};
