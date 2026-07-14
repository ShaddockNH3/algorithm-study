import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vitepress'

const docsRoot = path.resolve(__dirname, '..')
const collator = new Intl.Collator('zh-Hans-CN', {
  numeric: true,
  sensitivity: 'base'
})

const sections = [
  { text: 'Past', dir: 'past', link: '/past/' },
  { text: 'Go', dir: 'go-code-thoughts', link: '/go-code-thoughts/' },
  { text: 'C++', dir: 'cpp-code-thoughts', link: '/cpp-code-thoughts/' }
]

function repoBase() {
  if (process.env.VITEPRESS_BASE) return process.env.VITEPRESS_BASE
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (!repo || repo.endsWith('.github.io')) return '/'
  return `/${repo}/`
}

function hasMarkdownFiles(dir: string): boolean {
  return fs.readdirSync(dir, { withFileTypes: true }).some((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return hasMarkdownFiles(fullPath)
    return entry.isFile() && entry.name.endsWith('.md')
  })
}

function normalizeTitle(name: string): string {
  return name
    .replace(/\.md$/, '')
    .replace(/^README$/i, '概览')
    .replace(/_/g, ' ')
}

function pageLink(filePath: string): string {
  const relative = path.relative(docsRoot, filePath).replace(/\\/g, '/')
  const withoutExt = relative.replace(/\.md$/, '')
  return `/${withoutExt.replace(/\/README$/, '/')}`
}

function compareEntries(a: fs.Dirent, b: fs.Dirent): number {
  if (a.name === 'README.md') return -1
  if (b.name === 'README.md') return 1
  if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
  return collator.compare(a.name, b.name)
}

function sidebarItems(dir: string, depth = 0): any[] {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => {
      if (entry.name.startsWith('.') || entry.name === 'picture') return false
      return entry.name !== 'README.md'
    })
    .filter((entry) => {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) return hasMarkdownFiles(fullPath)
      return entry.isFile() && entry.name.endsWith('.md')
    })
    .sort(compareEntries)
    .map((entry) => {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        return {
          text: normalizeTitle(entry.name),
          collapsed: depth > 0,
          items: sidebarItems(fullPath, depth + 1)
        }
      }
      return {
        text: normalizeTitle(entry.name),
        link: pageLink(fullPath)
      }
    })
}

const sectionSidebar = Object.fromEntries(
  sections.map((section) => [
    section.link,
    sidebarItems(path.join(docsRoot, section.dir))
  ])
)

const sidebar = {
  '/': [
    {
      text: '开始阅读',
      items: [
        { text: '首页', link: '/' },
        { text: 'Past', link: '/past/' },
        { text: 'Go 代码随想录', link: '/go-code-thoughts/' },
        { text: 'C++ 代码随想录', link: '/cpp-code-thoughts/' }
      ]
    }
  ],
  ...sectionSidebar
}

export default defineConfig({
  title: '算法学习笔记',
  description: '算法与数据结构学习记录',
  base: repoBase(),
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: sections,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    }
  }
})
