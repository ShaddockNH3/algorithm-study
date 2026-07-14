# 算法学习笔记

[在线文档站：algorithm-study](https://shaddocknh3.github.io/algorithm-study/)

这是一个算法与数据结构学习记录仓库，整理版文档位于 `docs/`，并通过 VitePress 部署为 GitHub Pages 文档站。

原始学习记录仍保留在根目录下的历史文件夹中；`docs/` 是适合阅读和部署的整理稿。

## 站点

在线文档站：

[https://shaddocknh3.github.io/algorithm-study/](https://shaddocknh3.github.io/algorithm-study/)

## 文档结构

文档站按时间和学习阶段分为三部分，顺序为：

1. `docs/past/`
   早期草稿，主要覆盖 2024 年 7 月到 2025 年 6 月之间的 DSA C++、FZU 课程、Hot100 和早期代码随想录记录。

2. `docs/go-code-thoughts/`
   Go 版本《代码随想录》系统刷题笔记，从 2025 年 7 月 1 日开始整理，是当前主线。

3. `docs/cpp-code-thoughts/`
   C++ 版本《代码随想录》阶段性复盘，主要对应 2025 年 10 月，整理到树章节。

每个分区下都有单独的 `README.md`，用于说明该部分的范围和时间。

## 本地预览

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run docs:dev
```

构建静态站点：

```bash
npm run docs:build
```

检查 Markdown：

```bash
npm run lint:md
```

## GitHub Pages

仓库已包含 GitHub Actions workflow：

```text
.github/workflows/deploy.yml
```

推送到 `main` 或 `master` 后会自动构建 VitePress，并部署到 GitHub Pages。

如果仓库不是 `<user>.github.io` 形式，VitePress 会根据 `GITHUB_REPOSITORY` 自动设置站点 `base` 为仓库名路径。
