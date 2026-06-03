import type { Meta, StoryObj } from '@storybook/react';
import { VisuallyHidden, Spinner, Separator, IconSlot } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

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
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          fontFamily: 'var(--zy-font-family)',
        }}
      >
        <section>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.foundation.visuallyHidden}
          </h3>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '13px',
              color: 'var(--zy-muted-foreground)',
            }}
          >
            {copy.foundation.visuallyHiddenDesc}
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
              <path
                d="M8 1v14M1 8h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <VisuallyHidden>{copy.foundation.addItem}</VisuallyHidden>
          </button>
        </section>

        <Separator />

        <section>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.foundation.spinner}
          </h3>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '13px',
              color: 'var(--zy-muted-foreground)',
            }}
          >
            {copy.foundation.spinnerDesc}
          </p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </section>

        <Separator />

        <section>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.foundation.separator}
          </h3>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '13px',
              color: 'var(--zy-muted-foreground)',
            }}
          >
            {copy.foundation.separatorDesc}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '250px' }}>
            <span>{copy.foundation.sectionA}</span>
            <Separator />
            <span>{copy.foundation.sectionB}</span>
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
            <span>{copy.foundation.left}</span>
            <Separator orientation="vertical" />
            <span>{copy.foundation.right}</span>
          </div>
        </section>

        <Separator />

        <section>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.foundation.iconSlot}
          </h3>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '13px',
              color: 'var(--zy-muted-foreground)',
            }}
          >
            {copy.foundation.iconSlotDesc}
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
            <IconSlot decorative={false} label={copy.foundation.favorite}>
              <StarIcon />
            </IconSlot>
          </div>
        </section>
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
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.foundation.visuallyHidden}
          </h3>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '13px',
              color: 'var(--zy-muted-foreground)',
            }}
          >
            {copy.foundation.visuallyHiddenDesc}
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
              <path
                d="M8 1v14M1 8h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <VisuallyHidden>{copy.foundation.addItem}</VisuallyHidden>
          </button>
        </section>

        <Separator />

        <section>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.foundation.spinner}
          </h3>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '13px',
              color: 'var(--zy-muted-foreground)',
            }}
          >
            {copy.foundation.spinnerDesc}
          </p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </section>

        <Separator />

        <section>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.foundation.separator}
          </h3>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '13px',
              color: 'var(--zy-muted-foreground)',
            }}
          >
            {copy.foundation.separatorDesc}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '250px' }}>
            <span>{copy.foundation.sectionA}</span>
            <Separator />
            <span>{copy.foundation.sectionB}</span>
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
            <span>{copy.foundation.left}</span>
            <Separator orientation="vertical" />
            <span>{copy.foundation.right}</span>
          </div>
        </section>

        <Separator />

        <section>
          <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600 }}>
            {copy.foundation.iconSlot}
          </h3>
          <p
            style={{
              margin: '0 0 8px',
              fontSize: '13px',
              color: 'var(--zy-muted-foreground)',
            }}
          >
            {copy.foundation.iconSlotDesc}
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
            <IconSlot decorative={false} label={copy.foundation.favorite}>
              <StarIcon />
            </IconSlot>
          </div>
        </section>
      </div>
    );
  },
};
