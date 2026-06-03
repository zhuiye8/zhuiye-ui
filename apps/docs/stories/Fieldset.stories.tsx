import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset, Radio, RadioGroup } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
  args: {
    legend: 'Notification preferences',
    children: (
      <RadioGroup defaultValue="all" name="notifications">
        <Radio value="all" label="All notifications" />
        <Radio value="important" label="Important only" />
        <Radio value="none" label="None" />
      </RadioGroup>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const WithDescription: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Fieldset legend={copy.fieldset.notificationPrefs} description={copy.fieldset.chooseNotified}>
        <RadioGroup defaultValue="all" name="notifications">
          <Radio value="all" label={copy.fieldset.allNotifications} />
          <Radio value="important" label={copy.fieldset.importantOnly} />
          <Radio value="none" label={copy.fieldset.none} />
        </RadioGroup>
      </Fieldset>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Fieldset
        legend={copy.fieldset.notificationPrefs}
        errorMessage={copy.fieldset.selectOption}
        invalid
      >
        <RadioGroup defaultValue="" name="notifications">
          <Radio value="all" label={copy.fieldset.allNotifications} />
          <Radio value="important" label={copy.fieldset.importantOnly} />
          <Radio value="none" label={copy.fieldset.none} />
        </RadioGroup>
      </Fieldset>
    );
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Horizontal: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Fieldset legend={copy.fieldset.pickOne} orientation="horizontal">
        <RadioGroup defaultValue="a" name="horizontal">
          <Radio value="a" label={copy.fieldset.optionA} />
          <Radio value="b" label={copy.fieldset.optionB} />
        </RadioGroup>
      </Fieldset>
    );
  },
};

export const AllStates: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '360px' }}>
        <Fieldset legend={copy.fieldset.defaultGroup}>
          <RadioGroup defaultValue="a" name="default">
            <Radio value="a" label={copy.fieldset.optionA} />
            <Radio value="b" label={copy.fieldset.optionB} />
          </RadioGroup>
        </Fieldset>
        <Fieldset legend={copy.fieldset.requiredGroup} required>
          <RadioGroup defaultValue="x" name="required">
            <Radio value="x" label={copy.fieldset.optionX} />
            <Radio value="y" label={copy.fieldset.optionY} />
          </RadioGroup>
        </Fieldset>
        <Fieldset legend={copy.fieldset.withDescription} description={copy.fieldset.pickPreference}>
          <RadioGroup defaultValue="c" name="desc">
            <Radio value="c" label={copy.fieldset.optionC} />
            <Radio value="d" label={copy.fieldset.optionD} />
          </RadioGroup>
        </Fieldset>
        <Fieldset
          legend={copy.fieldset.errorGroup}
          invalid
          errorMessage={copy.fieldset.selectionRequired}
        >
          <RadioGroup defaultValue="" name="error">
            <Radio value="e" label={copy.fieldset.optionE} />
            <Radio value="f" label={copy.fieldset.optionF} />
          </RadioGroup>
        </Fieldset>
        <Fieldset legend={copy.fieldset.disabledGroup} disabled>
          <RadioGroup defaultValue="g" name="disabled">
            <Radio value="g" label={copy.fieldset.optionG} />
            <Radio value="h" label={copy.fieldset.optionH} />
          </RadioGroup>
        </Fieldset>
      </div>
    );
  },
};

export const DarkTheme: Story = {
  parameters: { backgrounds: { disable: true } },
  globals: { theme: 'dark' },
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        data-theme="dark"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '24px',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: 'var(--zy-radius-md)',
          width: '360px',
        }}
      >
        <Fieldset legend={copy.fieldset.defaultGroup}>
          <RadioGroup defaultValue="a" name="dk-default">
            <Radio value="a" label={copy.fieldset.optionA} />
            <Radio value="b" label={copy.fieldset.optionB} />
          </RadioGroup>
        </Fieldset>
        <Fieldset legend={copy.fieldset.requiredGroup} required>
          <RadioGroup defaultValue="x" name="dk-req">
            <Radio value="x" label={copy.fieldset.optionX} />
            <Radio value="y" label={copy.fieldset.optionY} />
          </RadioGroup>
        </Fieldset>
        <Fieldset legend={copy.fieldset.errorGroup} invalid errorMessage={copy.fieldset.selectOne}>
          <RadioGroup defaultValue="" name="dk-err">
            <Radio value="e" label={copy.fieldset.optionE} />
            <Radio value="f" label={copy.fieldset.optionF} />
          </RadioGroup>
        </Fieldset>
      </div>
    );
  },
};
