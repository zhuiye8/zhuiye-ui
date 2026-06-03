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
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menubar>;

function EditorMenubar({ variant = 'framed' }: { variant?: 'plain' | 'subtle' | 'framed' }) {
  const copy = useStoryCopy();
  return (
    <Menubar variant={variant} defaultValue="file">
      <MenubarMenu value="file">
        <MenubarTrigger>{copy.menubar.file}</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>{copy.menubar.file}</MenubarLabel>
          <MenubarItem>
            {copy.menubar.newFile}
            <MenubarShortcut>{copy.menubar.ctrlN}</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>{copy.menubar.openWorkspace}</MenubarItem>
          <MenubarSeparator />
          <MenubarItem tone="danger">{copy.menubar.closeWorkspace}</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="edit">
        <MenubarTrigger>{copy.menubar.edit}</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>{copy.menubar.undo}</MenubarItem>
          <MenubarItem>{copy.menubar.redo}</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>{copy.menubar.transform}</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>{copy.menubar.scale}</MenubarItem>
              <MenubarItem>{copy.menubar.rotate}</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="view">
        <MenubarTrigger>{copy.menubar.view}</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>{copy.menubar.showRulers}</MenubarCheckboxItem>
          <MenubarCheckboxItem>{copy.menubar.showGrid}</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarRadioGroup value="comfortable">
            <MenubarRadioItem value="compact">{copy.menubar.compact}</MenubarRadioItem>
            <MenubarRadioItem value="comfortable">{copy.menubar.comfortable}</MenubarRadioItem>
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
  render: () => {
    const copy = useStoryCopy();
    return (
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
              <MenubarTrigger showChevron>{copy.menubar.file}</MenubarTrigger>
              <MenubarContent showArrow={false}>
                <MenubarItem>{copy.menubar.newFile}</MenubarItem>
                <MenubarItem>{copy.menubar.open}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu value="view">
              <MenubarTrigger>{copy.menubar.view}</MenubarTrigger>
              <MenubarContent showArrow={false}>
                <MenubarItem>{copy.menubar.zoomIn}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ))}
      </div>
    );
  },
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
