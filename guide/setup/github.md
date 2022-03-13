---
icon: code
category:
  - 快速开始
isOriginal: false
title: GitHub相关操作
---

## 说明

如果你正在使用ispeak，那么建议你参考本文创建GitHub app 并获取个人GitHub id。

当然如果你已经是大神，已经会这些操作，那么完全可以不看此篇短文。

## 创建app获取ID和secrets

1. 进入[GitHub个人设置页面](https://github.com/settings/profile) ，点击[Developer settings](https://github.com/settings/apps)，进行新增app

   ![image-20220313121053386](https://file.acs.pw/picGo/2022/03/13/20220313121100.png)

2. 填入相关信息，然后滑倒最下边点击创建

   ![image-20220313121311776](https://file.acs.pw/picGo/2022/03/13/20220313121311.png)

3. 查看id和生成密钥

   ![image-20220313121434450](https://file.acs.pw/picGo/2022/03/13/20220313121434.png)

   ![image-20220313121503280](https://file.acs.pw/picGo/2022/03/13/20220313121503.png)

   secrets需要复制并保存，因为如果遗忘，则只能生成新的

   

## 获取个人GitHub ID

这里的GitHub只的并不是GitHub用户名。

通过访问GitHub 接口:[https://api.github.com/users/\<Your UserName\>](https://api.github.com/users/kkfive)返回的内容中获取iD。

![image-20220313121930800](https://file.acs.pw/picGo/2022/03/13/20220313121930.png)

