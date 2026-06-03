import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverClose,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
  PopoverTitle,
  PopoverDescription,
  Button,
  Field,
  Input,
  Select,
} from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button>{copy.popoverComp.openPopover}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>{copy.popoverComp.popoverTitle}</PopoverTitle>
            <PopoverDescription>{copy.popoverComp.popoverDesc}</PopoverDescription>
          </PopoverHeader>
          <p
            style={{
              fontSize: 'var(--zy-font-size-sm)',
              color: 'var(--zy-muted-foreground)',
              margin: 0,
            }}
          >
            {copy.popoverComp.richContent}
          </p>
          <PopoverFooter>
            <PopoverClose asChild>
              <Button size="sm" variant="outline">
                {copy.popoverComp.gotIt}
              </Button>
            </PopoverClose>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', gap: '12px' }}>
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm">{copy.popoverComp.small}</Button>
          </PopoverTrigger>
          <PopoverContent size="sm">
            <PopoverTitle>{copy.popoverComp.smallPopover}</PopoverTitle>
            <PopoverDescription>{copy.popoverComp.compactArea}</PopoverDescription>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button>{copy.popoverComp.medium}</Button>
          </PopoverTrigger>
          <PopoverContent size="md">
            <PopoverTitle>{copy.popoverComp.mediumPopover}</PopoverTitle>
            <PopoverDescription>{copy.popoverComp.defaultSize}</PopoverDescription>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button size="lg">{copy.popoverComp.large}</Button>
          </PopoverTrigger>
          <PopoverContent size="lg">
            <PopoverTitle>{copy.popoverComp.largePopover}</PopoverTitle>
            <PopoverDescription>{copy.popoverComp.spaciousDesc}</PopoverDescription>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export const Placements: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '80px' }}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">{copy.popoverComp.top}</Button>
          </PopoverTrigger>
          <PopoverContent side="top">
            <PopoverTitle>{copy.popoverComp.top}</PopoverTitle>
            <PopoverDescription>{copy.popoverComp.opensAbove}</PopoverDescription>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">{copy.popoverComp.bottom}</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">
            <PopoverTitle>{copy.popoverComp.bottom}</PopoverTitle>
            <PopoverDescription>{copy.popoverComp.opensBelow}</PopoverDescription>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">{copy.popoverComp.left}</Button>
          </PopoverTrigger>
          <PopoverContent side="left">
            <PopoverTitle>{copy.popoverComp.left}</PopoverTitle>
            <PopoverDescription>{copy.popoverComp.opensLeft}</PopoverDescription>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">{copy.popoverComp.right}</Button>
          </PopoverTrigger>
          <PopoverContent side="right">
            <PopoverTitle>{copy.popoverComp.right}</PopoverTitle>
            <PopoverDescription>{copy.popoverComp.opensRight}</PopoverDescription>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export const FormPopover: Story = {
  render: () => {
    const copy = useStoryCopy();
    const categoryOptions = [
      { value: 'design', label: copy.popoverComp.design },
      { value: 'engineering', label: copy.popoverComp.engineering },
      { value: 'marketing', label: copy.popoverComp.marketing },
    ];

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button>{copy.popoverComp.quickAdd}</Button>
        </PopoverTrigger>
        <PopoverContent size="md">
          <PopoverHeader>
            <PopoverTitle>{copy.popoverComp.addTask}</PopoverTitle>
            <PopoverDescription>{copy.popoverComp.createTask}</PopoverDescription>
          </PopoverHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zy-spacing-3)' }}>
            <Field label={copy.popoverComp.taskName}>
              <Input placeholder={copy.popoverComp.enterTaskName} fullWidth />
            </Field>
            <Field label={copy.popoverComp.category}>
              <Select
                options={categoryOptions}
                placeholder={copy.popoverComp.selectCategory}
                fullWidth
              />
            </Field>
          </div>
          <PopoverFooter>
            <PopoverClose asChild>
              <Button size="sm" variant="outline">
                {copy.popoverComp.cancel}
              </Button>
            </PopoverClose>
            <Button size="sm">{copy.popoverComp.create}</Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    );
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const copy = useStoryCopy();
    const [open, setOpen] = useState(false);
    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}
      >
        <p style={{ fontSize: 'var(--zy-font-size-sm)', color: 'var(--zy-muted-foreground)' }}>
          Open: {String(open)}
        </p>
        <Button onClick={() => setOpen(true)}>{copy.popoverComp.openProgrammatically}</Button>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline">Trigger</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>{copy.popoverComp.controlledPopover}</PopoverTitle>
              <PopoverDescription>{copy.popoverComp.controlledDesc}</PopoverDescription>
            </PopoverHeader>
            <PopoverFooter>
              <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
                {copy.popoverComp.close}
              </Button>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export const WithoutArrow: Story = {
  render: () => {
    const copy = useStoryCopy();
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button>{copy.popoverComp.noArrow}</Button>
        </PopoverTrigger>
        <PopoverContent showArrow={false}>
          <PopoverTitle>{copy.popoverComp.noArrow}</PopoverTitle>
          <PopoverDescription>{copy.popoverComp.noArrowDesc}</PopoverDescription>
        </PopoverContent>
      </Popover>
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
          padding: '24px',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: 'var(--zy-radius-md)',
        }}
      >
        <Popover defaultOpen>
          <PopoverTrigger asChild>
            <Button>{copy.popoverComp.darkPopover}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>{copy.popoverComp.darkTheme}</PopoverTitle>
              <PopoverDescription>{copy.popoverComp.darkThemeDesc}</PopoverDescription>
            </PopoverHeader>
            <p
              style={{
                fontSize: 'var(--zy-font-size-sm)',
                color: 'var(--zy-muted-foreground)',
                margin: 0,
              }}
            >
              {copy.popoverComp.darkModeDesc}
            </p>
            <PopoverFooter>
              <PopoverClose asChild>
                <Button size="sm" variant="outline">
                  {copy.popoverComp.close}
                </Button>
              </PopoverClose>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};
