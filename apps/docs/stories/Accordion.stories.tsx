import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  Button,
} from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Accordion
        type="single"
        collapsible
        defaultValue="faq-1"
        style={{ width: 'min(500px, 100%)' }}
      >
        <AccordionItem value="faq-1">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.whatIs}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.whatIsAnswer}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.isAccessible}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.isAccessibleAnswer}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.canUseInProduction}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.canUseInProductionAnswer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Accordion type="multiple" defaultValue={['s1', 's3']} style={{ width: 'min(500px, 100%)' }}>
        <AccordionItem value="s1">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.shippingInfo}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.shippingAnswer}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="s2">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.returnPolicy}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.returnAnswer}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="s3">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.warrantyDetails}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.warrantyAnswer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-8)',
          width: '500px',
          maxWidth: 'calc(100vw - 32px)',
        }}
      >
        <div>
          <p
            style={{
              fontSize: 'var(--zy-font-size-xs)',
              color: 'var(--zy-muted-foreground)',
              margin: '0 0 var(--zy-spacing-2)',
              fontWeight: 'var(--zy-font-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {copy.accordion.lineVariant}
          </p>
          <Accordion type="single" collapsible variant="line" style={{ width: '100%' }}>
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>{copy.accordion.sectionA}</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>{copy.accordion.lineContent}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionHeader>
                <AccordionTrigger>{copy.accordion.sectionB}</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>{copy.accordion.anotherLine}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <p
            style={{
              fontSize: 'var(--zy-font-size-xs)',
              color: 'var(--zy-muted-foreground)',
              margin: '0 0 var(--zy-spacing-2)',
              fontWeight: 'var(--zy-font-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {copy.accordion.card}
          </p>
          <Accordion type="single" collapsible variant="card" style={{ width: '100%' }}>
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>{copy.accordion.sectionA}</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>{copy.accordion.cardContent}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionHeader>
                <AccordionTrigger>{copy.accordion.sectionB}</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>{copy.accordion.eachCard}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <p
            style={{
              fontSize: 'var(--zy-font-size-xs)',
              color: 'var(--zy-muted-foreground)',
              margin: '0 0 var(--zy-spacing-2)',
              fontWeight: 'var(--zy-font-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {copy.accordion.contained}
          </p>
          <Accordion type="single" collapsible variant="contained" style={{ width: '100%' }}>
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>{copy.accordion.sectionA}</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>{copy.accordion.containedContent}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionHeader>
                <AccordionTrigger>{copy.accordion.sectionB}</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>{copy.accordion.pillContainer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-8)',
          width: 'min(500px, 100%)',
        }}
      >
        <div>
          <p
            style={{
              fontSize: 'var(--zy-font-size-xs)',
              color: 'var(--zy-muted-foreground)',
              margin: '0 0 var(--zy-spacing-2)',
              fontWeight: 'var(--zy-font-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {copy.accordion.small}
          </p>
          <Accordion type="single" collapsible size="sm" variant="card">
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>{copy.accordion.smallAccordion}</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>{copy.accordion.compactContent}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <p
            style={{
              fontSize: 'var(--zy-font-size-xs)',
              color: 'var(--zy-muted-foreground)',
              margin: '0 0 var(--zy-spacing-2)',
              fontWeight: 'var(--zy-font-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {copy.accordion.mediumDefault}
          </p>
          <Accordion type="single" collapsible size="md" variant="card">
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>{copy.accordion.mediumAccordion}</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>{copy.accordion.standardContent}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <p
            style={{
              fontSize: 'var(--zy-font-size-xs)',
              color: 'var(--zy-muted-foreground)',
              margin: '0 0 var(--zy-spacing-2)',
              fontWeight: 'var(--zy-font-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {copy.accordion.large}
          </p>
          <Accordion type="single" collapsible size="lg" variant="card">
            <AccordionItem value="a">
              <AccordionHeader>
                <AccordionTrigger>{copy.accordion.largeAccordion}</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>{copy.accordion.spaciousContent}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const copy = useStoryCopy();
    const [value, setValue] = useState('item-1');
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          width: 'min(500px, 100%)',
        }}
      >
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          {copy.accordion.active}: {value || copy.accordion.none}
        </p>
        <Button size="sm" variant="outline" onClick={() => setValue('item-2')}>
          {copy.accordion.openItem2}
        </Button>
        <Accordion
          type="single"
          collapsible
          value={value}
          onValueChange={(v) => setValue(v as string)}
        >
          <AccordionItem value="item-1">
            <AccordionHeader>
              <AccordionTrigger>{copy.accordion.item1}</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>{copy.accordion.controlledContent}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionHeader>
              <AccordionTrigger>{copy.accordion.item2}</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>{copy.accordion.openedProgrammatically}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const DisabledItem: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Accordion type="single" collapsible style={{ width: 'min(500px, 100%)' }}>
        <AccordionItem value="enabled">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.availableSection}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.expandCollapse}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="disabled" disabled>
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.lockedSection}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.cannotAccess}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="another">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.anotherSection}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.worksNormally}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Accordion
        type="single"
        collapsible
        defaultValue="panel-1"
        orientation="horizontal"
        style={{ height: '200px', width: 'min(700px, 100%)' }}
      >
        <AccordionItem value="panel-1">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.overview}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.overviewContent}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="panel-2">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.details}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.detailedSpecs}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="panel-3">
          <AccordionHeader>
            <AccordionTrigger>{copy.accordion.reviews}</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.customerReviews}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const SettingsComposition: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-4)',
          width: 'min(500px, 100%)',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 'var(--zy-font-size-lg)',
            fontWeight: 'var(--zy-font-weight-semibold)',
            color: 'var(--zy-foreground)',
          }}
        >
          {copy.accordion.preferences}
        </h3>
        <Accordion type="multiple" defaultValue={['display']} variant="contained">
          <AccordionItem value="display">
            <AccordionHeader>
              <AccordionTrigger>{copy.accordion.displaySettings}</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zy-spacing-2)' }}>
                <span>{copy.accordion.themeSystem}</span>
                <span>{copy.accordion.fontSizeMedium}</span>
                <span>{copy.accordion.sidebarCollapsed}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="notifications">
            <AccordionHeader>
              <AccordionTrigger>{copy.accordion.notifications}</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zy-spacing-2)' }}>
                <span>{copy.accordion.emailEnabled}</span>
                <span>{copy.accordion.pushDisabled}</span>
                <span>{copy.accordion.soundsEnabled}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="privacy">
            <AccordionHeader>
              <AccordionTrigger>{copy.accordion.privacySecurity}</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zy-spacing-2)' }}>
                <span>{copy.accordion.twoFactorEnabled}</span>
                <span>{copy.accordion.sessionTimeout}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
          padding: '24px',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: 'var(--zy-radius-md)',
          width: 'min(500px, 100%)',
        }}
      >
        <Accordion type="single" collapsible defaultValue="open-item" variant="card">
          <AccordionItem value="open-item">
            <AccordionHeader>
              <AccordionTrigger>{copy.accordion.openByDefault}</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>{copy.accordion.expandedDark}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="closed-item">
            <AccordionHeader>
              <AccordionTrigger>{copy.accordion.closedSection}</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>{copy.accordion.hiddenUntilClick}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const NoChevron: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Accordion type="single" collapsible style={{ width: 'min(500px, 100%)' }}>
        <AccordionItem value="item-1">
          <AccordionHeader>
            <AccordionTrigger showChevron={false}>
              {copy.accordion.noChevronTrigger}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>{copy.accordion.noChevronDesc}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};
