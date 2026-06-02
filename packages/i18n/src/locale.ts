export const SUPPORTED_LOCALES = ['en', 'zh-CN'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function normalizeLocale(value?: string | null): Locale {
  if (!value) {
    return DEFAULT_LOCALE;
  }

  const normalized = value.trim();

  if (isLocale(normalized)) {
    return normalized;
  }

  const lower = normalized.toLowerCase();

  if (lower === 'en' || lower.startsWith('en-')) {
    return 'en';
  }

  if (
    lower === 'zh' ||
    lower === 'zh-cn' ||
    lower === 'zh_cn' ||
    lower === 'zh-hans' ||
    lower === 'zh-hans-cn'
  ) {
    return 'zh-CN';
  }

  return DEFAULT_LOCALE;
}
