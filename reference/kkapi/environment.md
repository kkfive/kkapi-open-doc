---
icon: code
category:
  - 参考
isOriginal: true
update: 2022-02-27 09:35:00
title: 环境变量
---



| 是否必填 |       名称        |       说明        |                          示例                          |
| :------: | :---------------: | :---------------: | :----------------------------------------------------: |
|    ✔     |   DATABASE_URL    | mongoDB链接字符串 | `mongodb://127.0.0.1:27017/kkpaiopen?authSource=admin` |
|    ✔     |   DATABASE_USER   |   mongoDB用户名   |                         `root`                         |
|    ✔     | DATABASE_PASSWORD |  mongoDB用户密码  |                         `root`                         |
|    ✔     |     SECRETKEY     |   jwt加密字符串   |                        `xxxxxx`                        |
|          |       PORT        |     启动端口      |         3000，默认为3000。vercel部署无需此参数         |

