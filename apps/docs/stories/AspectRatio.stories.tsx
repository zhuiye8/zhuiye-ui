import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio, AspectRatioMedia } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

function MediaTile({ label, detail }: { label: string; detail: string }) {
  return (
    <AspectRatioMedia>
      <div
        style={{
          position: 'absolute',
          inset: 'var(--zy-spacing-4)',
          display: 'grid',
          alignContent: 'end',
          gap: 'var(--zy-spacing-2)',
          padding: 'var(--zy-spacing-4)',
          border: '1px solid var(--zy-border)',
          borderRadius: 'var(--zy-radius-md)',
          backgroundColor: 'var(--zy-surface-elevated)',
          boxShadow: 'var(--zy-shadow-sm)',
        }}
      >
        <strong>{label}</strong>
        <span style={{ color: 'var(--zy-muted-foreground)', fontSize: 'var(--zy-font-size-sm)' }}>
          {detail}
        </span>
      </div>
    </AspectRatioMedia>
  );
}

export const Default: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ width: 'min(520px, calc(100vw - var(--zy-spacing-8)))' }}>
        <AspectRatio ratio={16 / 9}>
          <MediaTile
            label={copy.aspectRatio.heroPreview}
            detail={copy.aspectRatio.responsiveFrame}
          />
        </AspectRatio>
      </div>
    );
  },
};

export const Ratios: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'var(--zy-spacing-4)',
          width: 'min(780px, calc(100vw - var(--zy-spacing-8)))',
        }}
      >
        {[
          ['1:1', 1],
          ['4:3', 4 / 3],
          ['16:9', 16 / 9],
        ].map(([label, ratio]) => (
          <AspectRatio key={label} ratio={ratio as number} variant="framed">
            <MediaTile label={label as string} detail={copy.aspectRatio.presetFrame} />
          </AspectRatio>
        ))}
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'grid',
          gap: 'var(--zy-spacing-4)',
          width: 'min(540px, calc(100vw - var(--zy-spacing-8)))',
        }}
      >
        {(['plain', 'surface', 'framed'] as const).map((variant) => (
          <AspectRatio key={variant} ratio={21 / 9} variant={variant} radius="lg">
            <MediaTile label={variant} detail={copy.aspectRatio.widePreview} />
          </AspectRatio>
        ))}
      </div>
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
          boxSizing: 'border-box',
          width: 'min(560px, calc(100vw - var(--zy-spacing-8)))',
        }}
      >
        <AspectRatio ratio={16 / 9} variant="framed" radius="lg">
          <MediaTile
            label={copy.aspectRatio.darkMediaFrame}
            detail={copy.aspectRatio.tokenPreview}
          />
        </AspectRatio>
      </div>
    );
  },
};
