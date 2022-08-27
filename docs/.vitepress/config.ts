import { defineConfig } from "vitepress";

export default defineConfig({
  title: "KK Api",
  description: "一个基于NodeJS开发的API",
  lang: "zh-CN",

  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi",
      },
    ],

    // light gallery
    [
      "link",
      {
        href: "https://npm.elemecdn.com/lightgallery@2.3.0/css/lightgallery.css",
        rel: "stylesheet",
      },
    ],
    [
      "script",
      {
        src: "https://npm.elemecdn.com/lightgallery@2.3.0/lightgallery.min.js",
      },
    ],
    // katex
    // ['link', { href: "https://npm.elemecdn.com/katex@0.15.3/dist/katex.min.css", rel: 'stylesheet' }],
    // ['script', { src: 'https://npm.elemecdn.com/katex@0.15.3/dist/katex.min.js' }],
    // ['script', { src: 'https://npm.elemecdn.com/@artalkjs/plugin-katex/dist/artalk-plugin-katex.js' }],
  ],

  lastUpdated: true,

  markdown: {
    // @link https://github.com/shikijs/shiki
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },

  themeConfig: {
    sidebar: {
      "/guide/": [
        {
          text: "API部署",
          collapsible: true,
          items: [
            { text: "快速开始", link: "/guide/index.md" },
            { text: "数据库", link: "/guide/setup/db.md" },
            { text: "部署", link: "/guide/setup/deploy.md" },
            { text: "GitHub", link: "/guide/setup/github.md" },
          ],
        },
        {
          text: "管理后台",
          collapsible: true,
          items: [{ text: "快速开始", link: "/guide/admin/setup.md" }],
        },
        {
          text: "相关项目",
          collapsible: true,
          items: [{ text: "ISpeak", link: "/posts/ispeak/" }],
        },
      ],
      "/posts/": [
        {
          text: "ISpeak",
          collapsible: true,
          items: [
            { text: "简单介绍", link: "/posts/ispeak/index.md" },
            { text: "快速开始", link: "/posts/ispeak/front.md" },
            { text: "设置评论", link: "/posts/ispeak/comment.md" },
            { text: "发送方式", link: "/posts/ispeak/send-mode.md" },
            { text: "初始化参数", link: "/posts/ispeak/init-params.md" },
          ],
        },
      ],
      "/reference/": [
        {
          items: [{ text: "快速开始", link: "/reference/index.md" }],
        },
        {
          text: "KK Api",
          collapsible: true,
          items: [
            { text: "环境变量", link: "/reference/kkapi/environment.md" },
          ],
        },
        {
          text: "KK Admin",
          collapsible: true,
          items: [
            { text: "环境变量", link: "/reference/kkadmin/environment.md" },
          ],
        },
      ],
    },

    nav: [
      // NavbarItem
      {
        text: "首页",
        link: "/guide/",
      },
      {
        text: "参考项",
        link: "/reference/",
      },
      {
        text: "相关案例",
        link: "/case/",
      },
      {
        text: "API参考",
        link: "https://www.apifox.cn/apidoc/shared-d7ab8adf-2239-4b51-b9fa-c26592aa4ac4",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/kkfive/kkapi-open" },
    ],
  },
});
