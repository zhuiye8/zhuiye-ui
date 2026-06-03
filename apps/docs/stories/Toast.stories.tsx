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
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

function ToastDemo({
  tone = 'neutral',
}: {
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
}) {
  const [open, setOpen] = useState(false);
  const c = useStoryCopy().toast;

  return (
    <ToastProvider duration={5000} swipeDirection="right">
      <Button onClick={() => setOpen(true)}>{c.showToast}</Button>
      <Toast open={open} onOpenChange={setOpen} tone={tone}>
        <ToastTitle>{c.saved}</ToastTitle>
        <ToastDescription>{c.savedDesc}</ToastDescription>
        <ToastAction altText={c.undoLastChange}>{c.undo}</ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const Tones: Story = {
  render: () => {
    const c = useStoryCopy().toast;
    return (
      <ToastProvider duration={100000}>
        <Toast forceMount tone="neutral">
          <ToastTitle>{c.queued}</ToastTitle>
          <ToastDescription>{c.queuedDesc}</ToastDescription>
        </Toast>
        <Toast forceMount tone="info">
          <ToastTitle>{c.newVersion}</ToastTitle>
          <ToastDescription>{c.newVersionDesc}</ToastDescription>
        </Toast>
        <Toast forceMount tone="success">
          <ToastTitle>{c.published}</ToastTitle>
          <ToastDescription>{c.publishedDesc}</ToastDescription>
        </Toast>
        <Toast forceMount tone="warning">
          <ToastTitle>{c.storageLimit}</ToastTitle>
          <ToastDescription>{c.storageLimitDesc}</ToastDescription>
        </Toast>
        <Toast forceMount tone="danger">
          <ToastTitle>{c.deployFailed}</ToastTitle>
          <ToastDescription>{c.deployFailedDesc}</ToastDescription>
        </Toast>
        <ToastViewport position="bottom-right" />
      </ToastProvider>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const c = useStoryCopy().toast;
    return (
      <ToastProvider duration={100000}>
        <Toast forceMount tone="success">
          <ToastTitle>{c.memberInvited}</ToastTitle>
          <ToastDescription>{c.memberInvitedDesc}</ToastDescription>
          <ToastAction altText={c.openTeamMembers}>{c.viewTeam}</ToastAction>
        </Toast>
        <ToastViewport position="bottom-center" />
      </ToastProvider>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const c = useStoryCopy().toast;
    return (
      <ToastProvider duration={100000}>
        <Toast forceMount tone="info" size="sm">
          <ToastTitle>{c.topCenter}</ToastTitle>
          <ToastDescription>{c.viewportDesc}</ToastDescription>
        </Toast>
        <ToastViewport position="top-center" />
      </ToastProvider>
    );
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => {
    const c = useStoryCopy().toast;
    return (
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
            <ToastTitle>{c.darkModeToast}</ToastTitle>
            <ToastDescription>{c.darkModeToastDesc}</ToastDescription>
          </Toast>
          <ToastViewport position="bottom-right" />
        </ToastProvider>
      </div>
    );
  },
};
