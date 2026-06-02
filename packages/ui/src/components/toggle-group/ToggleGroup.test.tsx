import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

function renderSingleGroup(opts?: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
}) {
  return render(
    <ToggleGroup
      type="single"
      value={opts?.value}
      defaultValue={opts?.defaultValue ?? 'left'}
      onValueChange={opts?.onValueChange}
      orientation={opts?.orientation}
      aria-label="Text alignment"
    >
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>,
  );
}

describe('ToggleGroup', () => {
  it('renders a labelled group with items', () => {
    renderSingleGroup();
    expect(screen.getByRole('group', { name: 'Text alignment' })).toHaveClass('zy-toggle-group');
    expect(screen.getByRole('radio', { name: 'Left' })).toHaveAttribute('data-state', 'on');
    expect(screen.getByRole('radio', { name: 'Center' })).toHaveAttribute('data-state', 'off');
  });

  it('single selection changes when clicking another item', async () => {
    const user = userEvent.setup();
    renderSingleGroup();
    await user.click(screen.getByRole('radio', { name: 'Center' }));
    expect(screen.getByRole('radio', { name: 'Left' })).toHaveAttribute('data-state', 'off');
    expect(screen.getByRole('radio', { name: 'Center' })).toHaveAttribute('data-state', 'on');
  });

  it('controlled single selection calls onValueChange', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderSingleGroup({ value: 'left', onValueChange });
    await user.click(screen.getByRole('radio', { name: 'Right' }));
    expect(onValueChange).toHaveBeenCalledWith('right');
    expect(screen.getByRole('radio', { name: 'Left' })).toHaveAttribute('data-state', 'on');
  });

  it('supports multiple selection', async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="multiple" defaultValue={['bold']} aria-label="Text style">
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      </ToggleGroup>,
    );

    await user.click(screen.getByRole('button', { name: 'Italic' }));
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('data-state', 'on');
    expect(screen.getByRole('button', { name: 'Italic' })).toHaveAttribute('data-state', 'on');
  });

  it('supports roving keyboard focus', async () => {
    const user = userEvent.setup();
    renderSingleGroup();
    screen.getByRole('radio', { name: 'Left' }).focus();
    await user.keyboard('{ArrowRight}');
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: 'Center' })).toHaveFocus();
    });
  });

  it('applies vertical orientation data attribute', () => {
    renderSingleGroup({ orientation: 'vertical' });
    expect(screen.getByRole('group', { name: 'Text alignment' })).toHaveAttribute(
      'data-orientation',
      'vertical',
    );
  });

  it('does not activate disabled items', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <ToggleGroup type="single" defaultValue="left" onValueChange={onValueChange}>
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="right" disabled>
          Right
        </ToggleGroupItem>
      </ToggleGroup>,
    );
    await user.click(screen.getByRole('radio', { name: 'Right' }));
    expect(onValueChange).not.toHaveBeenCalled();
    expect(screen.getByRole('radio', { name: 'Right' })).toBeDisabled();
  });

  it('forwards refs to root and item', () => {
    const rootRef = vi.fn();
    const itemRef = vi.fn();
    render(
      <ToggleGroup ref={rootRef} type="single" defaultValue="one">
        <ToggleGroupItem ref={itemRef} value="one">
          One
        </ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(rootRef).toHaveBeenCalledWith(expect.any(HTMLDivElement));
    expect(itemRef).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('passes className and variant classes through', () => {
    render(
      <ToggleGroup type="multiple" variant="soft" size="lg" tone="primary" className="custom-group">
        <ToggleGroupItem value="one" className="custom-item">
          One
        </ToggleGroupItem>
      </ToggleGroup>,
    );
    expect(screen.getByRole('group')).toHaveClass(
      'zy-toggle-group--soft',
      'zy-toggle-group--lg',
      'zy-toggle-group--primary',
      'custom-group',
    );
    expect(screen.getByRole('button', { name: 'One' })).toHaveClass('custom-item');
  });
});
