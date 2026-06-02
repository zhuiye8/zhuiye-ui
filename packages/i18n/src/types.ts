import type { Locale } from './locale';
import type { enDictionary } from './locales/en';

export type LocaleMessages = Record<string, string>;

export type LocaleDictionary = {
  readonly [K in string]: string | LocaleDictionary;
};

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Leaves<T> = T extends string
  ? ''
  : {
      [K in keyof T & string]: T[K] extends string ? K : Join<K, Leaves<T[K]>>;
    }[keyof T & string];

export type TranslationKey = Leaves<typeof enDictionary>;

export type LocaleMessagesInput = Partial<Record<Locale, LocaleDictionary>>;
