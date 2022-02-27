import { defineHopeConfig } from 'vuepress-theme-hope'
import themeConfig from './themeConfig'

export default defineHopeConfig({
  base: '/',

  dest: './dist',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css'
      }
    ]
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'kkAPI-Doc',
      description: 'kkapi不完全手册'
    }
  },

  themeConfig
})
