import type { Meta, StoryObj } from '@storybook/react';
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

function makeReleases(titles: readonly string[]) {
  return Array.from({ length: 18 }, (_, index) => ({
    version: `v0.${index + 8}.0`,
    title: titles[index % 4],
  }));
}

function Scrollbars() {
  return (
    <>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </>
  );
}

function ReleaseList({ titles }: { titles: readonly string[] }) {
  const releases = makeReleases(titles);
  return (
    <div style={{ display: 'grid', gap: 'var(--zy-spacing-2)', padding: 'var(--zy-spacing-4)' }}>
      {releases.map((release) => (
        <div
          key={release.version}
          style={{
            display: 'grid',
            gap: 'var(--zy-spacing-1)',
            padding: 'var(--zy-spacing-3)',
            border: '1px solid var(--zy-border)',
            borderRadius: 'var(--zy-radius-sm)',
            backgroundColor: 'var(--zy-surface-elevated)',
          }}
        >
          <strong>{release.version}</strong>
          <span style={{ color: 'var(--zy-muted-foreground)', fontSize: 'var(--zy-font-size-sm)' }}>
            {release.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export const Default: Story = {
  render: () => {
    const copy = useStoryCopy();
    const titles = [
      copy.scrollArea.navigationRefresh,
      copy.scrollArea.formPolish,
      copy.scrollArea.overlayPrimitives,
      copy.scrollArea.choiceControls,
    ] as const;
    return (
      <div style={{ width: 'min(360px, calc(100vw - var(--zy-spacing-8)))' }}>
        <ScrollArea variant="framed" size="md" type="always">
          <ScrollAreaViewport>
            <ReleaseList titles={titles} />
          </ScrollAreaViewport>
          <Scrollbars />
        </ScrollArea>
      </div>
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const copy = useStoryCopy();
    const titles = [
      copy.scrollArea.navigationRefresh,
      copy.scrollArea.formPolish,
      copy.scrollArea.overlayPrimitives,
      copy.scrollArea.choiceControls,
    ] as const;
    const releases = makeReleases(titles);
    return (
      <div style={{ width: 'min(520px, calc(100vw - var(--zy-spacing-8)))' }}>
        <ScrollArea variant="framed" size="sm" type="always">
          <ScrollAreaViewport>
            <div
              style={{
                display: 'grid',
                gridAutoColumns: '180px',
                gridAutoFlow: 'column',
                gap: 'var(--zy-spacing-3)',
                width: 'max-content',
                padding: 'var(--zy-spacing-4)',
              }}
            >
              {releases.slice(0, 8).map((release) => (
                <div
                  key={release.version}
                  style={{
                    display: 'grid',
                    alignContent: 'space-between',
                    minHeight: '110px',
                    padding: 'var(--zy-spacing-3)',
                    border: '1px solid var(--zy-border)',
                    borderRadius: 'var(--zy-radius-sm)',
                    backgroundColor: 'var(--zy-surface-elevated)',
                  }}
                >
                  <strong>{release.version}</strong>
                  <span style={{ color: 'var(--zy-muted-foreground)' }}>{release.title}</span>
                </div>
              ))}
            </div>
          </ScrollAreaViewport>
          <Scrollbars />
        </ScrollArea>
      </div>
    );
  },
};

export const VariantsAndSizes: Story = {
  render: () => {
    const copy = useStoryCopy();
    const titles = [
      copy.scrollArea.navigationRefresh,
      copy.scrollArea.formPolish,
      copy.scrollArea.overlayPrimitives,
      copy.scrollArea.choiceControls,
    ] as const;
    return (
      <div
        style={{
          display: 'grid',
          gap: 'var(--zy-spacing-5)',
          width: 'min(420px, calc(100vw - var(--zy-spacing-8)))',
        }}
      >
        {[
          ['surface', 'sm'],
          ['framed', 'md'],
          ['plain', 'lg'],
        ].map(([variant, size]) => (
          <ScrollArea
            key={`${variant}-${size}`}
            variant={variant as 'plain' | 'surface' | 'framed'}
            size={size as 'sm' | 'md' | 'lg'}
            type="always"
          >
            <ScrollAreaViewport>
              <ReleaseList titles={titles} />
            </ScrollAreaViewport>
            <Scrollbars />
          </ScrollArea>
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
    const titles = [
      copy.scrollArea.navigationRefresh,
      copy.scrollArea.formPolish,
      copy.scrollArea.overlayPrimitives,
      copy.scrollArea.choiceControls,
    ] as const;
    return (
      <div
        data-theme="dark"
        style={{
          padding: 'var(--zy-spacing-6)',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: 'var(--zy-radius-md)',
          boxSizing: 'border-box',
          width: 'min(420px, calc(100vw - var(--zy-spacing-8)))',
        }}
      >
        <ScrollArea variant="framed" size="md" type="always">
          <ScrollAreaViewport>
            <ReleaseList titles={titles} />
          </ScrollAreaViewport>
          <Scrollbars />
        </ScrollArea>
      </div>
    );
  },
};
