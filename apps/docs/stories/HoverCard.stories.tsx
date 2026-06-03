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
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

function ProfilePreview() {
  const copy = useStoryCopy();
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
        <HoverCardTitle>{copy.hoverCard.zhuiyeDesign}</HoverCardTitle>
        <HoverCardDescription>{copy.hoverCard.zhuiyeDesc}</HoverCardDescription>
      </HoverCardHeader>
      <HoverCardFooter>
        <span>{copy.hoverCard.componentSuite}</span>
        <span>438 {copy.hoverCard.tests}</span>
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
  render: () => {
    const copy = useStoryCopy();
    return (
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
                <HoverCardDescription>{copy.hoverCard.compactPreview}</HoverCardDescription>
              </HoverCardHeader>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    );
  },
};

export const RichContent: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <HoverCard defaultOpen openDelay={0}>
        <HoverCardTrigger href="#release">{copy.hoverCard.releaseHealth}</HoverCardTrigger>
        <HoverCardContent size="lg" side="right">
          <HoverCardHeader>
            <HoverCardTitle>{copy.hoverCard.releaseHealth}</HoverCardTitle>
            <HoverCardDescription>{copy.hoverCard.releaseDesc}</HoverCardDescription>
          </HoverCardHeader>
          <HoverCardBody>
            {[
              [copy.hoverCard.build, copy.hoverCard.passing],
              [copy.hoverCard.testsLabel, `438 ${copy.hoverCard.testsPassing}`],
              [copy.hoverCard.docs, copy.hoverCard.storybookReady],
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
        }}
      >
        <HoverCard defaultOpen openDelay={0}>
          <HoverCardTrigger href="#dark-hover">{copy.hoverCard.darkPreview}</HoverCardTrigger>
          <ProfilePreview />
        </HoverCard>
      </div>
    );
  },
};
