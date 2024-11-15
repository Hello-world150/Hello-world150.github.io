import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'water_wood.svg',
  // your git repo url
  docsRepo: 'https://github.com/Hello-world150/Hello-world150.github.io',
  docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: 'water_wood.svg',
    name: '水木的博客',
    circle: true,
    location: '重庆',
  },

  navbar,

  social: [
    { icon: 'github', link: 'https://github.com/Hello-world150' },
  ],

})
