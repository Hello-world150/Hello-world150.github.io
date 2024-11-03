import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog/' },
  { text: 'Tag', link: '/blog/tags/' },
  { text: 'Archive', link: '/blog/archives/' },
  {
    text: 'Notes',
    items: [
      { text: 'Rust', link: '/notes/Rust' },
      { text: 'Markdown', link: '/notes/Markdown' },
    ]
  },
])
