# kkapi后台配置

## 介绍

kkapi 后台配置是基于[vben](https://github.com/vbenjs/vue-vben-admin)开发的后台管理。

## 快速开始

:::warning 注意

由于构建 kkadmin 时部分依赖文件需要 nodejs16 及以上版本才可以安装，因此不能将源代码扔给 vercel 进行构建。

所以只能够利用 GitHub actions 构建完成后将产物扔给 vercel 进行使用

:::

:::success 说明

以下部署姿势你只需要任选其一即可，无需全部部署。

:::

## 第一种部署姿势：Vercel 部署

vercel 部署依赖于 GitHub actions 的构建。

1. 进入[kkadmin-open](https://github.com/kkfive/kkadmin-open/)项目，点击 fork

2. 添加环境变量

   环境变量参考[环境变量](/reference/kkadmin/environment.html)

   ![image-20220227110950146](https://file.acs.pw/picGo/2022/02/27/20220227110957.png)

3. 打开 actions 的执行

   ![image-20220227111040595](https://file.acs.pw/picGo/2022/02/27/20220227111040.png)

   然后随便编辑一个文件并推送，触发 actions 的构建

4. 在 vercel 中导入项目

   ![image-20220227111256034](https://file.acs.pw/picGo/2022/02/27/20220227111256.png)

5. 修改部署分支为 vercel

   在当前 url 后添加`/tree/vercel`，例如

   `https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2Fkkfive%2Fkkadmin-open/tree/vercel`

   然后点击部署即可

6. 修改 Production 分支为 vercel

   ![image-20220227112059984](https://file.acs.pw/picGo/2022/02/27/20220227112100.png)

7. 构建完成后即可打开网址，测试是否可以正常使用。

   ![image-20220227112544417](https://file.acs.pw/picGo/2022/02/27/20220227112544.png)

## 第二种部署姿势：CloudFlare Pages 部署

::: note 注意

如果你已经在 GitHub actions 部署了，那么 cf pages 部署时也可以选择 vercel 进行部署。也可以使用主干分支进行打包部署。

接下来的教程以使用 cf pages 构建为例介绍

:::

1. 导入项目

   进入[cf pages](https://dash.cloudflare.com/)选择项目并导入

   ![image-20220227112859653](https://file.acs.pw/picGo/2022/02/27/20220227112859.png)

2. 配置环境变量和打包命令

   环境变量参考[环境变量](/reference/kkadmin/environment.html)

   ![image-20220227113526292](https://file.acs.pw/picGo/2022/02/27/20220227113526.png)

3. 等待构建完成后即可

   ![image-20220227114643211](https://file.acs.pw/picGo/2022/02/27/20220227114643.png)

## 其他部署姿势

其他环境部署基本可以直接使用 GitHub 构建后的 vercel 进行，毕竟只是 HTML
