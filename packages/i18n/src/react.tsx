import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { type Locale, normalizeLocale } from './locale';
import { dictionaries } from './locales';
import { createTranslator } from './translator';
import type { LocaleMessagesInput, TranslationKey } from './types';

export type { Locale } from './locale';
export type { TranslationKey, LocaleMessagesInput } from './types';
export { DEFAULT_LOCALE, SUPPORTED_LOCALES, isLocale, normalizeLocale } from './locale';
export { flattenDictionary, createTranslator } from './translator';
export { dictionaries } from './locales';

type TranslateFunction = {
  (key: TranslationKey, vars?: Record<string, string | number>): string;
  (key: string, vars?: Record<string, string | number>): string;
};

type LocaleContextValue = {
  locale: Locale;
  t: TranslateFunction;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function useLocaleContext(): LocaleContextValue {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('Locale hooks must be used inside a LocaleProvider.');
  }

  return context;
}

export type LocaleProviderProps = {
  locale?: Locale | string;
  messages?: LocaleMessagesInput;
  children: ReactNode;
};

export function LocaleProvider({ locale, messages, children }: LocaleProviderProps) {
  const resolvedLocale = normalizeLocale(locale);

  const value = useMemo<LocaleContextValue>(() => {
    const mergedMessages = messages
      ? {
          ...dictionaries,
          [resolvedLocale]: messages[resolvedLocale] ?? dictionaries[resolvedLocale],
        }
      : dictionaries;

    const t = createTranslator(resolvedLocale, mergedMessages);

    return {
      locale: resolvedLocale,
      t: t as TranslateFunction,
    };
  }, [resolvedLocale, messages]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useLocaleContext().locale;
}

export function useTranslations(): TranslateFunction {
  return useLocaleContext().t;
}

export const useT = useTranslations;
