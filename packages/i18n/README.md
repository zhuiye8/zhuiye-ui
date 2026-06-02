# @zhuiye/i18n

Lightweight, type-safe localization package for zhuiye-ui.

## Supported locales

| Locale  | Language           |
| ------- | ------------------ |
| `en`    | English (default)  |
| `zh-CN` | Simplified Chinese |

## Usage

### `createTranslator`

```ts
import { createTranslator } from '@zhuiye/i18n';

const t = createTranslator('en');
t('common.ok'); // "OK"
t('validation.required', { label: 'Email' }); // "Email is required"
```

When called without a `messages` argument, `createTranslator` uses the built-in English and Chinese dictionaries and falls back to English for missing keys.

Pass custom messages to override specific locales:

```ts
const t = createTranslator('zh-CN', {
  en: enDictionary,
  'zh-CN': { ...zhCNDictionary, common: { ...zhCNDictionary.common, ok: '好的' } },
});
```

### React: `LocaleProvider` / `useT`

```tsx
import { LocaleProvider, useT } from '@zhuiye/i18n';

function App() {
  return (
    <LocaleProvider locale="zh-CN">
      <Greeting />
    </LocaleProvider>
  );
}

function Greeting() {
  const t = useT();
  return <button>{t('common.ok')}</button>; // "确定"
}
```

`LocaleProvider` accepts an optional `locale` (defaults to `en`) and optional `messages` (`Partial<Record<Locale, LocaleDictionary>>`).

Other hooks: `useLocale()` returns the active locale string, `useTranslations()` is an alias for `useT()`.

## Fallback behaviour

If a key is missing from the active locale dictionary, the English value is used. If the key is missing from both, the raw key string is returned.

## Maintenance rules

Every locale dictionary (`en.ts`, `zh-CN.ts`, and any future additions) **must have identical keys**. The `dictionary parity` test enforces this automatically -- if you add a key to `en` but forget it in `zh-CN`, CI will fail.

When adding a new locale:

1. Create `src/locales/<locale>.ts` exporting a dictionary that `satisfies LocaleDictionary`.
2. Add the locale to `SUPPORTED_LOCALES` in `src/locale.ts`.
3. Register the dictionary in `src/locales/index.ts`.
4. Run `pnpm --filter @zhuiye/i18n run test` to verify key parity.

## Storybook

The docs Storybook includes a **Locale** toolbar (globe icon) that switches all stories between `en` and `zh-CN` at runtime. A `Foundations/Localization` story demonstrates key lookups, interpolation, and nested `LocaleProvider` overrides.
