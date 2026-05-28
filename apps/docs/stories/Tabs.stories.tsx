import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent, Button } from '@zhuiye/ui';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" style={{ width: 'min(400px, 100%)' }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Manage your account settings, update your email, and change your password.
        </p>
      </TabsContent>
      <TabsContent value="settings">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Configure application preferences, notifications, and display options.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-8)',
        width: 'min(440px, 100%)',
      }}
    >
      <div>
        <p
          style={{
            fontSize: 'var(--zy-font-size-xs)',
            color: 'var(--zy-muted-foreground)',
            margin: '0 0 var(--zy-spacing-2)',
            fontWeight: 'var(--zy-font-weight-semibold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Underline (default)
        </p>
        <Tabs defaultValue="tab1">
          <TabsList variant="underline">
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Overview content
            </p>
          </TabsContent>
          <TabsContent value="tab2">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Analytics content
            </p>
          </TabsContent>
          <TabsContent value="tab3">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Reports content
            </p>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <p
          style={{
            fontSize: 'var(--zy-font-size-xs)',
            color: 'var(--zy-muted-foreground)',
            margin: '0 0 var(--zy-spacing-2)',
            fontWeight: 'var(--zy-font-weight-semibold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Pills
        </p>
        <Tabs defaultValue="tab1">
          <TabsList variant="pills">
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Overview content
            </p>
          </TabsContent>
          <TabsContent value="tab2">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Analytics content
            </p>
          </TabsContent>
          <TabsContent value="tab3">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Reports content
            </p>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <p
          style={{
            fontSize: 'var(--zy-font-size-xs)',
            color: 'var(--zy-muted-foreground)',
            margin: '0 0 var(--zy-spacing-2)',
            fontWeight: 'var(--zy-font-weight-semibold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Contained
        </p>
        <Tabs defaultValue="tab1">
          <TabsList variant="contained">
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Overview content
            </p>
          </TabsContent>
          <TabsContent value="tab2">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Analytics content
            </p>
          </TabsContent>
          <TabsContent value="tab3">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Reports content
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-8)',
        width: 'min(400px, 100%)',
      }}
    >
      <div>
        <p
          style={{
            fontSize: 'var(--zy-font-size-xs)',
            color: 'var(--zy-muted-foreground)',
            margin: '0 0 var(--zy-spacing-2)',
            fontWeight: 'var(--zy-font-weight-semibold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Small
        </p>
        <Tabs defaultValue="tab1">
          <TabsList variant="pills" size="sm">
            <TabsTrigger value="tab1">Tab One</TabsTrigger>
            <TabsTrigger value="tab2">Tab Two</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Small tab content
            </p>
          </TabsContent>
          <TabsContent value="tab2">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Small tab content
            </p>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <p
          style={{
            fontSize: 'var(--zy-font-size-xs)',
            color: 'var(--zy-muted-foreground)',
            margin: '0 0 var(--zy-spacing-2)',
            fontWeight: 'var(--zy-font-weight-semibold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Medium (default)
        </p>
        <Tabs defaultValue="tab1">
          <TabsList variant="pills" size="md">
            <TabsTrigger value="tab1">Tab One</TabsTrigger>
            <TabsTrigger value="tab2">Tab Two</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Medium tab content
            </p>
          </TabsContent>
          <TabsContent value="tab2">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Medium tab content
            </p>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <p
          style={{
            fontSize: 'var(--zy-font-size-xs)',
            color: 'var(--zy-muted-foreground)',
            margin: '0 0 var(--zy-spacing-2)',
            fontWeight: 'var(--zy-font-weight-semibold)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Large
        </p>
        <Tabs defaultValue="tab1">
          <TabsList variant="pills" size="lg">
            <TabsTrigger value="tab1">Tab One</TabsTrigger>
            <TabsTrigger value="tab2">Tab Two</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Large tab content
            </p>
          </TabsContent>
          <TabsContent value="tab2">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Large tab content
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="general" orientation="vertical" style={{ height: '200px' }}>
      <TabsList variant="underline">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          General settings: language, timezone, and display preferences.
        </p>
      </TabsContent>
      <TabsContent value="security">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Security settings: password, two-factor authentication, and sessions.
        </p>
      </TabsContent>
      <TabsContent value="notifications">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Notification preferences: email, push, and in-app alerts.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const ManualActivation: Story = {
  render: () => (
    <Tabs defaultValue="preview" activationMode="manual" style={{ width: 'min(400px, 100%)' }}>
      <TabsList variant="contained">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="diff">Diff</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Use Arrow keys to navigate tabs. Press Enter or Space to activate. This tab is activated
          manually.
        </p>
      </TabsContent>
      <TabsContent value="code">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Code view content.
        </p>
      </TabsContent>
      <TabsContent value="diff">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Diff view content.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState('tab1');
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          width: 'min(400px, 100%)',
        }}
      >
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Active: {value}
        </p>
        <Button size="sm" variant="outline" onClick={() => setValue('tab2')}>
          Switch to Settings
        </Button>
        <Tabs value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Account content controlled externally.
            </p>
          </TabsContent>
          <TabsContent value="tab2">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              Settings content controlled externally.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};

export const DisabledTrigger: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: 'min(400px, 100%)' }}>
      <TabsList variant="pills">
        <TabsTrigger value="tab1">Active</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="tab3">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          The &quot;Disabled&quot; tab cannot be selected.
        </p>
      </TabsContent>
      <TabsContent value="tab2">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          This won&apos;t show.
        </p>
      </TabsContent>
      <TabsContent value="tab3">
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Another tab content.
        </p>
      </TabsContent>
    </Tabs>
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
        padding: '24px',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
        width: 'min(400px, 100%)',
      }}
    >
      <Tabs defaultValue="tab1">
        <TabsList variant="underline">
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p
            style={{
              fontSize: 'var(--zy-font-size-sm)',
              color: 'var(--zy-muted-foreground)',
              margin: 0,
            }}
          >
            Account content in dark theme.
          </p>
        </TabsContent>
        <TabsContent value="tab2">
          <p
            style={{
              fontSize: 'var(--zy-font-size-sm)',
              color: 'var(--zy-muted-foreground)',
              margin: 0,
            }}
          >
            Settings content in dark theme.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
