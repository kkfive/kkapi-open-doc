# 发送方式参考

## 网页端发送

GitHub开源仓库：[https://github.com/kkfive/speak-biubiu](https://github.com/kkfive/speak-biubiu)
## 后台发送
进入后台新增即可

![image-20220227135930033](https://file.acs.pw/picGo/2022/02/27/20220227135930.png)

## ios 快捷指令
快捷指令链接：https://www.icloud.com/shortcuts/5a03f4209c3e4b42bb75bbea2eaf57db

![image-20220227140332782](https://file.acs.pw/picGo/2022/02/27/20220227140332.png)

在此处将你的配置信息填写即可

## ios/Mac 应用 Taio
参考动作

```
{
  "actions" : [
    {
      "type" : "@flow.set-variable",
      "parameters" : {
        "value" : {
          "value" : "你的token"
        },
        "name" : {
          "value" : "token"
        }
      }
    },
    {
      "type" : "@editor.get-text",
      "parameters" : {
        "location" : 0,
        "fallback" : 1,
        "filename" : {
          "value" : "$",
          "tokens" : [
            {
              "location" : 0,
              "value" : "@editor.file-name"
            }
          ]
        }
      }
    },
    {
      "type" : "@flow.set-variable",
      "parameters" : {
        "value" : {
          "value" : "$",
          "tokens" : [
            {
              "location" : 0,
              "value" : "@input"
            }
          ]
        },
        "name" : {
          "value" : "content"
        }
      }
    },
    {
      "type" : "@flow.set-variable",
      "parameters" : {
        "value" : {
          "value" : "你的api地址"
        },
        "name" : {
          "value" : "api"
        }
      }
    },
    {
      "type" : "@flow.set-variable",
      "parameters" : {
        "value" : {
          "value" : "你的用户id"
        },
        "name" : {
          "value" : "userId"
        }
      }
    },
    {
      "type" : "@util.request",
      "parameters" : {
        "body" : {
          "value" : ""
        },
        "url" : {
          "value" : "$\/ispeak\/tag\/list?userId=$",
          "tokens" : [
            {
              "location" : 25,
              "value" : "userId"
            },
            {
              "location" : 0,
              "value" : "api"
            }
          ]
        },
        "method" : 0,
        "headers" : {
          "value" : "{\n  \"Content-Type\": \"application\/json\"\n}"
        }
      }
    },
    {
      "type" : "@flow.javascript",
      "parameters" : {
        "script" : {
          "value" : "\/\/ Get input\nconst text = $actions.inputValue;\n\/\/ Resolve with output\nconst textJson = JSON.parse(text);\nconst selectData = []\nconst selectMap = {}\ntextJson.data.forEach(item=>{\n  selectData.push(item.name)\n  selectMap[item.name] = item._id\n})\n$actions.setVar(\"selectMap\",selectMap)\n$actions.resolve(selectData.join(\"\\n\"));\n\n\/\/ Exception handling:\n\/\/  $actions.reject(\"Error\");\n\/\/  $actions.finish();"
        }
      }
    },
    {
      "type" : "@ui.menu",
      "parameters" : {
        "prompt" : {
          "value" : ""
        },
        "selectAllByDefault" : false,
        "multiValue" : false,
        "lines" : {
          "value" : "$",
          "tokens" : [
            {
              "location" : 0,
              "value" : "@input"
            }
          ]
        }
      }
    },
    {
      "type" : "@flow.set-variable",
      "parameters" : {
        "value" : {
          "value" : "$",
          "tokens" : [
            {
              "location" : 0,
              "value" : "@input"
            }
          ]
        },
        "name" : {
          "value" : "selectTag"
        }
      }
    },
    {
      "type" : "@flow.javascript",
      "parameters" : {
        "script" : {
          "value" : "\/\/ Get input\nconst text = $actions.inputValue;\nconst selectMap = $actions.getVar(\"selectMap\")\n$actions.setVar(\"tag\",selectMap[text])\n\/\/ Resolve with output\n$actions.resolve(selectMap[text]);\n\n\/\/ Exception handling:\n\/\/  $actions.reject(\"Error\");\n\/\/  $actions.finish();"
        }
      }
    },
    {
      "type" : "@ui.menu",
      "parameters" : {
        "prompt" : {
          "value" : "选择可见类型"
        },
        "selectAllByDefault" : false,
        "multiValue" : false,
        "lines" : {
          "value" : "公开\n登录可见\n仅自己可见"
        }
      }
    },
    {
      "type" : "@flow.set-variable",
      "parameters" : {
        "value" : {
          "value" : "$",
          "tokens" : [
            {
              "location" : 0,
              "value" : "@input"
            }
          ]
        },
        "name" : {
          "value" : "selectType"
        }
      }
    },
    {
      "type" : "@flow.javascript",
      "parameters" : {
        "script" : {
          "value" : "\/\/ Get input\nconst text = $actions.inputValue;\n\nconst typeMap = {\n  \"公开\":\"0\",\n  \"登录可见\":\"1\",\n  \"仅自己可见\":\"2\",\n}\n$actions.setVar(\"type\",typeMap[text])\n\/\/ Resolve with output\n$actions.resolve(typeMap[text]);\n\n\/\/ Exception handling:\n\/\/  $actions.reject(\"Error\");\n\/\/  $actions.finish();"
        }
      }
    },
    {
      "type" : "@ui.render-text",
      "parameters" : {
        "title" : {
          "value" : ""
        },
        "fullScreen" : false,
        "text" : {
          "value" : "标签：$\n可见度：$\n内容：$",
          "tokens" : [
            {
              "location" : 14,
              "value" : "content"
            },
            {
              "location" : 9,
              "value" : "selectType"
            },
            {
              "location" : 3,
              "value" : "selectTag"
            }
          ]
        }
      }
    },
    {
      "type" : "@ui.confirm",
      "parameters" : {
        "text" : {
          "value" : "是否确认"
        }
      }
    },
    {
      "type" : "@flow.javascript",
      "parameters" : {
        "script" : {
          "value" : "const api = $actions.getVar(\"api\")\nconst tag = $actions.getVar(\"tag\")\nconst content = $actions.getVar(\"content\")\nconst type = $actions.getVar(\"type\")\nconst token = $actions.getVar(\"token\")\nconst obj = {\n    type:type,\n    tag:tag,\n    content:content,\n    token:token\n  }\n  $actions.resolve(JSON.stringify(obj))"
        }
      }
    },
    {
      "type" : "@util.request",
      "parameters" : {
        "body" : {
          "value" : "$",
          "tokens" : [
            {
              "location" : 0,
              "value" : "@input"
            }
          ]
        },
        "url" : {
          "value" : "$\/ispeak\/addByToken",
          "tokens" : [
            {
              "location" : 0,
              "value" : "api"
            }
          ]
        },
        "method" : 1,
        "headers" : {
          "value" : "{\n  \"Content-Type\": \"application\/json\"\n}"
        }
      }
    }
  ],
  "buildVersion" : 1,
  "name" : "将文本发送到speak",
  "clientMinVersion" : 1,
  "summary" : "",
  "icon" : {
    "glyph" : "wand.and.stars",
    "color" : "#FE824B"
  },
  "clientVersion" : 722
}
```



## Utools 发送
utools发送依赖于插件快捷命令

![image-20220227140556245](https://file.acs.pw/picGo/2022/02/27/20220227140556.png)

参考代码

```javascript
const axios = require('axios')
const api = '你的api地址'
const token = '你的token'
const userId = '你的用户id'

const params = {
  token,
  userId,
  content: `{{subinput}}`
}
const tagList = []
const typeList = [
  { title: '公开显示', description: '0' },
  { title: '登录显示', description: '1' },
  { title: '仅自己显示', description: '2' }
]
const showCommentList = [
  { title: '允许评论', description: '1' },
  { title: '不允许评论', description: '0' }
]
async function main() {
  const list = await getTagList()
  if (list.code === 0) {
    list.data.forEach((tag) => {
      tagList.push({
        title: tag.name,
        description: tag._id
      })
    })
  } else {
    quickcommand.showMessageBox('获取标签失败', 'fail')
  }
  const tag = await userSelect(tagList)
  const type = await userSelect(typeList)
  const showComment = await userSelect(showCommentList)
  const sendResult = await sendBiuBiu({ tag, type, ...params })
  if (sendResult.code === 0) {
    quickcommand.showMessageBox('发送成功')
  } else {
    console.log(sendResult)
    quickcommand.showMessageBox(sendResult.message, 'fail')
  }
}

function userSelect(optionsList) {
  return new Promise((resolve) => {
    quickcommand
      .showSelectList(optionsList, { optionType: 'json' })
      .then((choise) => {
        resolve(choise.description)
      })
  })
}

function getTagList() {
  return new Promise((resolve, reject) => {
    axios
      .get(api + '/ispeak/tag/list', {
        params: {
          userId
        }
      })
      .then((result) => {
        resolve(result.data)
      })
      .catch((e) => {
        reject()
      })
  })
}

async function sendBiuBiu(obj) {
  const { data } = await axios.post(api + '/ispeak/addByToken', obj)
  return data
}

// quickcommand.showMessageBox('success')
main()

```

