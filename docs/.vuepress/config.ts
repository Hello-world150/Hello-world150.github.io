import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '水木的博客',
  description: '祝你早安，午安，晚安。',

  bundler: viteBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://qhlcmy.me',
    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
           // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
         languages: ['shell', 'typescript', 'javascript', 'rust', 'python'],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
      //   include: true,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        pdf: true,
      //   caniuse: true,
      //   plot: true,
        bilibili: true,
      //   youtube: true,
        icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'Hello-world150/Hello-world150.github.io',
        repoId: 'R_kgDONJcsHQ',
        category: 'Announcements',
        categoryId: 'DIC_kwDONJcsHc4Cj6ts',
        mapping: 'title',
        reactionsEnabled: true,
        lightTheme: 'light',
        darkTheme: 'dark',
      },
      
    },
  },
)})