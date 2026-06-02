import type { LocaleDictionary } from '../types';

export const enDictionary = {
  common: {
    ok: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    search: 'Search',
    loading: 'Loading...',
    required: 'Required',
    error: 'Something went wrong',
  },
  components: {
    dialog: {
      close: 'Close dialog',
    },
    select: {
      placeholder: 'Select an option',
    },
  },
  validation: {
    required: '{label} is required',
    minLength: '{label} must be at least {min} characters',
    maxLength: '{label} must be at most {max} characters',
  },
} satisfies LocaleDictionary;
