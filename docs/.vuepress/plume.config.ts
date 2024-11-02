import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

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
    description: '祝你早安，午安，晚安。',
    circle: true,
    location: '重庆',
    // organization: '',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/Hello-world150' },
  ],

})
