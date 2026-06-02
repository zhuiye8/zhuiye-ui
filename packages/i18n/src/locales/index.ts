import type { Locale } from '../locale';
import type { LocaleDictionary } from '../types';
import { enDictionary } from './en';
import { zhCNDictionary } from './zh-CN';

export const dictionaries: Record<Locale, LocaleDictionary> = {
  en: enDictionary,
  'zh-CN': zhCNDictionary,
};

export { enDictionary } from './en';
export { zhCNDictionary } from './zh-CN';
