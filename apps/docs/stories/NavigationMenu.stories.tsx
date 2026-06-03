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
import { useStoryCopy } from './story-i18n';

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
  const copy = useStoryCopy();
  return (
    <div className="zy-navigation-menu__panel-grid">
      <PanelLink
        href="/components/forms"
        title={copy.navigationMenu.formControls}
        description={copy.navigationMenu.formControlsDesc}
      />
      <PanelLink
        href="/components/overlays"
        title={copy.navigationMenu.overlays}
        description={copy.navigationMenu.overlaysDesc}
      />
      <PanelLink
        href="/components/navigation"
        title={copy.navigationMenu.navigation}
        description={copy.navigationMenu.navigationDesc}
      />
      <PanelLink
        href="/components/status"
        title={copy.navigationMenu.status}
        description={copy.navigationMenu.statusDesc}
      />
    </div>
  );
}

function ResourcesPanel() {
  const copy = useStoryCopy();
  return (
    <div className="zy-navigation-menu__panel-stack">
      <PanelLink
        href="/docs/tokens"
        title={copy.navigationMenu.designTokens}
        description={copy.navigationMenu.designTokensDesc}
      />
      <PanelLink
        href="/docs/accessibility"
        title={copy.navigationMenu.accessibility}
        description={copy.navigationMenu.accessibilityDesc}
      />
      <PanelLink
        href="/docs/releases"
        title={copy.navigationMenu.releaseNotes}
        description={copy.navigationMenu.releaseNotesDesc}
      />
    </div>
  );
}

export const Default: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <NavigationMenu
        defaultValue="products"
        delayDuration={0}
        aria-label={copy.navigationMenu.mainNav}
      >
        <NavigationMenuList>
          <NavigationMenuItem value="products">
            <NavigationMenuTrigger>{copy.navigationMenu.products}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ProductPanel />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="resources">
            <NavigationMenuTrigger>{copy.navigationMenu.resources}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ResourcesPanel />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/pricing">{copy.navigationMenu.pricing}</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    );
  },
};

export const VariantsAndSizes: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-8)',
          width: 'min(640px, 100%)',
        }}
      >
        <NavigationMenu size="sm" variant="plain" aria-label={copy.navigationMenu.plainNav}>
          <NavigationMenuList density="compact">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" active>
                {copy.navigationMenu.overview}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/components">
                {copy.navigationMenu.components}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/docs">{copy.navigationMenu.docs}</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu size="md" variant="subtle" aria-label={copy.navigationMenu.subtleNav}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" active>
                {copy.navigationMenu.overview}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/components">
                {copy.navigationMenu.components}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/docs">{copy.navigationMenu.docs}</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu size="lg" variant="framed" aria-label={copy.navigationMenu.framedNav}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" active>
                {copy.navigationMenu.overview}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/components">
                {copy.navigationMenu.components}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/docs">{copy.navigationMenu.docs}</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <NavigationMenu
        orientation="vertical"
        defaultValue="components"
        delayDuration={0}
        variant="framed"
        aria-label={copy.navigationMenu.sidebarNav}
      >
        <NavigationMenuList>
          <NavigationMenuItem value="components">
            <NavigationMenuTrigger>{copy.navigationMenu.components}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ResourcesPanel />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="patterns">
            <NavigationMenuTrigger>{copy.navigationMenu.patterns}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ProductPanel />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/support">{copy.navigationMenu.support}</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    );
  },
};

export const ActiveLinks: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <NavigationMenu variant="subtle" aria-label={copy.navigationMenu.sectionNav}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/overview">{copy.navigationMenu.overview}</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components" active>
              {copy.navigationMenu.components}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/tokens">{copy.navigationMenu.tokens}</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
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
          width: 'min(720px, 100%)',
        }}
      >
        <NavigationMenu
          defaultValue="products"
          delayDuration={0}
          variant="framed"
          aria-label={copy.navigationMenu.darkNav}
        >
          <NavigationMenuList>
            <NavigationMenuItem value="products">
              <NavigationMenuTrigger>{copy.navigationMenu.products}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ProductPanel />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem value="resources">
              <NavigationMenuTrigger>{copy.navigationMenu.resources}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ResourcesPanel />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/pricing">{copy.navigationMenu.pricing}</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuIndicator />
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    );
  },
};
