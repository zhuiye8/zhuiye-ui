import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './Breadcrumb';

function renderBreadcrumb() {
  return render(
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>,
  );
}

describe('Breadcrumb', () => {
  it('renders a labelled navigation landmark with ordered list semantics', () => {
    renderBreadcrumb();
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toHaveClass('zy-breadcrumb');
    expect(screen.getByRole('list')).toHaveClass('zy-breadcrumb__list');
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('marks the current page with aria-current', () => {
    renderBreadcrumb();
    expect(screen.getByText('Breadcrumb')).toHaveAttribute('aria-current', 'page');
  });

  it('supports current links when consumers render the current page as an anchor', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs" current>
              Docs
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );
    expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute('aria-current', 'page');
  });

  it('renders decorative separators outside list item count', () => {
    renderBreadcrumb();
    expect(document.querySelectorAll('.zy-breadcrumb__separator')).toHaveLength(2);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('renders an accessible ellipsis label', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis label="Hidden path levels" />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Settings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );
    expect(screen.getByText('Hidden path levels')).toBeInTheDocument();
  });

  it('forwards refs to all compound parts', () => {
    const navRef = vi.fn();
    const listRef = vi.fn();
    const itemRef = vi.fn();
    const linkRef = vi.fn();
    const pageRef = vi.fn();
    const separatorRef = vi.fn();
    const ellipsisRef = vi.fn();

    render(
      <Breadcrumb ref={navRef}>
        <BreadcrumbList ref={listRef}>
          <BreadcrumbItem ref={itemRef}>
            <BreadcrumbLink ref={linkRef} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator ref={separatorRef} />
          <BreadcrumbItem>
            <BreadcrumbEllipsis ref={ellipsisRef} />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage ref={pageRef}>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(navRef).toHaveBeenCalledWith(expect.any(HTMLElement));
    expect(listRef).toHaveBeenCalledWith(expect.any(HTMLOListElement));
    expect(itemRef).toHaveBeenCalledWith(expect.any(HTMLLIElement));
    expect(linkRef).toHaveBeenCalledWith(expect.any(HTMLAnchorElement));
    expect(pageRef).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
    expect(separatorRef).toHaveBeenCalledWith(expect.any(HTMLLIElement));
    expect(ellipsisRef).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
  });

  it('passes className and size classes through', () => {
    render(
      <Breadcrumb size="lg" className="custom-breadcrumb" aria-label="Project path">
        <BreadcrumbList className="custom-list">
          <BreadcrumbItem className="custom-item">
            <BreadcrumbLink className="custom-link" href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );

    expect(screen.getByRole('navigation', { name: 'Project path' })).toHaveClass(
      'zy-breadcrumb--lg',
      'custom-breadcrumb',
    );
    expect(screen.getByRole('list')).toHaveClass('custom-list');
    expect(screen.getByRole('listitem')).toHaveClass('custom-item');
    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('custom-link');
  });
});
