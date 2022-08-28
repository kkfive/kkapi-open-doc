# 评论说明

:::warning

此部分教程仅适用于`4.4.0`及之后的版本（如无特殊说明）

:::

## 说明

1. 首先谈谈为什么要将初始化评论修改为回调函数，由用户自行去初始化。

这个问题一是为了兼容多个评论，而不是只是局限于某几个评论系统；二是为了能够自定义的存储评论的key（为了邮件通知内点击评论后还能定位该评论）

2. 如何使用

使用上无疑是增加了门槛，又用户自行去翻阅对应评论的文档。且还需要用户的一定编程能力。

## 添加评论

本文已artalk评论为例，**但不代表只能用artalk！！！**

请认真阅读并理解注释，其他评论基本一样。

```javascript
ispeak
  .init({
  // 在ispeak初始化时传入初始化评论函数
  comment: function (speak) {
    // 回调函数的参数即为该条speak对象
    const { _id, title, content } = speak // 取出该speak的唯一id，标题和内容
    const contentSub = content.substring(0, 30) // 截取内容前30个字符
    // 初始化artalk评论
    new Artalk({
      el: '.ispeak-comment', // 默认情况下 ipseak 生成class为 ispeak-comment 的div
      pageKey: '/speak/info.html?q=' + _id,, // 手动传入当前speak的唯一id
      pageTitle: title || contentSub, // 手动传入当前speak的标题(由于content可能过长，因此截取前30个字符)
      server: 'https://api.antmoe.com/artalk/',
      site: 'speak' // 你的站点名
    })
  }
})
```

> 关于`pageKey`如何填写？
>
> 该属性为**页面地址**（相对路径 / 完整 URL），但是我们的ispeak的页面地址是不会变的，因此这里需要手动传入该属性（其他评论自行查找文档，寻找其对应属性）。
>
> 这里我填写的是`'/speak/info.html/#/' + _id`,为了点击评论能够到对应的speak页面，因此需要在speak目录下新建一个文件`info.md`，该页面的作用就是展示当前传入id的评论内容。



## 单个speak页面

即为上面所述的`info.md`页面，其主要作用就是展示单条speak和其对应的评论。

参考内容：

```markdown
---
title: Speak
date: 2022-08-21 14:11:00
update: 2022-08-21 14:11:00
top_img: https://tva1.sinaimg.cn/large/005B3XPgly1ghkxqgvmy0j30zk0irn2q.jpg
aside: false
comments: false
description: 欢迎来到小康的Speak页面，快来看看小康分享了什么speak！
---

<!-- CSS -->
<link href="https://unpkg.com/artalk@2.3.4/dist/Artalk.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css" />
<div class='content'>
  <img src='https://bu.dusays.com/2022/05/01/626e88f349943.gif'>
</div>
{% btn 'https://www.antmoe.com/speak/',查看全部,far fa-hand-point-right,block center blue larger %}
<hr />
<div class='ispeak-comment'></div>
<!-- JS -->
<script src="https://unpkg.com/artalk@2.3.4/dist/Artalk.js"></script>
<script src="https://unpkg.com/marked@4.0.18/marked.min.js"></script>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script>
  const searchParams = new URLSearchParams(window.location.search);
  const speakId = searchParams.get('q');
  const path = window.location.pathname;
  const apiURL = 'https://kkapi.vercel.app/api/ispeak';
  const markedRender = (body, loading_img='https://bu.dusays.com/2022/05/01/626e88f349943.gif') => {
    const renderer = {
      image(href, title, text) {
        return `<a href="${href}" target="_blank" data-fancybox="group" class="fancybox">
            <img speak-src="${href}" src=${loading_img} alt='${text}'>
            </a>`
      }
    }
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        if (hljs) {
          return hljs.highlightAuto(code).value
        } else {
          return code
        }
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    marked.use({ renderer })
    return marked.parse(body)
  }
  fetch(`${apiURL}/get/${speakId}`)
  .then(response => response.json())
  .then(res => {
    const data = res.data;
    if(data){
      const {title,content} = data;
      const contentSub = content.substring(0, 30);
      document.querySelector('.content').innerHTML = markedRender(content);
      if(title){
        document.title = title;
      }
      new Artalk({
        el: '.ispeak-comment',
        pageKey: path + '?q=' + speakId,
        pageTitle: title || contentSub,
        server: 'https://api.antmoe.com/artalk/',
        site: 'speak', // 你的站点名
        useBackendConf: true,
      })
    }
  });
  
</script>

```

