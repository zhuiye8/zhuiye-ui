import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
  Button,
} from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => {
    const c = useStoryCopy().dropdownMenu;
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{c.openMenu}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{c.actions}</DropdownMenuLabel>
          <DropdownMenuItem>{c.newFile}</DropdownMenuItem>
          <DropdownMenuItem>{c.newFolder}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {c.copy}
            <DropdownMenuShortcut>Ctrl+C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {c.paste}
            <DropdownMenuShortcut>Ctrl+V</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {c.selectAll}
            <DropdownMenuShortcut>Ctrl+A</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const CheckboxRadio: Story = {
  render: function CheckboxRadioStory() {
    const [showToolbar, setShowToolbar] = useState(true);
    const [showStatusbar, setShowStatusbar] = useState(false);
    const [theme, setTheme] = useState('light');
    const c = useStoryCopy().dropdownMenu;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          alignItems: 'flex-start',
        }}
      >
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Toolbar: {String(showToolbar)} | Statusbar: {String(showStatusbar)} | Theme: {theme}
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{c.viewOptions}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{c.appearance}</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
              {c.showToolbar}
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={showStatusbar} onCheckedChange={setShowStatusbar}>
              {c.showStatusbar}
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>{c.theme}</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
              <DropdownMenuRadioItem value="light">{c.light}</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">{c.dark}</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system">{c.system}</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
};

export const Submenu: Story = {
  render: () => {
    const c = useStoryCopy().dropdownMenu;
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{c.actions}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>{c.newFile}</DropdownMenuItem>
          <DropdownMenuItem>{c.open}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>{c.exportAs}</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>{c.pdf}</DropdownMenuItem>
              <DropdownMenuItem>{c.html}</DropdownMenuItem>
              <DropdownMenuItem>{c.markdown}</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>{c.share}</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>{c.email}</DropdownMenuItem>
              <DropdownMenuItem>{c.link}</DropdownMenuItem>
              <DropdownMenuItem>{c.embed}</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem tone="danger">{c.delete}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const DisabledItem: Story = {
  render: () => {
    const c = useStoryCopy().dropdownMenu;
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{c.openMenu}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>{c.edit}</DropdownMenuItem>
          <DropdownMenuItem>{c.duplicate}</DropdownMenuItem>
          <DropdownMenuItem disabled>{c.archiveLocked}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>{c.deleteLocked}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const ControlledOpen: Story = {
  render: function ControlledOpenStory() {
    const [open, setOpen] = useState(false);
    const c = useStoryCopy().dropdownMenu;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          alignItems: 'flex-start',
        }}
      >
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 0,
          }}
        >
          Open: {String(open)}
        </p>
        <Button onClick={() => setOpen(true)}>{c.openProgrammatically}</Button>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{c.trigger}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setOpen(false)}>{c.closeMe}</DropdownMenuItem>
            <DropdownMenuItem>{c.stayOpen}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
    const c = useStoryCopy().dropdownMenu;
    return (
      <div
        data-theme="dark"
        style={{
          padding: '64px 24px 120px',
          backgroundColor: 'var(--zy-background)',
          color: 'var(--zy-foreground)',
          borderRadius: 'var(--zy-radius-md)',
        }}
      >
        <DropdownMenu defaultOpen>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{c.darkMenu}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{c.actions}</DropdownMenuLabel>
            <DropdownMenuItem>{c.newFile}</DropdownMenuItem>
            <DropdownMenuItem>{c.open}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {c.copy}
              <DropdownMenuShortcut>Ctrl+C</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {c.paste}
              <DropdownMenuShortcut>Ctrl+V</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
};
