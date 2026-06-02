import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

function renderTabs(opts?: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (v: string) => void;
  orientation?: 'horizontal' | 'vertical';
  activationMode?: 'automatic' | 'manual';
  disabledTab?: string;
}) {
  return render(
    <Tabs
      defaultValue={opts?.defaultValue ?? 'tab1'}
      value={opts?.value}
      onValueChange={opts?.onValueChange}
      orientation={opts?.orientation}
      activationMode={opts?.activationMode}
    >
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2" disabled={opts?.disabledTab === 'tab2'}>
          Settings
        </TabsTrigger>
        <TabsTrigger value="tab3">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Account Content</TabsContent>
      <TabsContent value="tab2">Settings Content</TabsContent>
      <TabsContent value="tab3">Billing Content</TabsContent>
    </Tabs>,
  );
}

describe('Tabs', () => {
  it('renders default tab content', () => {
    renderTabs();
    expect(screen.getByText('Account Content')).toBeInTheDocument();
    expect(screen.queryByText('Settings Content')).not.toBeInTheDocument();
  });

  it('clicking trigger changes content', async () => {
    const user = userEvent.setup();
    renderTabs();
    await user.click(screen.getByRole('tab', { name: 'Billing' }));
    expect(screen.getByText('Billing Content')).toBeInTheDocument();
    expect(screen.queryByText('Account Content')).not.toBeInTheDocument();
  });

  it('controlled value calls onValueChange', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderTabs({ value: 'tab1', onValueChange });
    await user.click(screen.getByRole('tab', { name: 'Billing' }));
    expect(onValueChange).toHaveBeenCalledWith('tab3');
  });

  it('disabled trigger cannot activate', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderTabs({ disabledTab: 'tab2', onValueChange });
    const settingsTab = screen.getByRole('tab', { name: 'Settings' });
    expect(settingsTab).toBeDisabled();
    await user.click(settingsTab);
    expect(onValueChange).not.toHaveBeenCalled();
    expect(screen.getByText('Account Content')).toBeInTheDocument();
  });

  it('keyboard navigation works for horizontal', async () => {
    renderTabs();
    const accountTab = screen.getByRole('tab', { name: 'Account' });
    fireEvent.focus(accountTab);
    fireEvent.keyDown(accountTab, { key: 'ArrowRight', code: 'ArrowRight' });
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Settings' })).toHaveFocus();
    });
    expect(screen.getByText('Settings Content')).toBeInTheDocument();
  });

  it('vertical orientation has correct aria/data behavior', () => {
    renderTabs({ orientation: 'vertical' });
    const list = screen.getByRole('tablist');
    expect(list).toHaveAttribute('aria-orientation', 'vertical');
    expect(list).toHaveAttribute('data-orientation', 'vertical');
  });

  it('manual activation does not auto-select on arrow focus, then Enter activates', async () => {
    renderTabs({ activationMode: 'manual' });
    const accountTab = screen.getByRole('tab', { name: 'Account' });
    fireEvent.focus(accountTab);
    fireEvent.keyDown(accountTab, { key: 'ArrowRight', code: 'ArrowRight' });
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Settings' })).toHaveFocus();
    });
    expect(screen.getByText('Account Content')).toBeInTheDocument();
    fireEvent.keyDown(screen.getByRole('tab', { name: 'Settings' }), {
      key: 'Enter',
      code: 'Enter',
    });
    expect(screen.getByText('Settings Content')).toBeInTheDocument();
  });

  it('forwards ref to list', () => {
    const ref = vi.fn();
    render(
      <Tabs defaultValue="t1">
        <TabsList ref={ref}>
          <TabsTrigger value="t1">Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="t1">Content</TabsContent>
      </Tabs>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('forwards ref to trigger', () => {
    const ref = vi.fn();
    render(
      <Tabs defaultValue="t1">
        <TabsList>
          <TabsTrigger value="t1" ref={ref}>
            Tab
          </TabsTrigger>
        </TabsList>
        <TabsContent value="t1">Content</TabsContent>
      </Tabs>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('forwards ref to content', () => {
    const ref = vi.fn();
    render(
      <Tabs defaultValue="t1">
        <TabsList>
          <TabsTrigger value="t1">Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="t1" ref={ref}>
          Content
        </TabsContent>
      </Tabs>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('className/style pass-through', () => {
    render(
      <Tabs defaultValue="t1" className="custom-tabs">
        <TabsList className="custom-list" data-testid="list">
          <TabsTrigger value="t1" className="custom-trigger" data-testid="trigger">
            Tab
          </TabsTrigger>
        </TabsList>
        <TabsContent value="t1" className="custom-content" data-testid="content">
          Content
        </TabsContent>
      </Tabs>,
    );
    expect(screen.getByTestId('list')).toHaveClass('zy-tabs__list');
    expect(screen.getByTestId('list')).toHaveClass('custom-list');
    expect(screen.getByTestId('trigger')).toHaveClass('zy-tabs__trigger');
    expect(screen.getByTestId('trigger')).toHaveClass('custom-trigger');
    expect(screen.getByTestId('content')).toHaveClass('zy-tabs__content');
    expect(screen.getByTestId('content')).toHaveClass('custom-content');
  });
});
