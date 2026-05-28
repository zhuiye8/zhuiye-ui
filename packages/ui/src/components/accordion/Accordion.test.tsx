import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from './Accordion';

function renderSingleAccordion(opts?: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (v: string) => void;
  collapsible?: boolean;
  disabled?: boolean;
  disabledItem?: string;
  orientation?: 'horizontal' | 'vertical';
  showChevron?: boolean;
}) {
  return render(
    <Accordion
      type="single"
      defaultValue={opts?.defaultValue}
      value={opts?.value}
      onValueChange={opts?.onValueChange as ((v: string) => void) | undefined}
      collapsible={opts?.collapsible}
      disabled={opts?.disabled}
      orientation={opts?.orientation}
    >
      <AccordionItem value="item-1" disabled={opts?.disabledItem === 'item-1'}>
        <AccordionHeader>
          <AccordionTrigger showChevron={opts?.showChevron}>Section 1</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>Section 2</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Content 2</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionHeader>
          <AccordionTrigger>Section 3</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Content 3</AccordionContent>
      </AccordionItem>
    </Accordion>,
  );
}

function renderMultipleAccordion(opts?: {
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (v: string[]) => void;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
}) {
  return render(
    <Accordion
      type="multiple"
      defaultValue={opts?.defaultValue}
      value={opts?.value}
      onValueChange={opts?.onValueChange}
      disabled={opts?.disabled}
      orientation={opts?.orientation}
    >
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>Section 1</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>Section 2</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Content 2</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionHeader>
          <AccordionTrigger>Section 3</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Content 3</AccordionContent>
      </AccordionItem>
    </Accordion>,
  );
}

describe('Accordion', () => {
  it('renders default open item content', () => {
    renderSingleAccordion({ defaultValue: 'item-1' });
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('clicking trigger toggles single collapsible content', async () => {
    const user = userEvent.setup();
    renderSingleAccordion({ collapsible: true });
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Section 1' }));
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Section 1' }));
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('multiple mode allows multiple open items', async () => {
    const user = userEvent.setup();
    renderMultipleAccordion({ defaultValue: ['item-1'] });
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Section 2' }));
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('controlled value calls onValueChange', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderSingleAccordion({ value: '', onValueChange, collapsible: true });
    await user.click(screen.getByRole('button', { name: 'Section 2' }));
    expect(onValueChange).toHaveBeenCalledWith('item-2');
  });

  it('disabled item cannot open', async () => {
    const user = userEvent.setup();
    renderSingleAccordion({ disabledItem: 'item-1' });
    const trigger = screen.getByRole('button', { name: 'Section 1' });
    expect(trigger).toBeDisabled();
    await user.click(trigger);
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('keyboard navigation moves focus with ArrowDown/ArrowUp and Home/End', async () => {
    const user = userEvent.setup();
    renderSingleAccordion({ defaultValue: 'item-1' });
    screen.getByRole('button', { name: 'Section 1' }).focus();
    await user.keyboard('{ArrowDown}');
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Section 2' })).toHaveFocus();
    });
    await user.keyboard('{ArrowUp}');
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Section 1' })).toHaveFocus();
    });
    await user.keyboard('{End}');
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Section 3' })).toHaveFocus();
    });
    await user.keyboard('{Home}');
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Section 1' })).toHaveFocus();
    });
  });

  it('horizontal orientation uses horizontal data/aria behavior', () => {
    renderSingleAccordion({ orientation: 'horizontal' });
    const trigger = screen.getByRole('button', { name: 'Section 1' });
    expect(trigger).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('showChevron={false} removes the decorative chevron', () => {
    renderSingleAccordion({ showChevron: false });
    const trigger = screen.getByRole('button', { name: 'Section 1' });
    expect(trigger.querySelector('.zy-accordion__chevron')).not.toBeInTheDocument();
  });

  it('forwards ref to item', () => {
    const ref = vi.fn();
    render(
      <Accordion type="single">
        <AccordionItem value="i1" ref={ref}>
          <AccordionHeader>
            <AccordionTrigger>Hi</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>Body</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('forwards ref to header', () => {
    const ref = vi.fn();
    render(
      <Accordion type="single">
        <AccordionItem value="i1">
          <AccordionHeader ref={ref}>
            <AccordionTrigger>Hi</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>Body</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLHeadingElement));
  });

  it('forwards ref to trigger', () => {
    const ref = vi.fn();
    render(
      <Accordion type="single">
        <AccordionItem value="i1">
          <AccordionHeader>
            <AccordionTrigger ref={ref}>Hi</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>Body</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('forwards ref to content', () => {
    const ref = vi.fn();
    render(
      <Accordion type="single" defaultValue="i1">
        <AccordionItem value="i1">
          <AccordionHeader>
            <AccordionTrigger>Hi</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent ref={ref}>Body</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('className/style pass-through', () => {
    render(
      <Accordion type="single" className="custom-accordion">
        <AccordionItem value="i1" className="custom-item" data-testid="item">
          <AccordionHeader className="custom-header" data-testid="header">
            <AccordionTrigger className="custom-trigger" data-testid="trigger">
              Hi
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="custom-content" data-testid="content">
            Body
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.getByTestId('item')).toHaveClass('zy-accordion__item', 'custom-item');
    expect(screen.getByTestId('header')).toHaveClass('zy-accordion__header', 'custom-header');
    expect(screen.getByTestId('trigger')).toHaveClass('zy-accordion__trigger', 'custom-trigger');
    expect(screen.getByTestId('content')).toHaveClass('zy-accordion__content', 'custom-content');
  });
});
