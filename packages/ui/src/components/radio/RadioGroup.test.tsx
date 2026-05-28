import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';

describe('RadioGroup', () => {
  it('renders a group with role radiogroup', () => {
    render(
      <RadioGroup>
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
  });

  it('renders label text', () => {
    render(
      <RadioGroup label="Pick one">
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    expect(screen.getByText('Pick one')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(
      <RadioGroup label="Colors" description="Choose your favorite">
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    expect(screen.getByText('Choose your favorite')).toBeInTheDocument();
  });

  it('renders error message with role alert', () => {
    render(
      <RadioGroup label="Colors" errorMessage="Required">
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Required');
  });

  it('links error message via aria-describedby', () => {
    render(
      <RadioGroup id="colors" label="Colors" errorMessage="Required">
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    const group = screen.getByRole('radiogroup');
    const describedBy = group.getAttribute('aria-describedby');
    expect(describedBy).toContain('colors-error');
  });

  it('links description via aria-describedby', () => {
    render(
      <RadioGroup id="colors" label="Colors" description="Helper">
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    const group = screen.getByRole('radiogroup');
    const describedBy = group.getAttribute('aria-describedby');
    expect(describedBy).toContain('colors-description');
  });

  it('merges consumer aria-describedby with error and description ids', () => {
    render(
      <RadioGroup
        id="field"
        label="Field"
        description="Helper"
        errorMessage="Error"
        aria-describedby="custom-desc"
      >
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    const group = screen.getByRole('radiogroup');
    const describedBy = group.getAttribute('aria-describedby');
    expect(describedBy).toContain('custom-desc');
    expect(describedBy).toContain('field-description');
    expect(describedBy).toContain('field-error');
  });

  it('generates name for radio inputs', () => {
    render(
      <RadioGroup>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole('radio');
    const nameA = radios[0]!.getAttribute('name');
    const nameB = radios[1]!.getAttribute('name');
    expect(nameA).toBeTruthy();
    expect(nameA).toBe(nameB);
  });

  it('uses provided name', () => {
    render(
      <RadioGroup name="colors">
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole('radio');
    expect(radios[0]).toHaveAttribute('name', 'colors');
    expect(radios[1]).toHaveAttribute('name', 'colors');
  });

  it('calls onValueChange when a radio is selected', async () => {
    const onChange = vi.fn();
    render(
      <RadioGroup onValueChange={onChange}>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    );
    await userEvent.click(screen.getByRole('radio', { name: 'B' }));
    expect(onChange).toHaveBeenCalledWith('b');
  });

  it('works as controlled component', () => {
    render(
      <RadioGroup value="a" onValueChange={vi.fn()}>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio', { name: 'A' })).toBeChecked();
    expect(screen.getByRole('radio', { name: 'B' })).not.toBeChecked();
  });

  it('works as uncontrolled component with defaultValue', async () => {
    render(
      <RadioGroup defaultValue="a">
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio', { name: 'A' })).toBeChecked();
  });

  it('applies fullWidth class', () => {
    render(
      <RadioGroup fullWidth>
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radiogroup')).toHaveClass('zy-radio-group--full');
  });

  it('applies disabled class', () => {
    render(
      <RadioGroup disabled>
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radiogroup')).toHaveClass('zy-radio-group--disabled');
  });

  it('disables all radios when group is disabled', () => {
    render(
      <RadioGroup disabled>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" />
      </RadioGroup>,
    );
    const radios = screen.getAllByRole('radio');
    expect(radios[0]).toBeDisabled();
    expect(radios[1]).toBeDisabled();
  });

  it('preserves individual radio disabled state', () => {
    render(
      <RadioGroup>
        <Radio value="a" label="A" />
        <Radio value="b" label="B" disabled />
      </RadioGroup>,
    );
    expect(screen.getByRole('radio', { name: 'A' })).not.toBeDisabled();
    expect(screen.getByRole('radio', { name: 'B' })).toBeDisabled();
  });

  it('applies invalid class', () => {
    render(
      <RadioGroup invalid>
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radiogroup')).toHaveClass('zy-radio-group--invalid');
  });

  it('sets aria-labelledby when label is provided', () => {
    render(
      <RadioGroup id="colors" label="Colors">
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    const group = screen.getByRole('radiogroup');
    expect(group).toHaveAttribute('aria-labelledby', 'colors-label');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(
      <RadioGroup ref={ref}>
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('preserves child Radio onChange and fires onValueChange', async () => {
    const childOnChange = vi.fn();
    const groupOnChange = vi.fn();
    render(
      <RadioGroup onValueChange={groupOnChange}>
        <Radio value="a" label="A" onChange={childOnChange} />
        <Radio value="b" label="B" />
      </RadioGroup>,
    );
    await userEvent.click(screen.getByRole('radio', { name: 'A' }));
    expect(childOnChange).toHaveBeenCalledOnce();
    expect(groupOnChange).toHaveBeenCalledWith('a');
  });

  it('sets aria-invalid when invalid', () => {
    render(
      <RadioGroup invalid>
        <Radio value="a" label="A" />
      </RadioGroup>,
    );
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true');
  });
});
