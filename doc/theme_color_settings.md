# 主题色系统指南

## 主题色配置

### 主要主题色
- **主色调**: `#0f52ba` (深蓝色)
- **位置**: `src/app/globals.css` 中的 `:root` 选择器

### 主题色变量系统

```css
:root {
  /* 主题色基础变量 */
  --theme-primary: #0f52ba;           /* 主色调 */
  --theme-primary-light: #4a7fd1;     /* 浅色变体 */
  --theme-primary-dark: #0a3a8a;      /* 深色变体 */
  --theme-primary-lighter: #7ba3e0;   /* 更浅变体 */
  --theme-primary-darker: #072a66;    /* 更深变体 */
}
```

## 使用方法

### 1. 直接使用CSS变量
```css
.my-element {
  color: var(--theme-primary);
  background-color: var(--theme-primary-light);
  border-color: var(--theme-primary-dark);
}
```

### 2. 在Tailwind中使用
```tsx
// 使用自定义CSS变量
<div className="text-[var(--theme-primary)]">
  这是主题色文字
</div>

// 或者使用Tailwind的CSS变量
<div className="text-primary">
  这是主题色文字
</div>
```

### 3. 在组件中使用
```tsx
import { cn } from '@/lib/utils';

function MyButton({ className, ...props }) {
  return (
    <button
      className={cn(
        "bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)]",
        "text-white px-4 py-2 rounded",
        className
      )}
      {...props}
    />
  );
}
```

## 颜色应用场景

### 主要应用
- **按钮**: `--theme-primary` (主按钮)
- **链接**: `--theme-primary` (主要链接)
- **边框**: `--ring` (焦点边框)
- **强调**: `--accent` (强调元素)

### 图表颜色
- **图表1**: `--chart-1` (主要数据)
- **图表2**: `--chart-2` (次要数据)
- **图表3**: `--chart-3` (第三级数据)
- **图表4**: `--chart-4` (第四级数据)
- **图表5**: `--chart-5` (第五级数据)

### 侧边栏
- **侧边栏主色**: `--sidebar-primary`
- **侧边栏强调**: `--sidebar-accent`
- **侧边栏边框**: `--sidebar-border`

## 如何更改主题色

### 方法1: 修改CSS变量
在 `src/app/globals.css` 中更改 `--theme-primary` 的值：

```css
:root {
  --theme-primary: #your-new-color;  /* 替换为新的颜色 */
  --theme-primary-light: #your-light-color;
  --theme-primary-dark: #your-dark-color;
  /* ... 其他变体 */
}
```

### 方法2: 使用CSS计算函数
```css
:root {
  --theme-primary: #0f52ba;
  --theme-primary-light: color-mix(in srgb, var(--theme-primary) 70%, white);
  --theme-primary-dark: color-mix(in srgb, var(--theme-primary) 70%, black);
}
```

## 深色模式适配

### 自动适配
深色模式下的主题色会自动调整：
- **浅色模式**: 使用较深的主题色变体
- **深色模式**: 使用较浅的主题色变体

### 深色模式变量
```css
.dark {
  --primary: var(--theme-primary-light);      /* 较浅的主色 */
  --accent: var(--theme-primary);             /* 标准主色 */
  --ring: var(--theme-primary-light);         /* 较浅的边框色 */
}
```

