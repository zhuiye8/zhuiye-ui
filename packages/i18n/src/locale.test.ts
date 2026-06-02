import { describe, expect, it } from 'vitest';
import { isLocale, normalizeLocale, SUPPORTED_LOCALES } from './locale';

describe('locale utilities', () => {
  it('reports supported locales', () => {
    expect(SUPPORTED_LOCALES).toEqual(['en', 'zh-CN']);
  });

  it('detects valid locales', () => {
    expect(isLocale('en')).toBe(true);
    expect(isLocale('zh-CN')).toBe(true);
    expect(isLocale('fr')).toBe(false);
    expect(isLocale(null)).toBe(false);
  });

  it('normalizes exact locale values', () => {
    expect(normalizeLocale('en')).toBe('en');
    expect(normalizeLocale('zh-CN')).toBe('zh-CN');
  });

  it('falls back to en for unknown locales', () => {
    expect(normalizeLocale('fr-FR')).toBe('en');
    expect(normalizeLocale(undefined)).toBe('en');
    expect(normalizeLocale(null)).toBe('en');
  });

  it('normalizes chinese variants to zh-CN', () => {
    expect(normalizeLocale('zh')).toBe('zh-CN');
    expect(normalizeLocale('zh_cn')).toBe('zh-CN');
    expect(normalizeLocale('zh-Hans')).toBe('zh-CN');
    expect(normalizeLocale('zh-Hans-CN')).toBe('zh-CN');
  });

  it('ignores surrounding whitespace', () => {
    expect(normalizeLocale(' zh-CN ')).toBe('zh-CN');
  });
});
