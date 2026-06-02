import type { LocaleDictionary } from '../types';

export const zhCNDictionary = {
  common: {
    ok: '确定',
    cancel: '取消',
    close: '关闭',
    search: '搜索',
    loading: '加载中...',
    required: '必填',
    error: '出了点问题',
  },
  components: {
    dialog: {
      close: '关闭对话框',
    },
    select: {
      placeholder: '请选择',
    },
  },
  validation: {
    required: '{label} 为必填项',
    minLength: '{label} 至少需要 {min} 个字符',
    maxLength: '{label} 最多 {max} 个字符',
  },
} satisfies LocaleDictionary;
