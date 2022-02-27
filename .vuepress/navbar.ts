import { defineNavbarConfig } from 'vuepress-theme-hope'

export default defineNavbarConfig([
  // "/",
  // '/home',
  { text: '快速开始', icon: 'creative', link: '/guide/' },
  { text: '参考项', icon: 'book', link: '/reference/' },
  {
    text: '相关项',
    icon: 'edit',
    prefix: '/posts/',
    children: [
      {
        text: 'ispeak',
        icon: 'edit',
        prefix: 'ispeak/',
        children: ['']
      }
    ]
  },
  {
    text: '相关API',
    link: 'https://www.apifox.cn/apidoc/shared-d7ab8adf-2239-4b51-b9fa-c26592aa4ac4'
  }
])
