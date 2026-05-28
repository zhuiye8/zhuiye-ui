# zhuiye-ui

高质量 React + TypeScript UI 组件库。面向长期迭代，追求极致的可维护性、可访问性和设计品质。

## 项目目标

- 构建一套**生产级**、**可复用**、**可访问**的 React UI 组件库
- 基于设计令牌（design tokens）系统实现一致的视觉语言
- 每个组件都必须经过严格的测试和文档化
- 支持深色模式、响应式、键盘导航

## UI/UX 设计原则

1. **一致性**：所有组件共享统一的间距、颜色、字体、圆角、阴影系统
2. **可访问性优先**：ARIA 属性、键盘交互、屏幕阅读器支持是必需品，不是装饰
3. **渐进增强**：基础功能不依赖 JS 动画或视觉效果
4. **明确的状态反馈**：hover / focus / active / disabled / loading / error 每个状态都要有视觉表现
5. **深色模式**：所有组件必须同时支持 light 和 dark 主题
6. **克制的动效**：动效用于引导注意力和反馈，不用于炫技

## 组件 API 设计规则

### Props 设计

- **避免 boolean props 爆炸**：当超过 3 个互斥视觉变体时，使用 `variant` 联合类型而非多个 boolean
- **优先清晰的 variant / size API**：
  ```tsx
  // ✅ Good
  <Button variant="primary" size="lg" />
  // ❌ Bad
  <Button primary large rounded outlined />
  ```
- **复杂组件优先 compound component 结构**：
  ```tsx
  // ✅ Good
  <Select>
    <Select.Trigger />
    <Select.Content>
      <Select.Item value="a">A</Select.Item>
    </Select.Content>
  </Select>
  ```
- **支持 controlled / uncontrolled 模式时必须写清楚**：
  - 文档中必须标注哪些 props 支持受控
  - 提供 `defaultValue` / `value` + `onChange` 配对
  - 内部状态管理不得泄露到外部

### 状态覆盖

每个组件必须覆盖以下状态的样式和行为：

| 状态        | 要求                                                        |
| ----------- | ----------------------------------------------------------- |
| `disabled`  | 降低 opacity，禁止交互，修改 cursor                         |
| `focus`     | 可见的 focus ring，2px offset，使用 `focus-visible`         |
| `error`     | 红色边框或图标 + `aria-invalid="true"` + `aria-describedby` |
| `loading`   | 显示 spinner，设置 `aria-busy="true"`，禁止交互             |
| `dark mode` | 通过 CSS 变量或 data 属性切换，不得硬编码颜色               |

### 组件品质

- **不允许只做视觉 demo，必须可复用**：每个 Story 必须展示真实的交互场景
- 所有组件必须通过 `forwardRef` 暴露 ref
- 所有组件必须支持 `className` 透传
- 所有组件必须支持 `style` 透传
- 复合组件必须导出子组件的类型

## 可访问性标准

- 遵循 [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- 所有交互元素必须可通过键盘到达（Tab / Shift+Tab）
- 使用语义化 HTML 元素（`<button>` 而非 `<div onClick>`）
- 表单控件必须关联 `<label>`
- 模态框 / 弹出框必须实现 focus trap
- 使用 `aria-live` 区域通知动态内容变化
- 颜色对比度至少满足 WCAG AA（4.5:1 正文，3:1 大文本）

## Storybook 要求

每个组件必须包含：

1. **默认状态**：展示最常用的 props 组合
2. **所有 variant**：每个变体一个 story
3. **所有 size**：每个尺寸一个 story
4. **交互状态**：loading / disabled / error 的 story
5. **组合场景**：与其他组件配合使用的示例
6. **Autodocs**：自动从 TypeScript 类型生成文档
7. **Controls**：所有 props 可通过 Storybook 控制面板调节
8. **A11y 插件**：每个 story 通过无障碍检查

## 测试要求

### 单元测试（Vitest + Testing Library）

- 每个组件至少 5 个测试用例：
  1. 渲染测试（是否正确显示内容）
  2. Props 测试（variant / size / disabled 等）
  3. 交互测试（点击、键盘事件）
  4. 可访问性测试（ARIA 属性、角色）
  5. Ref 转发测试
- 使用 `screen.getByRole` 优先于 `getByTestId`
- 使用 `userEvent` 而非 `fireEvent`

### E2E 测试（Playwright）

- 核心组件的关键交互路径必须有 E2E 覆盖
- 测试跨浏览器兼容性（Chromium / Firefox / WebKit）

## 禁止事项

1. **禁止硬编码颜色值**：必须使用 `@zhuiye/tokens` 中的设计令牌
2. **禁止使用 `any` 类型**：严格 TypeScript，无例外
3. **禁止跳过 ESLint / Prettier 检查**
4. **禁止提交未通过的测试**
5. **禁止在组件中直接操作 DOM**（除非必要且通过 ref）
6. **禁止使用 `!important`**
7. **禁止引入未在 package.json 声明的依赖**
8. **禁止在组件中使用 `console.log`**（调试代码必须在 PR 前移除）
9. **禁止只导出组件不导出类型**
10. **禁止组件文件超过 300 行**——超过必须拆分

## 开发命令

```bash
# 安装依赖
pnpm install

# 开发（Storybook）
pnpm run storybook

# 构建所有包
pnpm run build

# 类型检查
pnpm run typecheck

# 单元测试
pnpm run test

# 测试覆盖率
pnpm run test:coverage

# Lint
pnpm run lint

# 格式化
pnpm run format
```

## Monorepo 结构

```
zhuiye-ui/
├── packages/
│   ├── tokens/          # 设计令牌（颜色、间距、字体等）
│   └── ui/              # React 组件库
├── apps/
│   └── docs/            # Storybook 文档站 + E2E 测试
├── AGENTS.md            # 本文件
└── package.json         # 根配置
```
