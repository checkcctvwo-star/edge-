# Edge Sidebar Toggle

该项目提供一个轻量 Edge 扩展，用于在浏览器内部通过快捷键开关扩展侧边栏。

## 功能说明

- 默认快捷键：`Alt + V`
- 快捷键触发后会打开/关闭扩展侧边栏（Side Panel）。

> 重要说明：Edge 原生侧边栏（Bing/工具/应用面板）目前没有公开 API。
> 因此扩展无法直接开关原生侧边栏，只能使用官方可用的 Side Panel 来模拟体验。

## 安装与使用（详细步骤）

1. 打开 Edge，访问 `edge://extensions/`。
2. 打开右上角的“开发人员模式”开关。
3. 点击“加载解压缩”，选择本项目目录。
4. 访问 `edge://extensions/shortcuts`，找到 “Edge Sidebar Toggle”。
5. 将快捷键设置为 `Alt + V`（也可以按你的习惯修改）。
6. 在任意页面按下 `Alt + V`，即可开关扩展侧边栏。

## 常见问题

### 1) 快捷键没有生效？
- 确认扩展已启用，并且快捷键没有被其他扩展或系统占用。
- 建议在 `edge://extensions/shortcuts` 中重新设置一次快捷键。

### 2) 为什么开关的不是 Edge 原生侧边栏？
- 目前 Edge 没有公开的官方 API 可以控制原生侧边栏（Bing/工具/应用面板）。
- 本扩展使用官方提供的 **Side Panel** 能力来实现类似的快速开关体验。

## 目录结构

- `manifest.json`：扩展配置。
- `background.js`：快捷键与侧边栏开关逻辑。
- `sidepanel.html` / `sidepanel.css`：侧边栏内容与样式。
