import { describe, expect, it } from 'vitest';
import type { TranslationKey } from './types';
import { flattenDictionary, createTranslator } from './translator';
import { enDictionary } from './locales/en';
import { zhCNDictionary } from './locales/zh-CN';

describe('dictionary parity', () => {
  it('has identical keys across en and zh-CN', () => {
    const enKeys = Object.keys(flattenDictionary(enDictionary)).sort();
    const zhCNKeys = Object.keys(flattenDictionary(zhCNDictionary)).sort();

    expect(enKeys).toEqual(zhCNKeys);
  });
});

describe('flattenDictionary', () => {
  it('flattens nested dictionaries', () => {
    const messages = flattenDictionary(enDictionary);

    expect(messages['common.ok']).toBe('OK');
    expect(messages['validation.required']).toBe('{label} is required');
  });
});

describe('createTranslator', () => {
  it('translates known keys', () => {
    const t = createTranslator('en', { en: enDictionary, 'zh-CN': zhCNDictionary });

    expect(t('common.ok')).toBe('OK');
  });

  it('uses built-in dictionaries when messages are not provided', () => {
    const t = createTranslator('en');

    expect(t('common.ok')).toBe('OK');
  });

  it('returns the key when translation is missing', () => {
    const t = createTranslator('en');

    expect(t('unknown.key')).toBe('unknown.key');
  });

  it('interpolates variables', () => {
    const t = createTranslator('en', { en: enDictionary, 'zh-CN': zhCNDictionary });

    expect(t('validation.required', { label: 'Email' })).toBe('Email is required');
  });

  it('leaves placeholders intact when variable is missing', () => {
    const t = createTranslator('en', { en: enDictionary, 'zh-CN': zhCNDictionary });

    expect(t('validation.required')).toBe('{label} is required');
  });

  it('supports chinese locale translations', () => {
    const t = createTranslator('zh-CN', { en: enDictionary, 'zh-CN': zhCNDictionary });

    expect(t('common.ok')).toBe('确定');
  });

  it('TranslationKey type includes expected keys', () => {
    const key: TranslationKey = 'common.ok';
    const t = createTranslator('en');
    expect(t(key)).toBe('OK');
  });

  it('accepts partial locale overrides', () => {
    const t = createTranslator('zh-CN', { 'zh-CN': { common: { ok: '好的' } } });

    expect(t('common.ok')).toBe('好的');
    expect(t('common.cancel')).toBe('取消');
  });

  it('falls back to built-in locale when custom override is partial', () => {
    const t = createTranslator('zh-CN', { 'zh-CN': { common: { ok: '好的' } } });

    expect(t('validation.required', { label: 'Email' })).toBe('Email 为必填项');
  });

  it('falls back to English for missing keys in custom override', () => {
    const t = createTranslator('en', { en: { common: { ok: 'Yep' } } });

    expect(t('common.ok')).toBe('Yep');
    expect(t('common.cancel')).toBe('Cancel');
  });
});
