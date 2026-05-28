import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Select } from './Select';
import { Field } from '../field';
import type { SelectOptionSource } from './Select';

const flatOptions: SelectOptionSource[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const optionsWithDisabled: SelectOptionSource[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana', disabled: true },
  { value: 'cherry', label: 'Cherry' },
];

const groupedOptions: SelectOptionSource[] = [
  {
    label: 'Fruits',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
    ],
  },
  {
    label: 'Vegetables',
    options: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'broccoli', label: 'Broccoli' },
    ],
  },
];

async function openSelect(user: ReturnType<typeof userEvent.setup>) {
  const trigger = screen.getByRole('combobox');
  await user.click(trigger);
  return trigger;
}

describe('Select', () => {
  it('renders placeholder', () => {
    render(<Select options={flatOptions} placeholder="Pick a fruit" />);
    expect(screen.getByText('Pick a fruit')).toBeInTheDocument();
  });

  it('renders default selected value with defaultValue', () => {
    render(<Select options={flatOptions} defaultValue="banana" />);
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('calls onValueChange when an option is selected', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Select options={flatOptions} onValueChange={onValueChange} />);
    await openSelect(user);
    await user.click(screen.getByRole('option', { name: 'Apple' }));
    expect(onValueChange).toHaveBeenCalledWith('apple');
  });

  it('supports controlled value', () => {
    render(<Select options={flatOptions} value="cherry" />);
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('disabled select disables trigger', () => {
    render(<Select options={flatOptions} disabled />);
    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeDisabled();
    expect(trigger).toHaveClass('zy-select--disabled');
  });

  it('invalid adds aria-invalid="true"', () => {
    render(<Select options={flatOptions} invalid />);
    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveAttribute('aria-invalid', 'true');
  });

  it('id and aria-describedby pass through to trigger', () => {
    render(<Select options={flatOptions} id="my-select" aria-describedby="my-desc" />);
    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveAttribute('id', 'my-select');
    expect(trigger).toHaveAttribute('aria-describedby', 'my-desc');
  });

  it('className merges on trigger', () => {
    render(<Select options={flatOptions} className="custom-class" />);
    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveClass('zy-select');
    expect(trigger).toHaveClass('custom-class');
  });

  it('size and fullWidth classes apply', () => {
    const { rerender } = render(<Select options={flatOptions} size="sm" />);
    expect(screen.getByRole('combobox')).toHaveClass('zy-select--sm');

    rerender(<Select options={flatOptions} size="lg" />);
    expect(screen.getByRole('combobox')).toHaveClass('zy-select--lg');

    rerender(<Select options={flatOptions} fullWidth />);
    expect(screen.getByRole('combobox')).toHaveClass('zy-select--full');
  });

  it('disabled item cannot be selected', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<Select options={optionsWithDisabled} onValueChange={onValueChange} />);
    await openSelect(user);
    const disabledOption = screen.getByRole('option', { name: 'Banana' });
    expect(disabledOption).toHaveAttribute('aria-disabled', 'true');
    await user.click(disabledOption);
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('grouped options render with group label', async () => {
    const user = userEvent.setup();
    render(<Select options={groupedOptions} placeholder="Pick" />);
    await openSelect(user);
    expect(screen.getByText('Fruits')).toBeInTheDocument();
    expect(screen.getByText('Vegetables')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Carrot' })).toBeInTheDocument();
  });

  it('forwards ref to trigger button', () => {
    const ref = vi.fn();
    render(<Select options={flatOptions} ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('works inside Field with label association and describedby/error merging', () => {
    render(
      <Field label="Favorite fruit" description="Pick one" errorMessage="Required">
        <Select options={flatOptions} />
      </Field>,
    );
    const trigger = screen.getByRole('combobox');
    const id = trigger.getAttribute('id');
    expect(id).toBeTruthy();
    const label = screen.getByText('Favorite fruit');
    expect(label.closest('label')).toHaveAttribute('for', id);
    const describedBy = trigger.getAttribute('aria-describedby');
    expect(describedBy).toContain(`${id}-description`);
    expect(describedBy).toContain(`${id}-error`);
  });

  it('renders default size md', () => {
    render(<Select options={flatOptions} />);
    expect(screen.getByRole('combobox')).toHaveClass('zy-select--md');
  });

  it('does not render placeholder when value is selected', () => {
    render(<Select options={flatOptions} defaultValue="apple" placeholder="Pick" />);
    expect(screen.queryByText('Pick')).not.toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
  });
});
