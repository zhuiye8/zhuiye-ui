import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, it, expect, vi } from 'vitest';
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from './Avatar';

class LoadedImage {
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  private listeners = new Map<string, Set<EventListenerOrEventListenerObject>>();

  set src(_value: string) {
    queueMicrotask(() => {
      this.onload?.();
      this.dispatch('load');
    });
  }

  addEventListener(type: string, listener: EventListenerOrEventListenerObject | null) {
    if (listener == null) {
      return;
    }

    const listeners = this.listeners.get(type) ?? new Set<EventListenerOrEventListenerObject>();
    listeners.add(listener);
    this.listeners.set(type, listeners);
  }

  removeEventListener(type: string, listener: EventListenerOrEventListenerObject | null) {
    if (listener == null) {
      return;
    }

    this.listeners.get(type)?.delete(listener);
  }

  private dispatch(type: string) {
    const event = new Event(type);

    this.listeners.get(type)?.forEach((listener) => {
      if (typeof listener === 'function') {
        listener.call(this as unknown as EventTarget, event);
      } else {
        listener.handleEvent(event);
      }
    });
  }
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('Avatar', () => {
  it('renders an avatar element', () => {
    render(<Avatar data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('applies size class', () => {
    render(<Avatar size="lg" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('zy-avatar--lg');
  });

  it('applies shape class', () => {
    render(<Avatar shape="square" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('zy-avatar--square');
  });

  it('defaults to md size and circle shape', () => {
    render(<Avatar data-testid="avatar" />);
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveClass('zy-avatar--md');
    expect(avatar).toHaveClass('zy-avatar--circle');
  });

  it('applies custom className', () => {
    render(<Avatar className="custom" data-testid="avatar" />);
    expect(screen.getByTestId('avatar')).toHaveClass('zy-avatar');
    expect(screen.getByTestId('avatar')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Avatar ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
  });

  it('renders all size classes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
    sizes.forEach((size) => {
      const { unmount } = render(<Avatar size={size} data-testid={`avatar-${size}`} />);
      expect(screen.getByTestId(`avatar-${size}`)).toHaveClass(`zy-avatar--${size}`);
      unmount();
    });
  });

  it('renders all shape classes', () => {
    const shapes = ['circle', 'square'] as const;
    shapes.forEach((shape) => {
      const { unmount } = render(<Avatar shape={shape} data-testid={`avatar-${shape}`} />);
      expect(screen.getByTestId(`avatar-${shape}`)).toHaveClass(`zy-avatar--${shape}`);
      unmount();
    });
  });
});

describe('AvatarImage', () => {
  it('renders an image with correct class after load', async () => {
    vi.stubGlobal('Image', LoadedImage);
    render(
      <Avatar data-testid="avatar">
        <AvatarImage src="test.jpg" alt="User" data-testid="img" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('img')).toHaveClass('zy-avatar__image');
    });
  });

  it('passes through src and alt after load', async () => {
    vi.stubGlobal('Image', LoadedImage);
    render(
      <Avatar>
        <AvatarImage src="test.jpg" alt="User avatar" data-testid="img" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    await waitFor(() => {
      const img = screen.getByTestId('img');
      expect(img).toHaveAttribute('src', 'test.jpg');
      expect(img).toHaveAttribute('alt', 'User avatar');
    });
  });

  it('reports loading status changes', async () => {
    vi.stubGlobal('Image', LoadedImage);
    const onLoadingStatusChange = vi.fn();
    render(
      <Avatar>
        <AvatarImage
          src="test.jpg"
          alt="User"
          data-testid="img"
          onLoadingStatusChange={onLoadingStatusChange}
        />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );

    await waitFor(() => {
      expect(onLoadingStatusChange).toHaveBeenCalledWith('loaded');
    });
  });
});

describe('AvatarFallback', () => {
  it('renders fallback text when image fails', async () => {
    render(
      <Avatar data-testid="avatar">
        <AvatarImage src="invalid.jpg" alt="User" />
        <AvatarFallback data-testid="fallback">AB</AvatarFallback>
      </Avatar>,
    );
    await waitFor(() => {
      expect(screen.getByTestId('fallback')).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    render(
      <Avatar>
        <AvatarFallback className="custom" data-testid="fallback">
          AB
        </AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByTestId('fallback')).toHaveClass('zy-avatar__fallback');
    expect(screen.getByTestId('fallback')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(
      <Avatar>
        <AvatarFallback ref={ref}>AB</AvatarFallback>
      </Avatar>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLSpanElement));
  });
});

describe('AvatarGroup', () => {
  it('renders a group of avatars', () => {
    render(
      <AvatarGroup data-testid="group">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(screen.getByTestId('group')).toBeInTheDocument();
    expect(screen.getByTestId('group')).toHaveAttribute('role', 'list');
  });

  it('applies custom className', () => {
    render(
      <AvatarGroup className="custom" data-testid="group">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(screen.getByTestId('group')).toHaveClass('zy-avatar-group');
    expect(screen.getByTestId('group')).toHaveClass('custom');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(
      <AvatarGroup ref={ref}>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('limits visible avatars when max is set', () => {
    render(
      <AvatarGroup max={2} data-testid="group">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('+1')).toBeInTheDocument();
    expect(screen.queryByText('C')).not.toBeInTheDocument();
  });

  it('applies group size to child avatars without an explicit size', () => {
    render(
      <AvatarGroup size="lg">
        <Avatar data-testid="avatar">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );

    expect(screen.getByTestId('avatar')).toHaveClass('zy-avatar--lg');
  });

  it('shows correct overflow count with total', () => {
    render(
      <AvatarGroup max={2} total={5} data-testid="group">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(screen.getByText('+3')).toBeInTheDocument();
    expect(screen.getByLabelText('3 more')).toBeInTheDocument();
  });

  it('renders all items when max is not set', () => {
    render(
      <AvatarGroup data-testid="group">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
  });
});
