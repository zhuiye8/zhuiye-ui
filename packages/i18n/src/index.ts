export type { Locale } from './locale';
export type { TranslationKey, LocaleMessagesInput } from './types';

export { SUPPORTED_LOCALES, DEFAULT_LOCALE, isLocale, normalizeLocale } from './locale';
export { flattenDictionary, createTranslator } from './translator';
export { dictionaries, enDictionary, zhCNDictionary } from './locales';

export type { LocaleProviderProps } from './react';
export { LocaleProvider, useLocale, useTranslations, useT } from './react';
