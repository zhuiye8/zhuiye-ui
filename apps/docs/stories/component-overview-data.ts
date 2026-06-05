export type ComponentCategory =
  | 'actions'
  | 'inputs'
  | 'navigation'
  | 'overlays'
  | 'feedback'
  | 'layout'
  | 'primitives';

export type ComponentStatus = 'stable' | 'beta';

export interface ComponentEntry {
  readonly id: string;
  readonly name: string;
  readonly category: ComponentCategory;
  readonly status: ComponentStatus;
  readonly importSnippet: string;
  readonly storyPath: string;
  readonly description: { readonly en: string; readonly zhCN: string };
  readonly keywords: { readonly en: readonly string[]; readonly zhCN: readonly string[] };
}

export const componentCatalog: readonly ComponentEntry[] = [
  {
    id: 'button',
    name: 'Button',
    category: 'actions',
    status: 'stable',
    importSnippet: 'import { Button } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-button--docs',
    description: {
      en: 'Clickable button with multiple variants and sizes.',
      zhCN: '可点击按钮，支持多种样式和尺寸。',
    },
    keywords: {
      en: ['button', 'btn', 'click', 'action', 'submit'],
      zhCN: ['按钮', '点击', '操作', '提交'],
    },
  },
  {
    id: 'toggle',
    name: 'Toggle',
    category: 'actions',
    status: 'stable',
    importSnippet: 'import { Toggle } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-toggle--docs',
    description: {
      en: 'Two-state button that can be toggled on or off.',
      zhCN: '两态按钮，可切换开/关状态。',
    },
    keywords: {
      en: ['toggle', 'press', 'on/off', 'bold'],
      zhCN: ['切换', '开关', '按下'],
    },
  },
  {
    id: 'toggle-group',
    name: 'ToggleGroup',
    category: 'actions',
    status: 'stable',
    importSnippet: 'import { ToggleGroup, ToggleGroupItem } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-togglegroup--docs',
    description: {
      en: 'Group of toggle buttons with single or multi selection.',
      zhCN: '切换按钮组，支持单选或多选。',
    },
    keywords: {
      en: ['toggle', 'group', 'multi-select', 'toolbar'],
      zhCN: ['切换组', '多选', '工具栏'],
    },
  },
  {
    id: 'input',
    name: 'Input',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { Input } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-input--docs',
    description: {
      en: 'Text input field for collecting user input.',
      zhCN: '文本输入框，用于收集用户输入。',
    },
    keywords: {
      en: ['input', 'text', 'field', 'form'],
      zhCN: ['输入', '输入框', '文本', '表单'],
    },
  },
  {
    id: 'textarea',
    name: 'Textarea',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { Textarea } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-textarea--docs',
    description: {
      en: 'Multi-line text input for longer content.',
      zhCN: '多行文本输入，适合较长内容。',
    },
    keywords: {
      en: ['textarea', 'multiline', 'text', 'form'],
      zhCN: ['文本域', '多行输入', '文本', '表单'],
    },
  },
  {
    id: 'select',
    name: 'Select',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { Select } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-select--docs',
    description: {
      en: 'Dropdown select for choosing from a list of options.',
      zhCN: '下拉选择框，从选项列表中选择。',
    },
    keywords: {
      en: ['select', 'dropdown', 'combobox', 'form'],
      zhCN: ['选择', '下拉', '下拉框', '表单'],
    },
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { Checkbox } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-checkbox--docs',
    description: {
      en: 'Control for toggling a boolean option on or off.',
      zhCN: '复选框，用于切换布尔选项。',
    },
    keywords: {
      en: ['checkbox', 'check', 'boolean', 'form'],
      zhCN: ['复选框', '勾选', '多选', '表单'],
    },
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { Switch } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-switch--docs',
    description: {
      en: 'Toggle switch for binary on/off settings.',
      zhCN: '开关，用于二元开/关设置。',
    },
    keywords: {
      en: ['switch', 'toggle', 'on/off', 'form'],
      zhCN: ['开关', '切换', '表单'],
    },
  },
  {
    id: 'radio',
    name: 'RadioGroup',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { RadioGroup } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-radiogroup--docs',
    description: {
      en: 'Group of radio buttons for single selection.',
      zhCN: '单选按钮组，用于单项选择。',
    },
    keywords: {
      en: ['radio', 'group', 'single-select', 'form'],
      zhCN: ['单选', '单选组', '单选按钮', '表单'],
    },
  },
  {
    id: 'slider',
    name: 'Slider',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { Slider } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-slider--docs',
    description: {
      en: 'Input for selecting a value from a range.',
      zhCN: '滑块，从范围内选择值。',
    },
    keywords: {
      en: ['slider', 'range', 'volume', 'form'],
      zhCN: ['滑块', '范围', '音量', '表单'],
    },
  },
  {
    id: 'field',
    name: 'Field',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { Field } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-field--docs',
    description: {
      en: 'Wrapper for form fields with label and description.',
      zhCN: '表单字段包装器，带标签和描述。',
    },
    keywords: {
      en: ['field', 'form', 'label', 'description'],
      zhCN: ['字段', '表单', '标签', '描述'],
    },
  },
  {
    id: 'fieldset',
    name: 'Fieldset',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { Fieldset } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-fieldset--docs',
    description: {
      en: 'Groups related form fields with a legend.',
      zhCN: '将相关表单字段分组并添加图例。',
    },
    keywords: {
      en: ['fieldset', 'group', 'form', 'legend'],
      zhCN: ['字段集', '分组', '表单', '图例'],
    },
  },
  {
    id: 'label',
    name: 'Label',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { Label } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-label--docs',
    description: {
      en: 'Accessible label for form controls.',
      zhCN: '表单控件的可访问标签。',
    },
    keywords: {
      en: ['label', 'form', 'accessibility'],
      zhCN: ['标签', '表单', '无障碍'],
    },
  },
  {
    id: 'form-message',
    name: 'FormMessage',
    category: 'inputs',
    status: 'stable',
    importSnippet: 'import { FormMessage } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-formmessage--docs',
    description: {
      en: 'Displays validation messages for form fields.',
      zhCN: '显示表单字段的验证消息。',
    },
    keywords: {
      en: ['form', 'message', 'error', 'validation'],
      zhCN: ['表单', '消息', '错误', '验证'],
    },
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    category: 'navigation',
    status: 'stable',
    importSnippet: 'import { Breadcrumb } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-breadcrumb--docs',
    description: {
      en: 'Navigation aid showing the current page location.',
      zhCN: '面包屑导航，显示当前页面位置。',
    },
    keywords: {
      en: ['breadcrumb', 'nav', 'path', 'trail'],
      zhCN: ['面包屑', '导航', '路径'],
    },
  },
  {
    id: 'navigation-menu',
    name: 'NavigationMenu',
    category: 'navigation',
    status: 'stable',
    importSnippet: 'import { NavigationMenu } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-navigationmenu--docs',
    description: {
      en: 'Site-level navigation with submenus.',
      zhCN: '站点级导航菜单，支持子菜单。',
    },
    keywords: {
      en: ['navigation', 'menu', 'nav', 'site-nav'],
      zhCN: ['导航', '导航菜单', '站点导航'],
    },
  },
  {
    id: 'menubar',
    name: 'Menubar',
    category: 'navigation',
    status: 'stable',
    importSnippet: 'import { Menubar } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-menubar--docs',
    description: {
      en: 'Horizontal menu bar with dropdown menus.',
      zhCN: '水平菜单栏，带下拉菜单。',
    },
    keywords: {
      en: ['menubar', 'menu', 'toolbar', 'desktop'],
      zhCN: ['菜单栏', '菜单', '工具栏'],
    },
  },
  {
    id: 'tabs',
    name: 'Tabs',
    category: 'navigation',
    status: 'stable',
    importSnippet: 'import { Tabs, TabsList, TabsTrigger, TabsContent } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-tabs--docs',
    description: {
      en: 'Tabbed interface for switching between panels.',
      zhCN: '标签页，在不同面板间切换。',
    },
    keywords: {
      en: ['tabs', 'tab', 'panel', 'switch'],
      zhCN: ['标签页', '选项卡', '面板', '切换'],
    },
  },
  {
    id: 'dialog',
    name: 'Dialog',
    category: 'overlays',
    status: 'stable',
    importSnippet: 'import { Dialog, DialogTrigger, DialogContent } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-dialog--docs',
    description: {
      en: 'Modal window overlaying the main content.',
      zhCN: '对话框，覆盖在主内容上的模态窗口。',
    },
    keywords: {
      en: ['dialog', 'modal', 'popup', 'overlay'],
      zhCN: ['对话框', '弹窗', '模态', '弹出'],
    },
  },
  {
    id: 'popover',
    name: 'Popover',
    category: 'overlays',
    status: 'stable',
    importSnippet: 'import { Popover, PopoverTrigger, PopoverContent } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-popover--docs',
    description: {
      en: 'Floating content panel triggered by a click.',
      zhCN: '浮动内容面板，点击触发。',
    },
    keywords: {
      en: ['popover', 'popup', 'floating', 'overlay'],
      zhCN: ['弹出框', '浮动', '弹出'],
    },
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'overlays',
    status: 'stable',
    importSnippet: 'import { Tooltip, TooltipTrigger, TooltipContent } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-tooltip--docs',
    description: {
      en: 'Informational popup shown on hover or focus.',
      zhCN: '工具提示，悬停或聚焦时显示。',
    },
    keywords: {
      en: ['tooltip', 'hint', 'hover', 'title'],
      zhCN: ['工具提示', '提示', '悬停'],
    },
  },
  {
    id: 'dropdown-menu',
    name: 'DropdownMenu',
    category: 'overlays',
    status: 'stable',
    importSnippet:
      'import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-dropdownmenu--docs',
    description: {
      en: 'Menu with actions triggered by a button.',
      zhCN: '下拉菜单，由按钮触发的操作列表。',
    },
    keywords: {
      en: ['dropdown', 'menu', 'context', 'actions'],
      zhCN: ['下拉菜单', '菜单', '操作'],
    },
  },
  {
    id: 'context-menu',
    name: 'ContextMenu',
    category: 'overlays',
    status: 'stable',
    importSnippet:
      'import { ContextMenu, ContextMenuTrigger, ContextMenuContent } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-contextmenu--docs',
    description: {
      en: 'Menu shown on right-click or long press.',
      zhCN: '上下文菜单，右键或长按触发。',
    },
    keywords: {
      en: ['context', 'menu', 'right-click'],
      zhCN: ['上下文菜单', '右键菜单', '菜单'],
    },
  },
  {
    id: 'hover-card',
    name: 'HoverCard',
    category: 'overlays',
    status: 'stable',
    importSnippet: 'import { HoverCard, HoverCardTrigger, HoverCardContent } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-hovercard--docs',
    description: {
      en: 'Preview card shown when hovering a trigger element.',
      zhCN: '悬停卡片，悬停触发元素时显示预览。',
    },
    keywords: {
      en: ['hover', 'card', 'preview', 'popover'],
      zhCN: ['悬停卡', '预览', '卡片'],
    },
  },
  {
    id: 'sheet',
    name: 'Sheet',
    category: 'overlays',
    status: 'stable',
    importSnippet: 'import { Sheet, SheetTrigger, SheetContent } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-sheet--docs',
    description: {
      en: 'Side-anchored overlay panel (drawer).',
      zhCN: '侧边面板（抽屉），锚定在屏幕边缘。',
    },
    keywords: {
      en: ['sheet', 'drawer', 'sidebar', 'panel'],
      zhCN: ['侧边栏', '抽屉', '面板', '侧边面板'],
    },
  },
  {
    id: 'toast',
    name: 'Toast',
    category: 'overlays',
    status: 'stable',
    importSnippet: 'import { ToastProvider, Toast, ToastTitle } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-toast--docs',
    description: {
      en: 'Brief notification that appears temporarily.',
      zhCN: '提示条，临时出现的简短通知。',
    },
    keywords: {
      en: ['toast', 'notification', 'snackbar', 'alert'],
      zhCN: ['提示', '通知', '提示条', '消息'],
    },
  },
  {
    id: 'alert',
    name: 'Alert',
    category: 'feedback',
    status: 'stable',
    importSnippet: 'import { Alert, AlertTitle, AlertDescription } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-alert--docs',
    description: {
      en: 'Displays important messages and callouts.',
      zhCN: '提醒，显示重要消息和标注。',
    },
    keywords: {
      en: ['alert', 'banner', 'notification', 'warning'],
      zhCN: ['提醒', '横幅', '通知', '警告'],
    },
  },
  {
    id: 'progress',
    name: 'Progress',
    category: 'feedback',
    status: 'stable',
    importSnippet: 'import { Progress } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-progress--docs',
    description: {
      en: 'Indicates completion progress of a task.',
      zhCN: '进度条，指示任务完成进度。',
    },
    keywords: {
      en: ['progress', 'bar', 'loading', 'percentage'],
      zhCN: ['进度', '进度条', '加载', '百分比'],
    },
  },
  {
    id: 'spinner',
    name: 'Spinner',
    category: 'feedback',
    status: 'stable',
    importSnippet: 'import { Spinner } from "@zhuiye/ui";',
    storyPath: '?path=/docs/primitives-spinner--docs',
    description: {
      en: 'Animated indicator for loading states.',
      zhCN: '加载指示器，用于加载状态的动画。',
    },
    keywords: {
      en: ['spinner', 'loading', 'loader', 'wait'],
      zhCN: ['加载', '加载中', '等待', '旋转'],
    },
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'feedback',
    status: 'stable',
    importSnippet: 'import { Badge } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-badge--docs',
    description: {
      en: 'Small label for status or categorization.',
      zhCN: '徽章，用于状态或分类的小标签。',
    },
    keywords: {
      en: ['badge', 'tag', 'label', 'status'],
      zhCN: ['徽章', '标签', '状态'],
    },
  },
  {
    id: 'avatar',
    name: 'Avatar',
    category: 'feedback',
    status: 'stable',
    importSnippet: 'import { Avatar, AvatarImage, AvatarFallback } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-avatar--docs',
    description: {
      en: 'User image with fallback initials.',
      zhCN: '头像，显示用户图片或回退缩写。',
    },
    keywords: {
      en: ['avatar', 'image', 'profile', 'user'],
      zhCN: ['头像', '图片', '用户', '个人资料'],
    },
  },
  {
    id: 'accordion',
    name: 'Accordion',
    category: 'layout',
    status: 'stable',
    importSnippet:
      'import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-accordion--docs',
    description: {
      en: 'Vertically stacked collapsible sections.',
      zhCN: '折叠面板，垂直堆叠的可折叠区域。',
    },
    keywords: {
      en: ['accordion', 'collapse', 'expand', 'faq'],
      zhCN: ['折叠面板', '手风琴', '展开', '折叠'],
    },
  },
  {
    id: 'collapsible',
    name: 'Collapsible',
    category: 'layout',
    status: 'stable',
    importSnippet:
      'import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-collapsible--docs',
    description: {
      en: 'Toggle to show or hide content.',
      zhCN: '可折叠区域，切换显示或隐藏内容。',
    },
    keywords: {
      en: ['collapsible', 'collapse', 'expand', 'toggle'],
      zhCN: ['可折叠', '折叠', '展开', '切换'],
    },
  },
  {
    id: 'scroll-area',
    name: 'ScrollArea',
    category: 'layout',
    status: 'stable',
    importSnippet: 'import { ScrollArea } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-scrollarea--docs',
    description: {
      en: 'Custom-styled scrollable container.',
      zhCN: '自定义样式的可滚动容器。',
    },
    keywords: {
      en: ['scroll', 'area', 'viewport', 'scrollbar'],
      zhCN: ['滚动', '滚动区域', '视口'],
    },
  },
  {
    id: 'separator',
    name: 'Separator',
    category: 'layout',
    status: 'stable',
    importSnippet: 'import { Separator } from "@zhuiye/ui";',
    storyPath: '?path=/docs/primitives-separator--docs',
    description: {
      en: 'Visual or semantic divider between elements.',
      zhCN: '分割线，元素之间的视觉或语义分隔。',
    },
    keywords: {
      en: ['separator', 'divider', 'hr', 'line'],
      zhCN: ['分割线', '分隔', '分隔线'],
    },
  },
  {
    id: 'aspect-ratio',
    name: 'AspectRatio',
    category: 'layout',
    status: 'stable',
    importSnippet: 'import { AspectRatio } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-aspectratio--docs',
    description: {
      en: 'Maintains a consistent width-to-height ratio.',
      zhCN: '宽高比，保持一致的宽高比例。',
    },
    keywords: {
      en: ['aspect', 'ratio', 'media', 'responsive'],
      zhCN: ['宽高比', '比例', '响应式'],
    },
  },
  {
    id: 'toolbar',
    name: 'Toolbar',
    category: 'layout',
    status: 'stable',
    importSnippet: 'import { Toolbar, ToolbarButton, ToolbarToggleGroup } from "@zhuiye/ui";',
    storyPath: '?path=/docs/components-toolbar--docs',
    description: {
      en: 'Container for action buttons and controls.',
      zhCN: '工具栏，操作按钮和控件的容器。',
    },
    keywords: {
      en: ['toolbar', 'action-bar', 'editor'],
      zhCN: ['工具栏', '操作栏', '编辑器'],
    },
  },
  {
    id: 'visually-hidden',
    name: 'VisuallyHidden',
    category: 'primitives',
    status: 'stable',
    importSnippet: 'import { VisuallyHidden } from "@zhuiye/ui";',
    storyPath: '?path=/docs/primitives-visuallyhidden--docs',
    description: {
      en: 'Hides content visually but keeps it accessible.',
      zhCN: '视觉隐藏，对视觉隐藏但保持可访问。',
    },
    keywords: {
      en: ['visually-hidden', 'screen-reader', 'a11y', 'sr-only'],
      zhCN: ['隐藏文本', '屏幕阅读器', '无障碍'],
    },
  },
  {
    id: 'icon-slot',
    name: 'IconSlot',
    category: 'primitives',
    status: 'stable',
    importSnippet: 'import { IconSlot } from "@zhuiye/ui";',
    storyPath: '?path=/docs/primitives-iconslot--docs',
    description: {
      en: 'Consistent icon sizing and accessible labeling.',
      zhCN: '图标槽，统一的图标尺寸和可访问标签。',
    },
    keywords: {
      en: ['icon', 'slot', 'adornment', 'decorative'],
      zhCN: ['图标', '图标槽', '装饰'],
    },
  },
];

export const categoryOrder: readonly ComponentCategory[] = [
  'actions',
  'inputs',
  'navigation',
  'overlays',
  'feedback',
  'layout',
  'primitives',
];
