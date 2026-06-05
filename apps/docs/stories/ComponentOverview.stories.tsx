import type { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { Input, Badge, Separator } from '@zhuiye/ui';
import { useLocale, useStoryCopy } from './story-i18n';
import {
  componentCatalog,
  categoryOrder,
  type ComponentCategory,
  type ComponentEntry,
} from './component-overview-data';

const categoryKeys: Record<ComponentCategory, string> = {
  actions: 'actions',
  inputs: 'inputs',
  navigation: 'navigation',
  overlays: 'overlays',
  feedback: 'feedback',
  layout: 'layout',
  primitives: 'primitives',
};

function matchesQuery(
  entry: ComponentEntry,
  query: string,
  locale: string,
  categoryLabel: string,
): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  const isZh = locale.startsWith('zh');
  const kw = isZh ? entry.keywords.zhCN : entry.keywords.en;
  const desc = isZh ? entry.description.zhCN : entry.description.en;
  return (
    entry.name.toLowerCase().includes(q) ||
    categoryLabel.toLowerCase().includes(q) ||
    kw.some((w) => w.toLowerCase().includes(q)) ||
    desc.toLowerCase().includes(q)
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copiedLabel = useStoryCopy().overview.copied;

  const handleCopy = useCallback(() => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), 1500);
      });
    }
  }, [text]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 8px',
        fontSize: 'var(--zy-font-size-xs)',
        fontWeight: 'var(--zy-font-weight-medium)',
        color: copied ? 'var(--zy-success)' : 'var(--zy-muted-foreground)',
        backgroundColor: 'transparent',
        border: '1px solid var(--zy-border)',
        borderRadius: 'var(--zy-radius-sm)',
        cursor: 'pointer',
        transition: 'var(--zy-transition-fast)',
        whiteSpace: 'nowrap',
      }}
    >
      {copied ? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      {copied ? copiedLabel : label}
    </button>
  );
}

function StatusBadge({ status }: { status: 'stable' | 'beta' }) {
  const t = useStoryCopy().overview;
  const label = status === 'stable' ? t.stable : t.beta;
  const variant = status === 'stable' ? 'success' : 'warning';
  return (
    <Badge variant={variant} size="sm">
      {label}
    </Badge>
  );
}

function ComponentCard({ entry, description }: { entry: ComponentEntry; description: string }) {
  const t = useStoryCopy().overview;
  const categoryLabel = t[categoryKeys[entry.category] as keyof typeof t] as string;

  return (
    <article
      data-component-id={entry.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--zy-spacing-3)',
        padding: 'var(--zy-spacing-4)',
        backgroundColor: 'var(--zy-surface-elevated)',
        border: '1px solid var(--zy-border)',
        borderRadius: 'var(--zy-radius-lg)',
        transition: 'var(--zy-transition-fast)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--zy-spacing-2)',
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--zy-spacing-2)', minWidth: 0 }}
        >
          <span
            style={{
              fontSize: 'var(--zy-font-size-sm)',
              fontWeight: 'var(--zy-font-weight-semibold)',
              color: 'var(--zy-foreground)',
              whiteSpace: 'nowrap',
            }}
          >
            {entry.name}
          </span>
          <StatusBadge status={entry.status} />
        </div>
        <span
          style={{
            fontSize: 'var(--zy-font-size-xs)',
            color: 'var(--zy-muted-foreground)',
            whiteSpace: 'nowrap',
            textTransform: 'capitalize',
          }}
        >
          {categoryLabel}
        </span>
      </div>

      <p
        style={{
          margin: 0,
          fontSize: 'var(--zy-font-size-xs)',
          color: 'var(--zy-muted-foreground)',
          lineHeight: 'var(--zy-line-height-normal)',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {description}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--zy-spacing-2)',
          padding: 'var(--zy-spacing-2) var(--zy-spacing-3)',
          backgroundColor: 'var(--zy-muted)',
          borderRadius: 'var(--zy-radius-sm)',
          overflow: 'hidden',
        }}
      >
        <code
          style={{
            flex: 1,
            fontSize: 'var(--zy-font-size-xs)',
            fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace",
            color: 'var(--zy-foreground)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {entry.importSnippet}
        </code>
        <CopyButton text={entry.importSnippet} label={t.copyImport} />
      </div>

      <div style={{ display: 'flex', gap: 'var(--zy-spacing-2)' }}>
        <a
          href={entry.storyPath}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 10px',
            fontSize: 'var(--zy-font-size-xs)',
            fontWeight: 'var(--zy-font-weight-medium)',
            color: 'var(--zy-primary-foreground)',
            backgroundColor: 'var(--zy-primary)',
            borderRadius: 'var(--zy-radius-sm)',
            textDecoration: 'none',
            transition: 'var(--zy-transition-fast)',
          }}
        >
          {t.viewStory}
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </article>
  );
}

function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: ComponentCategory | 'all';
  onCategoryChange: (cat: ComponentCategory | 'all') => void;
}) {
  const t = useStoryCopy().overview;

  const categories: Array<{ key: ComponentCategory | 'all'; label: string }> = [
    { key: 'all', label: t.allCategories },
    ...categoryOrder.map((cat) => ({
      key: cat,
      label: t[categoryKeys[cat] as keyof typeof t] as string,
    })),
  ];

  return (
    <div
      aria-label={t.filterByCategory}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--zy-spacing-1)',
      }}
    >
      {categories.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          aria-pressed={activeCategory === key}
          onClick={() => onCategoryChange(key)}
          style={{
            padding: '4px 12px',
            fontSize: 'var(--zy-font-size-xs)',
            fontWeight:
              activeCategory === key
                ? 'var(--zy-font-weight-semibold)'
                : 'var(--zy-font-weight-medium)',
            color:
              activeCategory === key
                ? 'var(--zy-primary-foreground)'
                : 'var(--zy-muted-foreground)',
            backgroundColor: activeCategory === key ? 'var(--zy-primary)' : 'transparent',
            border: `1px solid ${activeCategory === key ? 'var(--zy-primary)' : 'var(--zy-border)'}`,
            borderRadius: 'var(--zy-radius-full)',
            cursor: 'pointer',
            transition: 'var(--zy-transition-fast)',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ComponentOverviewInner() {
  const locale = useLocale();
  const t = useStoryCopy().overview;
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ComponentCategory | 'all'>('all');

  const isZh = locale.startsWith('zh');

  const filtered = useMemo(() => {
    return componentCatalog.filter((entry) => {
      const matchesCat = activeCategory === 'all' || entry.category === activeCategory;
      const catLabel = t[categoryKeys[entry.category] as keyof typeof t] as string;
      return matchesCat && matchesQuery(entry, query, locale, catLabel);
    });
  }, [query, activeCategory, locale, t]);

  const countLabel = t.componentCount.replace('{count}', String(filtered.length));

  return (
    <div
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: 'var(--zy-spacing-6)',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <header style={{ marginBottom: 'var(--zy-spacing-6)' }}>
        <h1
          style={{
            fontSize: 'var(--zy-font-size-2xl)',
            fontWeight: 'var(--zy-font-weight-bold)',
            color: 'var(--zy-foreground)',
            margin: 0,
            lineHeight: 'var(--zy-line-height-tight)',
          }}
        >
          {t.title}
        </h1>
        <p
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            margin: 'var(--zy-spacing-1) 0 0',
          }}
        >
          {countLabel}
        </p>
      </header>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--zy-spacing-3)',
          marginBottom: 'var(--zy-spacing-4)',
        }}
      >
        <Input
          type="search"
          placeholder={t.searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={t.searchPlaceholder}
          style={{ maxWidth: '360px' }}
        />
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>

      <Separator style={{ marginBottom: 'var(--zy-spacing-4)' }} />

      {filtered.length === 0 ? (
        <p
          role="status"
          style={{
            fontSize: 'var(--zy-font-size-sm)',
            color: 'var(--zy-muted-foreground)',
            padding: 'var(--zy-spacing-8) 0',
            textAlign: 'center',
          }}
        >
          {t.noResults}
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--zy-spacing-3)',
          }}
        >
          {filtered.map((entry) => (
            <ComponentCard
              key={entry.id}
              entry={entry}
              description={isZh ? entry.description.zhCN : entry.description.en}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const meta: Meta = {
  title: 'Overview/Components',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <ComponentOverviewInner />,
};
