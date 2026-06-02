import type { Meta, StoryObj } from '@storybook/react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from '@zhuiye/ui';

const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menubar>;

function EditorMenubar({ variant = 'framed' }: { variant?: 'plain' | 'subtle' | 'framed' }) {
  return (
    <Menubar variant={variant} defaultValue="file">
      <MenubarMenu value="file">
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>File</MenubarLabel>
          <MenubarItem>
            New file
            <MenubarShortcut>Ctrl+N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Open workspace</MenubarItem>
          <MenubarSeparator />
          <MenubarItem tone="danger">Close workspace</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="edit">
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Transform</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Scale</MenubarItem>
              <MenubarItem>Rotate</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="view">
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Show rulers</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show grid</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value="comfortable">
            <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
            <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export const Default: Story = {
  render: () => <EditorMenubar />,
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--zy-spacing-5)',
        justifyItems: 'start',
      }}
    >
      <EditorMenubar variant="plain" />
      <EditorMenubar variant="subtle" />
      <EditorMenubar variant="framed" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: 'var(--zy-spacing-5)',
        justifyItems: 'start',
      }}
    >
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Menubar key={size} variant="framed" size={size} defaultValue="file">
          <MenubarMenu value="file">
            <MenubarTrigger showChevron>File</MenubarTrigger>
            <MenubarContent showArrow={false}>
              <MenubarItem>New file</MenubarItem>
              <MenubarItem>Open</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu value="view">
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent showArrow={false}>
              <MenubarItem>Zoom in</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      ))}
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
        padding: 'var(--zy-spacing-6)',
        backgroundColor: 'var(--zy-background)',
        color: 'var(--zy-foreground)',
        borderRadius: 'var(--zy-radius-md)',
      }}
    >
      <EditorMenubar />
    </div>
  ),
};
