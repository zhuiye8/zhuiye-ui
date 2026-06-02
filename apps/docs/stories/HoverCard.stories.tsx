import type { Meta, StoryObj } from '@storybook/react';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardHeader,
  HoverCardBody,
  HoverCardFooter,
  HoverCardTitle,
  HoverCardDescription,
} from '@zhuiye/ui';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

function ProfilePreview() {
  return (
    <HoverCardContent size="md">
      <HoverCardHeader>
        <div
          aria-hidden="true"
          style={{
            display: 'inline-grid',
            placeItems: 'center',
            width: 'var(--zy-spacing-12)',
            height: 'var(--zy-spacing-12)',
            borderRadius: 'var(--zy-radius-full)',
            backgroundColor: 'var(--zy-primary)',
            color: 'var(--zy-primary-foreground)',
            fontWeight: 'var(--zy-font-weight-semibold)',
          }}
        >
          ZY
        </div>
        <HoverCardTitle>Zhuiye Design Systems</HoverCardTitle>
        <HoverCardDescription>
          Production primitives, tokens, and accessible interaction patterns for product UI.
        </HoverCardDescription>
      </HoverCardHeader>
      <HoverCardFooter>
        <span>Component suite</span>
        <span>438 tests</span>
      </HoverCardFooter>
    </HoverCardContent>
  );
}

export const Default: Story = {
  render: () => (
    <HoverCard defaultOpen openDelay={0} closeDelay={100}>
      <HoverCardTrigger href="#zhuiye">Zhuiye UI</HoverCardTrigger>
      <ProfilePreview />
    </HoverCard>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'calc(var(--zy-spacing-20) + var(--zy-spacing-12))',
        justifyItems: 'start',
        minWidth: 'min(720px, calc(100vw - var(--zy-spacing-8)))',
      }}
    >
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <HoverCard key={size} defaultOpen openDelay={0}>
          <HoverCardTrigger href={`#${size}`}>{size}</HoverCardTrigger>
          <HoverCardContent size={size} showArrow={false} side="bottom" align="start">
            <HoverCardHeader>
              <HoverCardTitle>{size.toUpperCase()} card</HoverCardTitle>
              <HoverCardDescription>
                Compact previews keep related details close to the trigger.
              </HoverCardDescription>
            </HoverCardHeader>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
};

export const RichContent: Story = {
  render: () => (
    <HoverCard defaultOpen openDelay={0}>
      <HoverCardTrigger href="#release">Release health</HoverCardTrigger>
      <HoverCardContent size="lg" side="right">
        <HoverCardHeader>
          <HoverCardTitle>Release health</HoverCardTitle>
          <HoverCardDescription>
            Current build, test, and documentation signals across the component library.
          </HoverCardDescription>
        </HoverCardHeader>
        <HoverCardBody>
          {[
            ['Build', 'Passing'],
            ['Tests', '438 passing'],
            ['Docs', 'Storybook ready'],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 'var(--zy-spacing-6)',
                paddingBlock: 'var(--zy-spacing-1)',
                fontSize: 'var(--zy-font-size-sm)',
              }}
            >
              <span style={{ color: 'var(--zy-muted-foreground)' }}>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </HoverCardBody>
      </HoverCardContent>
    </HoverCard>
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
        padding: 'var(--zy-spacing-6)',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
      }}
    >
      <HoverCard defaultOpen openDelay={0}>
        <HoverCardTrigger href="#dark-hover">Dark preview</HoverCardTrigger>
        <ProfilePreview />
      </HoverCard>
    </div>
  ),
};
