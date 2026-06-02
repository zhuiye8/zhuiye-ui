import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from './NavigationMenu';

function renderNavigationMenu(opts?: {
  orientation?: 'horizontal' | 'vertical';
  active?: boolean;
  onValueChange?: (value: string) => void;
}) {
  return render(
    <NavigationMenu
      defaultValue={opts?.onValueChange ? undefined : 'components'}
      orientation={opts?.orientation}
      onValueChange={opts?.onValueChange}
      aria-label="Primary"
    >
      <NavigationMenuList>
        <NavigationMenuItem value="components">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent forceMount>
            <NavigationMenuLink href="/components">All components</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/docs" active={opts?.active}>
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuIndicator forceMount />
      </NavigationMenuList>
      <NavigationMenuViewport forceMount />
    </NavigationMenu>,
  );
}

describe('NavigationMenu', () => {
  it('renders a navigation landmark with trigger and link items', () => {
    renderNavigationMenu();
    expect(screen.getByRole('navigation', { name: 'Primary' })).toHaveClass('zy-navigation-menu');
    expect(screen.getByRole('button', { name: 'Components' })).toHaveClass(
      'zy-navigation-menu__trigger',
    );
    expect(screen.getByRole('link', { name: 'Docs' })).toHaveClass('zy-navigation-menu__link');
  });

  it('renders forced content and viewport for panel navigation', () => {
    renderNavigationMenu();
    expect(screen.getByText('All components')).toBeInTheDocument();
    expect(document.querySelector('.zy-navigation-menu__viewport')).toBeInTheDocument();
  });

  it('applies vertical orientation data attributes', () => {
    renderNavigationMenu({ orientation: 'vertical' });
    expect(screen.getByRole('navigation', { name: 'Primary' })).toHaveAttribute(
      'data-orientation',
      'vertical',
    );
    expect(document.querySelector('.zy-navigation-menu__list')).toHaveAttribute(
      'data-orientation',
      'vertical',
    );
  });

  it('marks active links with Radix active state', () => {
    renderNavigationMenu({ active: true });
    expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('data-active');
  });

  it('calls onValueChange when a trigger opens', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderNavigationMenu({ onValueChange });
    await user.click(screen.getByRole('button', { name: 'Components' }));
    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalledWith('components');
    });
  });

  it('supports hiding the trigger chevron', () => {
    render(
      <NavigationMenu aria-label="No chevron">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger showChevron={false}>Docs</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );
    expect(document.querySelector('.zy-navigation-menu__trigger-chevron')).not.toBeInTheDocument();
  });

  it('forwards refs to compound parts', () => {
    const rootRef = vi.fn();
    const listRef = vi.fn();
    const itemRef = vi.fn();
    const triggerRef = vi.fn();
    const contentRef = vi.fn();
    const linkRef = vi.fn();
    const viewportRef = vi.fn();

    render(
      <NavigationMenu ref={rootRef} defaultValue="components" aria-label="Refs">
        <NavigationMenuList ref={listRef}>
          <NavigationMenuItem ref={itemRef} value="components">
            <NavigationMenuTrigger ref={triggerRef}>Components</NavigationMenuTrigger>
            <NavigationMenuContent ref={contentRef} forceMount>
              <NavigationMenuLink ref={linkRef} href="/components">
                All components
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuIndicator forceMount />
        </NavigationMenuList>
        <NavigationMenuViewport ref={viewportRef} forceMount />
      </NavigationMenu>,
    );

    expect(rootRef).toHaveBeenCalledWith(expect.any(HTMLElement));
    expect(listRef).toHaveBeenCalledWith(expect.any(HTMLUListElement));
    expect(itemRef).toHaveBeenCalledWith(expect.any(HTMLLIElement));
    expect(triggerRef).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
    expect(contentRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(linkRef).toHaveBeenCalledWith(expect.any(HTMLAnchorElement));
    expect(viewportRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('passes className and variant classes through', () => {
    render(
      <NavigationMenu variant="framed" size="lg" className="custom-root" aria-label="Custom">
        <NavigationMenuList density="compact" className="custom-list">
          <NavigationMenuItem className="custom-item">
            <NavigationMenuLink className="custom-link" href="/">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    );

    expect(screen.getByRole('navigation', { name: 'Custom' })).toHaveClass(
      'zy-navigation-menu--framed',
      'zy-navigation-menu--lg',
      'custom-root',
    );
    expect(document.querySelector('.zy-navigation-menu__list')).toHaveClass(
      'zy-navigation-menu__list--compact',
      'custom-list',
    );
    expect(screen.getByRole('listitem')).toHaveClass('custom-item');
    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('custom-link');
  });
});
