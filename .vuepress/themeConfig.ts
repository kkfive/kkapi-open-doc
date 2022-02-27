import { defineThemeConfig } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default defineThemeConfig({
  hostname: 'https://kkapi-doc.kkfive.top',

  author: {
    name: 'DreamyTZK',
    url: 'https://xiaokang.me'
  },

  iconPrefix: 'iconfont icon-',

  logo: '/logo.svg',

  repo: 'https://github.com/kkfive/kkapi-open',

  docsDir: 'demo/src',

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer:
    'MIT LICENSE | 主题使用<a href="https://vuepress-theme-hope.github.io/v2/zh/" rel="noopenner noreferrer " target="_blank">vuepress-theme-hope</a>',

  displayFooter: true,

  // page meta
  metaLocales: {
    editLink: '在 GitHub 上编辑此页'
  },

  blog: {
    description: '一个前端开发者',
    intro: '/intro.html',
    medias: {
      Baidu: 'https://example.com',
      Bitbucket: 'https://example.com',
      Dingding: 'https://example.com',
      Discord: 'https://example.com',
      Dribbble: 'https://example.com',
      Email: 'https://example.com',
      Evernote: 'https://example.com',
      Facebook: 'https://example.com',
      Flipboard: 'https://example.com',
      Gitee: 'https://example.com',
      GitHub: 'https://example.com',
      Gitlab: 'https://example.com',
      Gmail: 'https://example.com',
      Instagram: 'https://example.com',
      Lines: 'https://example.com',
      Linkedin: 'https://example.com',
      Pinterest: 'https://example.com',
      Pocket: 'https://example.com',
      QQ: 'https://example.com',
      Qzone: 'https://example.com',
      Reddit: 'https://example.com',
      Rss: 'https://example.com',
      Steam: 'https://example.com',
      Twitter: 'https://example.com',
      Wechat: 'https://example.com',
      Weibo: 'https://example.com',
      Whatsapp: 'https://example.com',
      Youtube: 'https://example.com',
      Zhihu: 'https://example.com'
    }
  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234']
    }
  },

  plugins: {
    blog: {
      autoExcerpt: true
    },

    // comment: {
    //   type: 'waline',
    //   serverURL: 'https://vuepress-theme-hope-comment.vercel.app'
    // },
    comment: false,

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    },
    pwa: false
    // pwa: {
    //   favicon: '/favicon.ico',
    //   cachePic: true,
    //   apple: {
    //     icon: '/assets/icon/apple-icon-152.png',
    //     statusBarColor: 'black'
    //   },
    //   msTile: {
    //     image: '/assets/icon/ms-icon-144.png',
    //     color: '#ffffff'
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: '/assets/icon/chrome-mask-512.png',
    //         sizes: '512x512',
    //         purpose: 'maskable',
    //         type: 'image/png'
    //       },
    //       {
    //         src: '/assets/icon/chrome-mask-192.png',
    //         sizes: '192x192',
    //         purpose: 'maskable',
    //         type: 'image/png'
    //       },
    //       {
    //         src: '/assets/icon/chrome-512.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       },
    //       {
    //         src: '/assets/icon/chrome-192.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       }
    //     ],
    //     shortcuts: [
    //       {
    //         name: 'Guide',
    //         short_name: 'Guide',
    //         url: '/guide/',
    //         icons: [
    //           {
    //             src: '/assets/icon/guide-maskable.png',
    //             sizes: '192x192',
    //             purpose: 'maskable',
    //             type: 'image/png'
    //           },
    //           {
    //             src: '/assets/icon/guide-monochrome.png',
    //             sizes: '192x192',
    //             purpose: 'monochrome',
    //             type: 'image/png'
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // }
  }
})
