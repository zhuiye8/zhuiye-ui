import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription, AlertActions, Button } from '@zhuiye/ui';

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
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>This is a neutral alert with general information.</AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  args: { variant: 'info' },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Did you know?</AlertTitle>
      <AlertDescription>You can customize your dashboard from the settings page.</AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  args: { variant: 'success' },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved successfully.</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  args: { variant: 'warning' },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Your storage is almost full. Please free up space.</AlertDescription>
    </Alert>
  ),
};

export const Danger: Story = {
  args: { variant: 'danger' },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Failed to save your changes. Please try again.</AlertDescription>
    </Alert>
  ),
};

export const Small: Story = {
  args: { variant: 'info', size: 'sm' },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Small Alert</AlertTitle>
      <AlertDescription>This is a small-sized alert.</AlertDescription>
    </Alert>
  ),
};

export const Large: Story = {
  args: { variant: 'warning', size: 'lg' },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Large Alert</AlertTitle>
      <AlertDescription>This is a large-sized alert with more prominent styling.</AlertDescription>
    </Alert>
  ),
};

export const WithActions: Story = {
  args: { variant: 'danger' },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Connection failed</AlertTitle>
      <AlertDescription>
        Unable to connect to the server. Check your network and try again.
      </AlertDescription>
      <AlertActions>
        <Button variant="outline" size="sm">
          Retry
        </Button>
        <Button variant="ghost" size="sm">
          Dismiss
        </Button>
      </AlertActions>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-3)',
        width: 'min(640px, 100%)',
      }}
    >
      <Alert variant="neutral">
        <AlertTitle>Neutral</AlertTitle>
        <AlertDescription>General information alert.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Informational alert with details.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Operation completed successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please review before proceeding.</AlertDescription>
      </Alert>
      <Alert variant="danger">
        <AlertTitle>Danger</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-3)',
        width: 'min(640px, 100%)',
      }}
    >
      <Alert variant="info" size="sm">
        <AlertTitle>Small</AlertTitle>
        <AlertDescription>Small alert for compact layouts.</AlertDescription>
      </Alert>
      <Alert variant="info" size="md">
        <AlertTitle>Medium</AlertTitle>
        <AlertDescription>Default medium-sized alert.</AlertDescription>
      </Alert>
      <Alert variant="info" size="lg">
        <AlertTitle>Large</AlertTitle>
        <AlertDescription>Large alert for prominent messages.</AlertDescription>
      </Alert>
    </div>
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
        <AlertTitle>Neutral</AlertTitle>
        <AlertDescription>General information.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Informational details.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Completed successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Review before proceeding.</AlertDescription>
      </Alert>
      <Alert variant="danger">
        <AlertTitle>Danger</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    </div>
  ),
};
