import type { Meta, StoryObj } from '@storybook/react';
import { VisuallyHidden, Spinner, Separator, IconSlot } from '@zhuiye/ui';

const StarIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const meta: Meta = {
  title: 'Primitives/FoundationPrimitives',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Foundation primitives provide accessible building blocks: VisuallyHidden for screen-reader-only content, Spinner for loading indicators, Separator for visual and semantic dividers, and IconSlot for icon wrappers.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const PrimitivesOverview: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        fontFamily: 'var(--zy-font-family)',
      }}
    >
      <section>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>VisuallyHidden</h3>
        <p
          style={{
            margin: '0 0 8px',
            fontSize: '13px',
            color: 'var(--zy-muted-foreground)',
          }}
        >
          Provides text that is only available to screen readers.
        </p>
        <button
          type="button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            border: '1px solid var(--zy-border)',
            borderRadius: 'var(--zy-radius-md)',
            background: 'var(--zy-surface)',
            cursor: 'pointer',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <VisuallyHidden>Add item</VisuallyHidden>
        </button>
      </section>

      <Separator />

      <section>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Spinner</h3>
        <p
          style={{
            margin: '0 0 8px',
            fontSize: '13px',
            color: 'var(--zy-muted-foreground)',
          }}
        >
          Accessible loading indicators in three sizes.
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </section>

      <Separator />

      <section>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Separator</h3>
        <p
          style={{
            margin: '0 0 8px',
            fontSize: '13px',
            color: 'var(--zy-muted-foreground)',
          }}
        >
          Horizontal and vertical dividers, decorative and semantic.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '250px' }}>
          <span>Section A</span>
          <Separator />
          <span>Section B</span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            height: '32px',
            marginTop: '16px',
          }}
        >
          <span>Left</span>
          <Separator orientation="vertical" />
          <span>Right</span>
        </div>
      </section>

      <Separator />

      <section>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>IconSlot</h3>
        <p
          style={{
            margin: '0 0 8px',
            fontSize: '13px',
            color: 'var(--zy-muted-foreground)',
          }}
        >
          Consistent icon sizing and accessible labeling.
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <IconSlot size="sm">
            <StarIcon />
          </IconSlot>
          <IconSlot size="md">
            <StarIcon />
          </IconSlot>
          <IconSlot size="lg">
            <StarIcon />
          </IconSlot>
          <IconSlot decorative={false} label="Favorite">
            <StarIcon />
          </IconSlot>
        </div>
      </section>
    </div>
  ),
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
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '32px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
        fontFamily: 'var(--zy-font-family)',
      }}
    >
      <section>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>VisuallyHidden</h3>
        <p
          style={{
            margin: '0 0 8px',
            fontSize: '13px',
            color: 'var(--zy-muted-foreground)',
          }}
        >
          Provides text that is only available to screen readers.
        </p>
        <button
          type="button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            border: '1px solid var(--zy-border)',
            borderRadius: 'var(--zy-radius-md)',
            background: 'var(--zy-surface)',
            color: 'var(--zy-foreground)',
            cursor: 'pointer',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <VisuallyHidden>Add item</VisuallyHidden>
        </button>
      </section>

      <Separator />

      <section>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Spinner</h3>
        <p
          style={{
            margin: '0 0 8px',
            fontSize: '13px',
            color: 'var(--zy-muted-foreground)',
          }}
        >
          Accessible loading indicators in three sizes.
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </section>

      <Separator />

      <section>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>Separator</h3>
        <p
          style={{
            margin: '0 0 8px',
            fontSize: '13px',
            color: 'var(--zy-muted-foreground)',
          }}
        >
          Horizontal and vertical dividers, decorative and semantic.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '250px' }}>
          <span>Section A</span>
          <Separator />
          <span>Section B</span>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            height: '32px',
            marginTop: '16px',
          }}
        >
          <span>Left</span>
          <Separator orientation="vertical" />
          <span>Right</span>
        </div>
      </section>

      <Separator />

      <section>
        <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>IconSlot</h3>
        <p
          style={{
            margin: '0 0 8px',
            fontSize: '13px',
            color: 'var(--zy-muted-foreground)',
          }}
        >
          Consistent icon sizing and accessible labeling.
        </p>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <IconSlot size="sm">
            <StarIcon />
          </IconSlot>
          <IconSlot size="md">
            <StarIcon />
          </IconSlot>
          <IconSlot size="lg">
            <StarIcon />
          </IconSlot>
          <IconSlot decorative={false} label="Favorite">
            <StarIcon />
          </IconSlot>
        </div>
      </section>
    </div>
  ),
};
