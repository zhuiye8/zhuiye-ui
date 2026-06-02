import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Button,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
} from '@zhuiye/ui';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

function ToastDemo({
  tone = 'neutral',
  title = 'Saved',
  description = 'Your changes have been saved.',
}: {
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider duration={5000} swipeDirection="right">
      <Button onClick={() => setOpen(true)}>Show toast</Button>
      <Toast open={open} onOpenChange={setOpen} tone={tone}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastAction altText="Undo last change">Undo</ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const Tones: Story = {
  render: () => (
    <ToastProvider duration={100000}>
      <Toast forceMount tone="neutral">
        <ToastTitle>Queued</ToastTitle>
        <ToastDescription>Sync will continue in the background.</ToastDescription>
      </Toast>
      <Toast forceMount tone="info">
        <ToastTitle>New version</ToastTitle>
        <ToastDescription>Documentation has been updated.</ToastDescription>
      </Toast>
      <Toast forceMount tone="success">
        <ToastTitle>Published</ToastTitle>
        <ToastDescription>The release was published successfully.</ToastDescription>
      </Toast>
      <Toast forceMount tone="warning">
        <ToastTitle>Storage limit</ToastTitle>
        <ToastDescription>Usage is close to the workspace limit.</ToastDescription>
      </Toast>
      <Toast forceMount tone="danger">
        <ToastTitle>Deploy failed</ToastTitle>
        <ToastDescription>Review the build logs before retrying.</ToastDescription>
      </Toast>
      <ToastViewport position="bottom-right" />
    </ToastProvider>
  ),
};

export const WithAction: Story = {
  render: () => (
    <ToastProvider duration={100000}>
      <Toast forceMount tone="success">
        <ToastTitle>Member invited</ToastTitle>
        <ToastDescription>An invitation email has been sent.</ToastDescription>
        <ToastAction altText="Open team members">View team</ToastAction>
      </Toast>
      <ToastViewport position="bottom-center" />
    </ToastProvider>
  ),
};

export const Positions: Story = {
  render: () => (
    <ToastProvider duration={100000}>
      <Toast forceMount tone="info" size="sm">
        <ToastTitle>Top center</ToastTitle>
        <ToastDescription>Viewport placement can be configured.</ToastDescription>
      </Toast>
      <ToastViewport position="top-center" />
    </ToastProvider>
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
        minHeight: '320px',
        padding: 'var(--zy-spacing-6)',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
      }}
    >
      <ToastProvider duration={100000}>
        <Toast forceMount tone="success">
          <ToastTitle>Dark mode toast</ToastTitle>
          <ToastDescription>
            Surface, border, and text tokens switch automatically.
          </ToastDescription>
        </Toast>
        <ToastViewport position="bottom-right" />
      </ToastProvider>
    </div>
  ),
};
