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

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverDescription>
            This is a compact popover with some helpful information.
          </PopoverDescription>
        </PopoverHeader>
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          You can put rich content inside a popover.
        </p>
        <PopoverFooter>
          <PopoverClose asChild>
            <Button size="sm" variant="outline">
              Got it
            </Button>
          </PopoverClose>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="sm">Small</Button>
        </PopoverTrigger>
        <PopoverContent size="sm">
          <PopoverTitle>Small Popover</PopoverTitle>
          <PopoverDescription>Compact content area.</PopoverDescription>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button>Medium</Button>
        </PopoverTrigger>
        <PopoverContent size="md">
          <PopoverTitle>Medium Popover</PopoverTitle>
          <PopoverDescription>Default size for most use cases.</PopoverDescription>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button size="lg">Large</Button>
        </PopoverTrigger>
        <PopoverContent size="lg">
          <PopoverTitle>Large Popover</PopoverTitle>
          <PopoverDescription>Spacious popover for complex content and forms.</PopoverDescription>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '80px' }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <PopoverTitle>Top</PopoverTitle>
          <PopoverDescription>Opens above the trigger.</PopoverDescription>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <PopoverTitle>Bottom</PopoverTitle>
          <PopoverDescription>Opens below the trigger.</PopoverDescription>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <PopoverTitle>Left</PopoverTitle>
          <PopoverDescription>Opens to the left.</PopoverDescription>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <PopoverTitle>Right</PopoverTitle>
          <PopoverDescription>Opens to the right.</PopoverDescription>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const FormPopover: Story = {
  render: () => {
    const categoryOptions = [
      { value: 'design', label: 'Design' },
      { value: 'engineering', label: 'Engineering' },
      { value: 'marketing', label: 'Marketing' },
    ];

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button>Quick Add</Button>
        </PopoverTrigger>
        <PopoverContent size="md">
          <PopoverHeader>
            <PopoverTitle>Add Task</PopoverTitle>
            <PopoverDescription>Create a new task quickly.</PopoverDescription>
          </PopoverHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zy-spacing-3)' }}>
            <Field label="Task Name">
              <Input placeholder="Enter task name" fullWidth />
            </Field>
            <Field label="Category">
              <Select options={categoryOptions} placeholder="Select category" fullWidth />
            </Field>
          </div>
          <PopoverFooter>
            <PopoverClose asChild>
              <Button size="sm" variant="outline">
                Cancel
              </Button>
            </PopoverClose>
            <Button size="sm">Create</Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    );
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = useState(false);
    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}
      >
        <p style={{ fontSize: 'var(--zy-font-size-sm)', color: 'var(--zy-muted-foreground)' }}>
          Open: {String(open)}
        </p>
        <Button onClick={() => setOpen(true)}>Open Programmatically</Button>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline">Trigger</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Controlled Popover</PopoverTitle>
              <PopoverDescription>This popover is controlled by external state.</PopoverDescription>
            </PopoverHeader>
            <PopoverFooter>
              <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export const WithoutArrow: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>No Arrow</Button>
      </PopoverTrigger>
      <PopoverContent showArrow={false}>
        <PopoverTitle>No Arrow</PopoverTitle>
        <PopoverDescription>This popover has no arrow indicator.</PopoverDescription>
      </PopoverContent>
    </Popover>
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
      }}
    >
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <Button>Dark Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Dark Theme</PopoverTitle>
            <PopoverDescription>This popover renders with dark theme tokens.</PopoverDescription>
          </PopoverHeader>
          <p
            style={{
              fontSize: 'var(--zy-font-size-sm)',
              color: 'var(--zy-muted-foreground)',
              margin: 0,
            }}
          >
            Dark mode styling uses the same CSS variables with different values.
          </p>
          <PopoverFooter>
            <PopoverClose asChild>
              <Button size="sm" variant="outline">
                Close
              </Button>
            </PopoverClose>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
