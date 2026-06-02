import type { Meta, StoryObj } from '@storybook/react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from '@zhuiye/ui';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

type PanelLinkProps = {
  href: string;
  title: string;
  description: string;
};

function PanelLink({ href, title, description }: PanelLinkProps) {
  return (
    <NavigationMenuLink asChild className="zy-navigation-menu__panel-link">
      <a href={href}>
        <span className="zy-navigation-menu__panel-title">{title}</span>
        <span className="zy-navigation-menu__panel-description">{description}</span>
      </a>
    </NavigationMenuLink>
  );
}

function ProductPanel() {
  return (
    <div className="zy-navigation-menu__panel-grid">
      <PanelLink
        href="/components/forms"
        title="Form controls"
        description="Inputs, selection controls, messages, and field composition."
      />
      <PanelLink
        href="/components/overlays"
        title="Overlays"
        description="Dialog, popover, tooltip, and menu primitives for layered UI."
      />
      <PanelLink
        href="/components/navigation"
        title="Navigation"
        description="Tabs, accordion, breadcrumb, and site navigation patterns."
      />
      <PanelLink
        href="/components/status"
        title="Status"
        description="Alert, progress, badge, avatar, and async feedback primitives."
      />
    </div>
  );
}

function ResourcesPanel() {
  return (
    <div className="zy-navigation-menu__panel-stack">
      <PanelLink
        href="/docs/tokens"
        title="Design tokens"
        description="Semantic CSS variables for color, spacing, type, shadow, and radius."
      />
      <PanelLink
        href="/docs/accessibility"
        title="Accessibility"
        description="Keyboard, screen reader, and focus behavior notes for each component."
      />
      <PanelLink
        href="/docs/releases"
        title="Release notes"
        description="Track shipped primitives, API changes, and migration guidance."
      />
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <NavigationMenu defaultValue="products" delayDuration={0} aria-label="Main navigation">
      <NavigationMenuList>
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ProductPanel />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="resources">
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ResourcesPanel />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  ),
};

export const VariantsAndSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-8)',
        width: 'min(640px, 100%)',
      }}
    >
      <NavigationMenu size="sm" variant="plain" aria-label="Plain navigation">
        <NavigationMenuList density="compact">
          <NavigationMenuItem>
            <NavigationMenuLink href="/" active>
              Overview
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components">Components</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/docs">Docs</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu size="md" variant="subtle" aria-label="Subtle navigation">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" active>
              Overview
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components">Components</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/docs">Docs</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu size="lg" variant="framed" aria-label="Framed navigation">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" active>
              Overview
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components">Components</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/docs">Docs</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <NavigationMenu
      orientation="vertical"
      defaultValue="components"
      delayDuration={0}
      variant="framed"
      aria-label="Sidebar navigation"
    >
      <NavigationMenuList>
        <NavigationMenuItem value="components">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ResourcesPanel />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="patterns">
          <NavigationMenuTrigger>Patterns</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ProductPanel />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/support">Support</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  ),
};

export const ActiveLinks: Story = {
  render: () => (
    <NavigationMenu variant="subtle" aria-label="Section navigation">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/overview">Overview</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/components" active>
            Components
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/tokens">Tokens</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
        width: 'min(720px, 100%)',
      }}
    >
      <NavigationMenu
        defaultValue="products"
        delayDuration={0}
        variant="framed"
        aria-label="Dark navigation"
      >
        <NavigationMenuList>
          <NavigationMenuItem value="products">
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ProductPanel />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="resources">
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ResourcesPanel />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  ),
};
