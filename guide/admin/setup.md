---
icon: code
category:
  - 快速开始
isOriginal: true
update: 2022-02-27 09:35:00
title: kkapi后台配置
---

## 介绍

kkapi后台配置是基于[vben](https://github.com/vbenjs/vue-vben-admin)开发的后台管理。

## 快速开始

:::warning 注意

由于构建kkadmin时部分依赖文件需要nodejs16及以上版本才可以安装，因此不能将源代码扔给vercel进行构建。

所以只能够利用GitHub actions构建完成后将产物扔给vercel进行使用

:::

## Vercel部署

vercel部署依赖于GitHub actions的构建。

1. 进入[kkadmin-open](https://github.com/kkfive/kkadmin-open/)项目，点击fork

2. 添加环境变量

   环境变量参考[环境变量](/reference/kkadmin/environment.html)

   ![image-20220227110950146](https://file.acs.pw/picGo/2022/02/27/20220227110957.png)

3. 打开actions的执行

   ![image-20220227111040595](https://file.acs.pw/picGo/2022/02/27/20220227111040.png)

   然后随便编辑一个文件并推送，触发actions的构建

4. 在vercel中导入项目

   ![image-20220227111256034](https://file.acs.pw/picGo/2022/02/27/20220227111256.png)

5. 修改部署分支为vercel

   在当前url后添加`/tree/vercel`，例如

   `https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2Fkkfive%2Fkkadmin-open/tree/vercel`

   然后点击部署即可

6. 修改Production分支为vercel

   ![image-20220227112059984](https://file.acs.pw/picGo/2022/02/27/20220227112100.png)

7. 构建完成后即可打开网址，测试是否可以正常使用。

   ![image-20220227112544417](https://file.acs.pw/picGo/2022/02/27/20220227112544.png)



## CloudFlare Pages部署

::: note 注意

如果你已经在GitHub actions部署了，那么cf pages部署时也可以选择vercel进行部署。也可以使用主干分支进行打包部署。

接下来的教程以使用cf pages构建为例介绍

:::



1. 导入项目

   进入[cf pages](https://dash.cloudflare.com/)选择项目并导入

   ![image-20220227112859653](https://file.acs.pw/picGo/2022/02/27/20220227112859.png)

2. 配置环境变量和打包命令

   环境变量参考[环境变量](/reference/kkadmin/environment.html)

   ![image-20220227113526292](https://file.acs.pw/picGo/2022/02/27/20220227113526.png)

3. 等待构建完成后即可

   ![image-20220227114643211](https://file.acs.pw/picGo/2022/02/27/20220227114643.png)



## 其他

其他环境部署基本可以直接使用GitHub构建后的vercel进行，毕竟只是HTML
