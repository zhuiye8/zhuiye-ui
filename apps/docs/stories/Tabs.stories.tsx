import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent, Button } from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const c = useStoryCopy().tabs;
    return (
      <Tabs defaultValue="account" style={{ width: 'min(400px, 100%)' }}>
        <TabsList>
          <TabsTrigger value="account">{c.account}</TabsTrigger>
          <TabsTrigger value="settings">{c.settings}</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p
            style={{
              fontSize: 'var(--zy-font-size-sm)',
              color: 'var(--zy-muted-foreground)',
              margin: 0,
            }}
          >
            {c.accountDesc}
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
            {c.settingsDesc}
          </p>
        </TabsContent>
      </Tabs>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const c = useStoryCopy().tabs;
    return (
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
            {c.underline}
          </p>
          <Tabs defaultValue="tab1">
            <TabsList variant="underline">
              <TabsTrigger value="tab1">{c.overview}</TabsTrigger>
              <TabsTrigger value="tab2">{c.analytics}</TabsTrigger>
              <TabsTrigger value="tab3">{c.reports}</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p
                style={{
                  fontSize: 'var(--zy-font-size-sm)',
                  color: 'var(--zy-muted-foreground)',
                  margin: 0,
                }}
              >
                {c.overviewContent}
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
                {c.analyticsContent}
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
                {c.reportsContent}
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
            {c.pills}
          </p>
          <Tabs defaultValue="tab1">
            <TabsList variant="pills">
              <TabsTrigger value="tab1">{c.overview}</TabsTrigger>
              <TabsTrigger value="tab2">{c.analytics}</TabsTrigger>
              <TabsTrigger value="tab3">{c.reports}</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p
                style={{
                  fontSize: 'var(--zy-font-size-sm)',
                  color: 'var(--zy-muted-foreground)',
                  margin: 0,
                }}
              >
                {c.overviewContent}
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
                {c.analyticsContent}
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
                {c.reportsContent}
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
            {c.contained}
          </p>
          <Tabs defaultValue="tab1">
            <TabsList variant="contained">
              <TabsTrigger value="tab1">{c.overview}</TabsTrigger>
              <TabsTrigger value="tab2">{c.analytics}</TabsTrigger>
              <TabsTrigger value="tab3">{c.reports}</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p
                style={{
                  fontSize: 'var(--zy-font-size-sm)',
                  color: 'var(--zy-muted-foreground)',
                  margin: 0,
                }}
              >
                {c.overviewContent}
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
                {c.analyticsContent}
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
                {c.reportsContent}
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const c = useStoryCopy().tabs;
    const btn = useStoryCopy().button;
    return (
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
            {btn.small}
          </p>
          <Tabs defaultValue="tab1">
            <TabsList variant="pills" size="sm">
              <TabsTrigger value="tab1">{c.tabOne}</TabsTrigger>
              <TabsTrigger value="tab2">{c.tabTwo}</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p
                style={{
                  fontSize: 'var(--zy-font-size-sm)',
                  color: 'var(--zy-muted-foreground)',
                  margin: 0,
                }}
              >
                {c.smallTabContent}
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
                {c.smallTabContent}
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
            {btn.medium}
          </p>
          <Tabs defaultValue="tab1">
            <TabsList variant="pills" size="md">
              <TabsTrigger value="tab1">{c.tabOne}</TabsTrigger>
              <TabsTrigger value="tab2">{c.tabTwo}</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p
                style={{
                  fontSize: 'var(--zy-font-size-sm)',
                  color: 'var(--zy-muted-foreground)',
                  margin: 0,
                }}
              >
                {c.mediumTabContent}
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
                {c.mediumTabContent}
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
            {btn.large}
          </p>
          <Tabs defaultValue="tab1">
            <TabsList variant="pills" size="lg">
              <TabsTrigger value="tab1">{c.tabOne}</TabsTrigger>
              <TabsTrigger value="tab2">{c.tabTwo}</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p
                style={{
                  fontSize: 'var(--zy-font-size-sm)',
                  color: 'var(--zy-muted-foreground)',
                  margin: 0,
                }}
              >
                {c.largeTabContent}
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
                {c.largeTabContent}
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const c = useStoryCopy().tabs;
    return (
      <Tabs defaultValue="general" orientation="vertical" style={{ height: '200px' }}>
        <TabsList variant="underline">
          <TabsTrigger value="general">{c.general}</TabsTrigger>
          <TabsTrigger value="security">{c.security}</TabsTrigger>
          <TabsTrigger value="notifications">{c.notifications}</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <p
            style={{
              fontSize: 'var(--zy-font-size-sm)',
              color: 'var(--zy-muted-foreground)',
              margin: 0,
            }}
          >
            {c.generalDesc}
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
            {c.securityDesc}
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
            {c.notificationsDesc}
          </p>
        </TabsContent>
      </Tabs>
    );
  },
};

export const ManualActivation: Story = {
  render: () => {
    const c = useStoryCopy().tabs;
    return (
      <Tabs defaultValue="preview" activationMode="manual" style={{ width: 'min(400px, 100%)' }}>
        <TabsList variant="contained">
          <TabsTrigger value="preview">{c.preview}</TabsTrigger>
          <TabsTrigger value="code">{c.code}</TabsTrigger>
          <TabsTrigger value="diff">{c.diff}</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <p
            style={{
              fontSize: 'var(--zy-font-size-sm)',
              color: 'var(--zy-muted-foreground)',
              margin: 0,
            }}
          >
            {c.manualActivationDesc}
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
            {c.codeContent}
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
            {c.diffContent}
          </p>
        </TabsContent>
      </Tabs>
    );
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState('tab1');
    const c = useStoryCopy().tabs;
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
          {c.active}: {value}
        </p>
        <Button size="sm" variant="outline" onClick={() => setValue('tab2')}>
          {c.switchToSettings}
        </Button>
        <Tabs value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="tab1">{c.account}</TabsTrigger>
            <TabsTrigger value="tab2">{c.settings}</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              {c.accountControlled}
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
              {c.settingsControlled}
            </p>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};

export const DisabledTrigger: Story = {
  render: () => {
    const c = useStoryCopy().tabs;
    return (
      <Tabs defaultValue="tab1" style={{ width: 'min(400px, 100%)' }}>
        <TabsList variant="pills">
          <TabsTrigger value="tab1">{c.active}</TabsTrigger>
          <TabsTrigger value="tab2" disabled>
            {c.disabled}
          </TabsTrigger>
          <TabsTrigger value="tab3">{c.another}</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p
            style={{
              fontSize: 'var(--zy-font-size-sm)',
              color: 'var(--zy-muted-foreground)',
              margin: 0,
            }}
          >
            {c.disabledTabDesc}
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
            {c.disabledTabDesc}
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
            {c.anotherTabContent}
          </p>
        </TabsContent>
      </Tabs>
    );
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => {
    const c = useStoryCopy().tabs;
    return (
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
            <TabsTrigger value="tab1">{c.account}</TabsTrigger>
            <TabsTrigger value="tab2">{c.settings}</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              {c.accountDark}
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
              {c.settingsDark}
            </p>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};
