# kkapi 环境变量



| 是否必填 |         名称         |         说明          |                          示例                          |
| :------: | :------------------: | :-------------------: | :----------------------------------------------------: |
|    ✔     |     DATABASE_URL     |   mongoDB链接字符串   | `mongodb://127.0.0.1:27017/kkpaiopen?authSource=admin` |
|    ✔     |    DATABASE_USER     |     mongoDB用户名     |                         `root`                         |
|    ✔     |  DATABASE_PASSWORD   |    mongoDB用户密码    |                         `root`                         |
|    ✔     |      SECRETKEY       | jwt加密字符串(随意写) |               `xxxxxx`（任意字母+数字）                |
|          |   GITHUB_CLIENT_ID   |   GitHub Client ID    |                 `Iv1.1a4e5a689816a636`                 |
|          | GITHUB_CLIENT_SECRET | GitHub Client secrets |                    `*****e07ab369`                     |
|          |         PORT         |       启动端口        |         3000，默认为3000。vercel部署无需此参数         |

