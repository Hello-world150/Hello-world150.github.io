import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog/' },
  { text: 'Tag', link: '/blog/tags/' },
  { text: 'Archive', link: '/blog/archives/' },
  {
    text: 'Note',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
])
