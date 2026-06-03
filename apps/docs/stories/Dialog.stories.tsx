import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  Button,
  Field,
  Input,
  Textarea,
  Select,
} from '@zhuiye/ui';
import { useStoryCopy } from './story-i18n';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    modal: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const c = useStoryCopy().dialog;
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>{c.openDialog}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{c.editProfile}</DialogTitle>
            <DialogDescription>{c.editProfileDesc}</DialogDescription>
          </DialogHeader>
          <p style={{ fontSize: 'var(--zy-font-size-sm)', color: 'var(--zy-muted-foreground)' }}>
            {c.bodyContent}
          </p>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{useStoryCopy().button.cancel}</Button>
            </DialogClose>
            <Button>{c.saveChanges}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const c = useStoryCopy().dialog;
    const btn = useStoryCopy().button;
    return (
      <div style={{ display: 'flex', gap: '12px' }}>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">{btn.small}</Button>
          </DialogTrigger>
          <DialogContent size="sm">
            <DialogHeader>
              <DialogTitle>{c.smallDialog}</DialogTitle>
              <DialogDescription>{c.smallDialogDesc}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">{useStoryCopy().button.close}</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button>{btn.medium}</Button>
          </DialogTrigger>
          <DialogContent size="md">
            <DialogHeader>
              <DialogTitle>{c.mediumDialog}</DialogTitle>
              <DialogDescription>{c.mediumDialogDesc}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">{useStoryCopy().button.close}</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">{btn.large}</Button>
          </DialogTrigger>
          <DialogContent size="lg">
            <DialogHeader>
              <DialogTitle>{c.largeDialog}</DialogTitle>
              <DialogDescription>{c.largeDialogDesc}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">{useStoryCopy().button.close}</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const FormDialog: Story = {
  render: () => {
    const c = useStoryCopy().dialog;
    const fruitOptions = [
      { value: 'apple', label: useStoryCopy().fruits.apple },
      { value: 'banana', label: useStoryCopy().fruits.banana },
      { value: 'cherry', label: useStoryCopy().fruits.cherry },
    ];

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>{c.createProject}</Button>
        </DialogTrigger>
        <DialogContent size="md">
          <DialogHeader>
            <DialogTitle>{c.createNewProject}</DialogTitle>
            <DialogDescription>{c.createProjectDesc}</DialogDescription>
          </DialogHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zy-spacing-4)' }}>
            <Field label={c.projectName}>
              <Input placeholder={c.myAwesomeProject} fullWidth />
            </Field>
            <Field label={c.category}>
              <Select options={fruitOptions} placeholder={c.selectCategory} fullWidth />
            </Field>
            <Field label={c.description}>
              <Textarea placeholder={c.describeProject} fullWidth />
            </Field>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{useStoryCopy().button.cancel}</Button>
            </DialogClose>
            <Button>{c.create}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [open, setOpen] = useState(false);
    const c = useStoryCopy().dialog;
    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}
      >
        <p style={{ fontSize: 'var(--zy-font-size-sm)', color: 'var(--zy-muted-foreground)' }}>
          Open: {String(open)}
        </p>
        <Button onClick={() => setOpen(true)}>{c.openProgrammatically}</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{c.controlledDialog}</DialogTitle>
              <DialogDescription>{c.controlledDesc}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                {useStoryCopy().button.close}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const WithoutCloseButton: Story = {
  render: () => {
    const c = useStoryCopy().dialog;
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>{c.open}</Button>
        </DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>{c.importantNotice}</DialogTitle>
            <DialogDescription>{c.noCloseDesc}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{c.decline}</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>{c.accept}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const NonModal: Story = {
  render: () => {
    const c = useStoryCopy().dialog;
    return (
      <Dialog modal={false}>
        <DialogTrigger asChild>
          <Button variant="outline">{c.nonModalDialog}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{c.nonModalDialog}</DialogTitle>
            <DialogDescription>{c.nonModalDesc}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{useStoryCopy().button.close}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export const DarkTheme: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
  globals: { theme: 'dark' },
  render: () => {
    const c = useStoryCopy().dialog;
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
        <Dialog>
          <DialogTrigger asChild>
            <Button>{c.openDarkDialog}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{c.darkThemeDialog}</DialogTitle>
              <DialogDescription>{c.darkThemeDialogDesc}</DialogDescription>
            </DialogHeader>
            <p style={{ fontSize: 'var(--zy-font-size-sm)', color: 'var(--zy-muted-foreground)' }}>
              {c.darkThemeBody}
            </p>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">{useStoryCopy().button.cancel}</Button>
              </DialogClose>
              <Button>{c.confirm}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};
