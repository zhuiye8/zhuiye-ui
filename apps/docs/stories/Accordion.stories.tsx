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

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="faq-1" style={{ width: 'min(500px, 100%)' }}>
      <AccordionItem value="faq-1">
        <AccordionHeader>
          <AccordionTrigger>What is zhuiye-ui?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          zhuiye-ui is a high-quality React component library built on Radix UI primitives with a
          unified design token system for consistent, accessible interfaces.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionHeader>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          Yes. All components follow WAI-ARIA authoring practices, support keyboard navigation, and
          include proper ARIA attributes out of the box.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionHeader>
          <AccordionTrigger>Can I use it in production?</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          Absolutely. Every component is tested, typed with TypeScript, and designed for
          production-grade applications.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={['s1', 's3']} style={{ width: 'min(500px, 100%)' }}>
      <AccordionItem value="s1">
        <AccordionHeader>
          <AccordionTrigger>Shipping Information</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          Free shipping on orders over $50. Standard delivery takes 3-5 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="s2">
        <AccordionHeader>
          <AccordionTrigger>Return Policy</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          We accept returns within 30 days of purchase. Items must be in original condition.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="s3">
        <AccordionHeader>
          <AccordionTrigger>Warranty Details</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          All products come with a 2-year manufacturer warranty covering defects in materials and
          workmanship.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Variants: Story = {
  render: () => (
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
          Line (default)
        </p>
        <Accordion type="single" collapsible variant="line" style={{ width: '100%' }}>
          <AccordionItem value="a">
            <AccordionHeader>
              <AccordionTrigger>Section A</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Line variant content with bottom border dividers.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionHeader>
              <AccordionTrigger>Section B</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Another section in line style.</AccordionContent>
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
          Card
        </p>
        <Accordion type="single" collapsible variant="card" style={{ width: '100%' }}>
          <AccordionItem value="a">
            <AccordionHeader>
              <AccordionTrigger>Section A</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Card variant with individual bordered items.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionHeader>
              <AccordionTrigger>Section B</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Each item has its own card container.</AccordionContent>
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
          Contained
        </p>
        <Accordion type="single" collapsible variant="contained" style={{ width: '100%' }}>
          <AccordionItem value="a">
            <AccordionHeader>
              <AccordionTrigger>Section A</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Contained variant with muted background container.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionHeader>
              <AccordionTrigger>Section B</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Items sit inside a pill-like container.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
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
          Small
        </p>
        <Accordion type="single" collapsible size="sm" variant="card">
          <AccordionItem value="a">
            <AccordionHeader>
              <AccordionTrigger>Small Accordion</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Compact content for tight spaces.</AccordionContent>
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
          Medium (default)
        </p>
        <Accordion type="single" collapsible size="md" variant="card">
          <AccordionItem value="a">
            <AccordionHeader>
              <AccordionTrigger>Medium Accordion</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Standard content padding and font size.</AccordionContent>
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
          Large
        </p>
        <Accordion type="single" collapsible size="lg" variant="card">
          <AccordionItem value="a">
            <AccordionHeader>
              <AccordionTrigger>Large Accordion</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Spacious content for prominent sections.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
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
          Active: {value || 'none'}
        </p>
        <Button size="sm" variant="outline" onClick={() => setValue('item-2')}>
          Open Item 2
        </Button>
        <Accordion
          type="single"
          collapsible
          value={value}
          onValueChange={(v) => setValue(v as string)}
        >
          <AccordionItem value="item-1">
            <AccordionHeader>
              <AccordionTrigger>Item 1</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>Content controlled externally.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionHeader>
              <AccordionTrigger>Item 2</AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>This item was opened programmatically.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const DisabledItem: Story = {
  render: () => (
    <Accordion type="single" collapsible style={{ width: 'min(500px, 100%)' }}>
      <AccordionItem value="enabled">
        <AccordionHeader>
          <AccordionTrigger>Available Section</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>This section can be expanded and collapsed.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="disabled" disabled>
        <AccordionHeader>
          <AccordionTrigger>Locked Section</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>This content cannot be accessed.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="another">
        <AccordionHeader>
          <AccordionTrigger>Another Section</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>This one works normally.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      defaultValue="panel-1"
      orientation="horizontal"
      style={{ height: '200px', width: 'min(700px, 100%)' }}
    >
      <AccordionItem value="panel-1">
        <AccordionHeader>
          <AccordionTrigger>Overview</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          General overview information displayed in a horizontal panel layout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="panel-2">
        <AccordionHeader>
          <AccordionTrigger>Details</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Detailed specifications and technical information.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="panel-3">
        <AccordionHeader>
          <AccordionTrigger>Reviews</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Customer reviews and ratings for this product.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SettingsComposition: Story = {
  render: () => (
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
        Preferences
      </h3>
      <Accordion type="multiple" defaultValue={['display']} variant="contained">
        <AccordionItem value="display">
          <AccordionHeader>
            <AccordionTrigger>Display Settings</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zy-spacing-2)' }}>
              <span>Theme: System</span>
              <span>Font size: Medium</span>
              <span>Sidebar: Collapsed</span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="notifications">
          <AccordionHeader>
            <AccordionTrigger>Notifications</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zy-spacing-2)' }}>
              <span>Email: Enabled</span>
              <span>Push: Disabled</span>
              <span>Sounds: Enabled</span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="privacy">
          <AccordionHeader>
            <AccordionTrigger>Privacy &amp; Security</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zy-spacing-2)' }}>
              <span>Two-factor auth: Enabled</span>
              <span>Session timeout: 30 minutes</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
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
            <AccordionTrigger>Open by Default</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            This accordion item is expanded by default in dark theme.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="closed-item">
          <AccordionHeader>
            <AccordionTrigger>Closed Section</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>This content is hidden until you click the trigger.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const NoChevron: Story = {
  render: () => (
    <Accordion type="single" collapsible style={{ width: 'min(500px, 100%)' }}>
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger showChevron={false}>Custom trigger without chevron</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          This accordion uses showChevron=false to hide the decorative chevron indicator.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
