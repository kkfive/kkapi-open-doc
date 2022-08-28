# 快速开始

## 说明

此部分介绍 ispeak 发送方式。

## 设置 Token

在外部发送为了验证主人身份，因此需要在后台->设置->个人设置 中设置一个 speak token。

![image-20220227121231377](https://file.acs.pw/picGo/2022/02/27/20220227121231.png)

## 查看个人 ID

![image-20220227131425769](https://file.acs.pw/picGo/2022/02/27/20220227131425.png)

## 通过网页端发送哔哔

进入[ispeak-biubiu](https://ispeak-biubiu.vercel.app/)页面，首先配置基础配置。

![image-20220227131551738](https://file.acs.pw/picGo/2022/02/27/20220227131551.png)

接下来在发布设置中撰写你要发布的内容即可

![image-20220227131630594](https://file.acs.pw/picGo/2022/02/27/20220227131630.png)

发布成功后即可在后台管理中看到刚刚发布的 speak

![image-20220227131747202](https://file.acs.pw/picGo/2022/02/27/20220227131747.png)

## 博客前端方案

### ispeak 的方案

博客前端项目：[ISpeak](https://github.com/kkfive/iSpeak/)

演示参考：[小康博客](https://www.antmoe.com/speak/)

#### 快速开始

> ipseak 使用 marked 依赖和 highlight 依赖，为了减少打包体积，并没有将该依赖打包，因此需要使用 cdn 进行外部引入。

参考如下（以[Artalk](https://artalk.js.org/)评论为例）

```html
<div id="tip" style="text-align:center;">ipseak加载中</div>
<div id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/ispeak@4.4.0/style.css"
/>

<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script src="https://cdn.staticfile.org/marked/2.0.0/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ispeak@4.4.0/ispeak.umd.js"></script>
<!-- CSS -->
<link href="https://unpkg.com/artalk@2.3.4/dist/Artalk.css" rel="stylesheet" />
<!-- JS -->
<script src="https://unpkg.com/artalk@2.3.4/dist/Artalk.js"></script>
<script>
  var head = document.getElementsByTagName('head')[0]
  var meta = document.createElement('meta')
  meta.name = 'referrer'
  meta.content = 'no-referrer'
  head.appendChild(meta)
  if (ispeak) {
    ispeak
      .init({
        el: '#ispeak',
        api: 'https://kkapi-dev.vercel.app/',
        author: '61fe93508fd621d39a155725',
        pageSize: 10,
        loading_img: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif',
        comment: function (speak) {
          // 4.4.0 之后在此回调函数中初始化评论
          const { _id, title, content } = speak
          const contentSub = content.substring(0, 30)
          new Artalk({
            el: '.ispeak-comment', // 默认情况下 ipseak 生成class为 ispeak-comment 的div
            pageKey: '/speak/info.html?q=' + _id, // 手动传入当前speak的唯一id
            pageTitle: title || contentSub, // 手动传入当前speak的标题(由于content可能过长，因此截取前30个字符)
            server: 'https://api.antmoe.com/artalk/',
            site: 'speak' // 你的站点名
          })
        }
      })
      .then(function () {
        console.log('ispeak 加载完成')
        document.getElementById('tip').style.display = 'none'
      })
  } else {
    document.getElementById('tip').innerHTML = 'ipseak依赖加载失败！'
  }
</script>
```

ispeak 配置项 scheam 参考：https://github.com/kkfive/ISpeak/blob/master/src/types/parameter.ts或者[/posts/ispeak/init-params.html](/posts/ispeak/init-params.html)优先以前者为准

::: warning

用户请自行判断所使用的ISpeak的版本。

:::

## 发送 speak 的方式

参考：[发送及管理端](/posts/ispeak/#发送及管理端)

## 自定义发送 Speak

如果上述中的方案没有你所需要的方案，你完全可以进行自己开发。开发中只需要注意如下问题即可。

- 与传统"哔哔"不同的是发送哔哔的 tag 为必填项，并且需要通过接口去获取。

### 获取 speak-tag

- url:`/ispeak/tag/list?userId=用户id`

例如：[链接](https://kkapi-open.vercel.app/api/ispeak/tag/list?userId=6214e53ffffe384c0230910d)

- 返回值

  ```json
  {
    "data": [
      {
        "_id": "621792fd8bfa81f9b5666c18",
        "createAt": "2022-02-24T14:13:20.084Z",
        "description": "",
        "orderNo": 0,
        "user": "6214e53ffffe384c0230910d",
        "bgColor": "red",
        "name": "test",
        "__v": 0
      },
      {
        "_id": "6219877c43b7434215ae9b66",
        "createAt": "2022-02-26T01:42:58.567Z",
        "description": "Excepteur ut labore mollit",
        "orderNo": 34,
        "user": "6214e53ffffe384c0230910d",
        "bgColor": "green",
        "name": "做支关引要",
        "__v": 0
      }
    ],
    "message": "请求成功",
    "type": "success",
    "code": 0
  }
  ```

### 通过 token 发送 speak 姿势

- url:`/ispeak/addByToken`

- body

  ```json
  {
    "token": "123",
    "content": "sint dolore veniam non",
    "type": "1",
    "tag": "621792fd8bfa81f9b5666c18",
    "showComment": "0",
    "title": "那可口任或"
  }
  ```

发送哔哔所需要的参数 schema

```typescript
export class Ispeak {
  /**
   * 标题
   */
  @Prop({ type: String, default: '' })
  title: string

  /**
   * 内容
   */
  @IsNotEmpty({ message: '内容为必填项目哦！' })
  @Prop({ type: String, required: true })
  content: string
  /**
   * 类型 0全部人可见 1仅登录可见 2仅自己可见
   */
  @Prop({ type: String, default: '0' })
  type: string

  @IsNotEmpty({
    message: '标签为必填项目'
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: ISpeakModelName.ISpeakTagList,
    required: true
  })
  tag: IspeakTag

  /**
   * 展示评论可被评论 0不可以被评论 1可以被评论
   */
  @Prop({ type: String, default: '1' })
  showComment: string
}
```

tag 的 schema 定义

```typescript
export class IspeakTag {
  /**
   * 标签名称
   */
  @IsNotEmpty({ message: '标签名称为必填项' })
  @Prop({ required: true })
  name: string

  /**
   * 标签背景颜色
   */
  @Prop({ default: '#DB2828' })
  bgColor: string

  /**
   * 排序
   */
  @Prop({ default: 0 })
  orderNo: number

  /**
   * 标签描述
   */
  @Prop({ default: '' })
  description: string
}
```

## 开启 GitHub 认证

Ispeak 发送的 speak 包含登录可见、公开可见和仅作者可见。因此使用 GitHub 作为一键认证，实现此功能。

初始化参数时填入一下两个字段即可。

```typescript
export interface params {
  // speak页面路径
  speakPage?: string // 例如 ‘/speak’
  githubClientId?: string // 通过创建GitHub app获取
}
```

> 此功能需要 kkapi 填入相关环境变量：GITHUB_CLIENT_ID 和 GITHUB_CLIENT_SECRET。
>
> 博主 id 需要在 kkadmin 后台手动填入。
