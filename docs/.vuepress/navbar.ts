import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog/' },
  { text: 'Tag', link: '/blog/tags/' },
  { text: 'Archive', link: '/blog/archives/' },
  {
    text: 'Notes',
    items: [
      { text: 'Test', link: '/notes/Test' },
    ]
  },
])
