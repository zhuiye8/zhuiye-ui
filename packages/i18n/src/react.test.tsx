import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LocaleProvider, useLocale, useT } from './react';

function LocaleValue() {
  const locale = useLocale();
  return <span data-testid="locale">{locale}</span>;
}

function TranslationButton() {
  const t = useT();
  return <button type="button">{t('common.ok')}</button>;
}

function InterpolationLabel() {
  const t = useT();
  return <span>{t('validation.required', { label: 'Email' })}</span>;
}

describe('LocaleProvider', () => {
  it('provides default locale', () => {
    render(
      <LocaleProvider>
        <LocaleValue />
      </LocaleProvider>,
    );

    expect(screen.getByTestId('locale')).toHaveTextContent('en');
  });

  it('provides requested locale', () => {
    render(
      <LocaleProvider locale="zh-CN">
        <LocaleValue />
        <TranslationButton />
      </LocaleProvider>,
    );

    expect(screen.getByTestId('locale')).toHaveTextContent('zh-CN');
    expect(screen.getByRole('button')).toHaveTextContent('确定');
  });

  it('provides translation function', () => {
    render(
      <LocaleProvider>
        <TranslationButton />
      </LocaleProvider>,
    );

    expect(screen.getByRole('button')).toHaveTextContent('OK');
  });

  it('supports interpolation in translations', () => {
    render(
      <LocaleProvider>
        <InterpolationLabel />
      </LocaleProvider>,
    );

    expect(screen.getByText('Email is required')).toBeTruthy();
  });

  it('normalizes unknown locale values', () => {
    render(
      <LocaleProvider locale="fr-FR">
        <LocaleValue />
      </LocaleProvider>,
    );

    expect(screen.getByTestId('locale')).toHaveTextContent('en');
  });

  it('throws when hooks are used outside provider', () => {
    expect(() => render(<LocaleValue />)).toThrow(
      'Locale hooks must be used inside a LocaleProvider.',
    );
  });
});
