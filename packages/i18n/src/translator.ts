import type { Locale } from './locale';
import { DEFAULT_LOCALE } from './locale';
import { dictionaries } from './locales';
import type {
  LocaleMessages,
  LocaleDictionary,
  LocaleMessagesInput,
  TranslationKey,
} from './types';

export type { LocaleMessages, LocaleDictionary, LocaleMessagesInput, TranslationKey };

export function flattenDictionary(dictionary: LocaleDictionary, prefix = ''): LocaleMessages {
  const result: LocaleMessages = {};

  for (const [key, value] of Object.entries(dictionary)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      result[fullKey] = value;
    } else {
      Object.assign(result, flattenDictionary(value, fullKey));
    }
  }

  return result;
}

export function createTranslator(locale: Locale, messages?: LocaleMessagesInput) {
  const fallback = flattenDictionary(dictionaries[DEFAULT_LOCALE]);
  const builtinLocale = locale !== DEFAULT_LOCALE ? flattenDictionary(dictionaries[locale]) : {};
  const customLocale = messages?.[locale] ? flattenDictionary(messages[locale]!) : {};

  const flatMessages: LocaleMessages = {
    ...fallback,
    ...builtinLocale,
    ...customLocale,
  };

  return function t(key: TranslationKey | string, vars?: Record<string, string | number>): string {
    const template = flatMessages[key];

    if (template === undefined) {
      return key;
    }

    if (!vars) {
      return template;
    }

    return template.replace(/\{(.*?)\}/g, (match, name: string) => {
      const value = vars[name];
      return value === undefined ? match : String(value);
    });
  };
}
