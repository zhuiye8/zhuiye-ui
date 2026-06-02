export const colors = {
  // Neutrals
  white: '#ffffff',
  black: '#09090b',

  gray: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },

  // Brand
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },

  // Semantic
  success: {
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    900: '#14532d',
    950: '#052e16',
  },

  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    900: '#78350f',
    950: '#422006',
  },

  danger: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    900: '#7f1d1d',
    950: '#450a0a',
  },
} as const;

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

export const radii = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '9999px',
} as const;

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
} as const;

export const fontWeights = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const zIndices = {
  dropdown: 1000,
  sticky: 1100,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1700,
} as const;

export const lightTheme = {
  background: '#ffffff',
  foreground: '#09090b',
  surface: '#fafafa',
  surfaceElevated: '#ffffff',
  muted: '#f4f4f5',
  mutedForeground: '#71717a',
  border: '#e4e4e7',
  focusRing: '#3b82f6',
  primary: '#2563eb',
  primaryForeground: '#ffffff',
  success: '#16a34a',
  successForeground: '#ffffff',
  warning: '#d97706',
  warningForeground: '#09090b',
  danger: '#dc2626',
  dangerForeground: '#ffffff',
} as const;

export const darkTheme = {
  background: '#09090b',
  foreground: '#fafafa',
  surface: '#18181b',
  surfaceElevated: '#27272a',
  muted: '#27272a',
  mutedForeground: '#a1a1aa',
  border: '#3f3f46',
  focusRing: '#3b82f6',
  primary: '#3b82f6',
  primaryForeground: '#ffffff',
  success: '#22c55e',
  successForeground: '#09090b',
  warning: '#f59e0b',
  warningForeground: '#09090b',
  danger: '#ef4444',
  dangerForeground: '#ffffff',
} as const;

export type ThemeTokens = typeof lightTheme;

export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Radii = typeof radii;
export type FontSizes = typeof fontSizes;
