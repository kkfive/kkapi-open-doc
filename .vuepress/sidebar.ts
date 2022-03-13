import { defineSidebarConfig } from 'vuepress-theme-hope'

export default defineSidebarConfig({
  '/guide/': [
    {
      text: '快速开始',
      icon: 'creative',
      children: ['setup/db', 'setup/deploy', 'setup/github']
    },
    {
      text: '管理后台',
      icon: 'creative',
      children: ['admin/setup/']
    }
  ],
  '/reference/': [
    {
      text: 'kkapi配置参考',
      icon: 'book',
      children: ['kkapi/environment/']
    },
    {
      text: 'kkadmin配置参考',
      icon: 'book',
      children: ['kkadmin/environment']
    }
  ],
  '/posts/': [
    {
      text: 'ispeak模块',
      icon: 'book',
      children: [
        'ispeak/',
        'ispeak/front/',
        'ispeak/send-mode/',
        'ispeak/init-params/'
      ]
    }
  ]
})
