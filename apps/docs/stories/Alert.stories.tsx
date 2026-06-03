import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription, AlertActions, Button } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    variant: 'neutral',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Neutral: Story = {
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <Alert {...args}>
        <AlertTitle>{copy.alert.information}</AlertTitle>
        <AlertDescription>{copy.alert.neutralAlert}</AlertDescription>
      </Alert>
    );
  },
};

export const Info: Story = {
  args: { variant: 'info' },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <Alert {...args}>
        <AlertTitle>{copy.alert.didYouKnow}</AlertTitle>
        <AlertDescription>{copy.alert.customizeDashboard}</AlertDescription>
      </Alert>
    );
  },
};

export const Success: Story = {
  args: { variant: 'success' },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <Alert {...args}>
        <AlertTitle>{copy.alert.success}</AlertTitle>
        <AlertDescription>{copy.alert.changesSaved}</AlertDescription>
      </Alert>
    );
  },
};

export const Warning: Story = {
  args: { variant: 'warning' },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <Alert {...args}>
        <AlertTitle>{copy.alert.warning}</AlertTitle>
        <AlertDescription>{copy.alert.storageFull}</AlertDescription>
      </Alert>
    );
  },
};

export const Danger: Story = {
  args: { variant: 'danger' },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <Alert {...args}>
        <AlertTitle>{copy.alert.error}</AlertTitle>
        <AlertDescription>{copy.alert.failedSave}</AlertDescription>
      </Alert>
    );
  },
};

export const Small: Story = {
  args: { variant: 'info', size: 'sm' },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <Alert {...args}>
        <AlertTitle>{copy.alert.smallAlert}</AlertTitle>
        <AlertDescription>{copy.alert.smallAlertDesc}</AlertDescription>
      </Alert>
    );
  },
};

export const Large: Story = {
  args: { variant: 'warning', size: 'lg' },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <Alert {...args}>
        <AlertTitle>{copy.alert.largeAlert}</AlertTitle>
        <AlertDescription>{copy.alert.largeAlertDesc}</AlertDescription>
      </Alert>
    );
  },
};

export const WithActions: Story = {
  args: { variant: 'danger' },
  render: (args) => {
    const copy = useStoryCopy();
    return (
      <Alert {...args}>
        <AlertTitle>{copy.alert.connectionFailed}</AlertTitle>
        <AlertDescription>{copy.alert.unableConnect}</AlertDescription>
        <AlertActions>
          <Button variant="outline" size="sm">
            {copy.alert.retry}
          </Button>
          <Button variant="ghost" size="sm">
            {copy.alert.dismiss}
          </Button>
        </AlertActions>
      </Alert>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          width: 'min(640px, 100%)',
        }}
      >
        <Alert variant="neutral">
          <AlertTitle>{copy.alert.neutral}</AlertTitle>
          <AlertDescription>{copy.alert.generalInfo}</AlertDescription>
        </Alert>
        <Alert variant="info">
          <AlertTitle>{copy.alert.info}</AlertTitle>
          <AlertDescription>{copy.alert.infoDetails}</AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertTitle>{copy.alert.success}</AlertTitle>
          <AlertDescription>{copy.alert.operationSuccess}</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTitle>{copy.alert.warning}</AlertTitle>
          <AlertDescription>{copy.alert.pleaseReview}</AlertDescription>
        </Alert>
        <Alert variant="danger">
          <AlertTitle>{copy.alert.danger}</AlertTitle>
          <AlertDescription>{copy.alert.somethingWrong}</AlertDescription>
        </Alert>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          width: 'min(640px, 100%)',
        }}
      >
        <Alert variant="info" size="sm">
          <AlertTitle>{copy.alert.smallAlert}</AlertTitle>
          <AlertDescription>{copy.alert.smallAlertDesc}</AlertDescription>
        </Alert>
        <Alert variant="info" size="md">
          <AlertTitle>{copy.alert.information}</AlertTitle>
          <AlertDescription>{copy.alert.neutralAlert}</AlertDescription>
        </Alert>
        <Alert variant="info" size="lg">
          <AlertTitle>{copy.alert.largeAlert}</AlertTitle>
          <AlertDescription>{copy.alert.largeAlertDesc}</AlertDescription>
        </Alert>
      </div>
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
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          padding: 'var(--zy-spacing-6)',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: 'var(--zy-radius-md)',
          width: 'min(640px, 100%)',
        }}
      >
        <Alert variant="neutral">
          <AlertTitle>{copy.alert.neutral}</AlertTitle>
          <AlertDescription>{copy.alert.generalInfoShort}</AlertDescription>
        </Alert>
        <Alert variant="info">
          <AlertTitle>{copy.alert.info}</AlertTitle>
          <AlertDescription>{copy.alert.infoShort}</AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertTitle>{copy.alert.success}</AlertTitle>
          <AlertDescription>{copy.alert.completedSuccess}</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTitle>{copy.alert.warning}</AlertTitle>
          <AlertDescription>{copy.alert.reviewProceed}</AlertDescription>
        </Alert>
        <Alert variant="danger">
          <AlertTitle>{copy.alert.danger}</AlertTitle>
          <AlertDescription>{copy.alert.somethingWrong}</AlertDescription>
        </Alert>
      </div>
    );
  },
};
