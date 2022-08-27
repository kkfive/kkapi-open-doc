# 部署项目

## 获取源代码

进入[https://github.com/kkfive/kkapi-open](https://github.com/kkfive/kkapi-open)项目，点击右上角的 fork。*（方便的话可以顺手点个🌟star）*

接下来此项目将会同步到你的仓库中。

并在以下部署姿势中任选其一选择部署即可。

## 第一种部署姿势：Vercel 部署

1. 注册 Vercel 账号，推荐使用 GitHub 账户注册。

2. 进入[Vercel](https://vercel.com/new)，选择导入并找到刚刚 fork 的项目。

   ![](https://file.acs.pw/picGo/2022/02/27/20220227090529.png)

3. 点击导入后在 url 的末尾添加`/tree/vercel`表示不是 vercel 分支

   ![image-20220227090807694](https://file.acs.pw/picGo/2022/02/27/20220227090807.png)

   例如：

   `https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2Fkkfive%2Fkkapi-open/tree/vercel`

   输入完成后敲击回车。

   ![image-20220227090907597](https://file.acs.pw/picGo/2022/02/27/20220227090907.png)

4. 添加环境变量进行部署

   环境变量可能随项目的迭代而增加必填的环境变量，具体请参考[环境变量](/reference/kkapi/environment.html)

![image-20220227091033443](https://file.acs.pw/picGo/2022/02/27/20220227091033.png)5. 进入 vercel 设置，调整 production 为 vercel 分支

 ![image-20220227094416620](https://file.acs.pw/picGo/2022/02/27/20220227094416.png)

6. 查看部署

   ![](https://file.acs.pw/picGo/2022/02/27/20220227094537.png)

   如果你部署的环境不是 Production，那么点击旁边的`Promote to Production`将其发布到 Production 即可。

7. 初始化账户

   初始化账户在浏览器访问：`你的域名+/api/user/init?userName=xiaokang`即可初始化一个账户为`xiaokang`，密码为`123456`的账户。
   如果不指定用户名则创建一个账户为`admin`，密码为`123456`的账户。

   例如:

   `https://kkapi-open.vercel.app/api/user/init?userName=xiaokang`

## 第二种部署姿势：服务器部署

1. 克隆源代码

   `git clone https://ghproxy.com/https://github.com/kkfive/kkapi-open.git`

2. 安装依赖

   `yarn install`

   如果没有`yarn`则先允许`npm i yarn -g`进行安装

3. 安装 pm2

   `npm i pm2 -g`

4. 编译项目

   `yarn build`

5. 配置环境变量

   在项目目录新建文件`local.env`，将环境变量写入其中即可。例如：

   ```
   PORT=3000
   DATABASE_URL=mongodb://127.0.0.1:27017/kkpaiopen?authSource=admin
   DATABASE_USER=root
   DATABASE_PASSWORD=root
   # 加密密钥 测试
   SECRETKEY=xxxxxxxxxxxxxxx
   ```

   其中 PORT 表示启动的端口

6. 启动项目

   `pm2 start pm2.json`

   然后通过命令`curl http://127.0.0.1:3000/api/user/init`检查是否允许成功

   ![image-20220227101623911](https://file.acs.pw/picGo/2022/02/27/20220227101623.png)

7. 更新项目

   进入项目并执行一下命令

   ```bash
   git pull
   yarn build
   pm2 restart pm2.json
   ```

## 第三种部署姿势：docker 部署

:::warning 提示

撰写中

:::

## 密码丢失

如果密码不幸丢失了，那么手动链接数据库将其`password`字段改为`$2a$10$TVk79hQVVpmfu2BOupaIl.lw80Wlwvnpwl0oOjjLH180fi16F9p0K`即可重置密码为`123456`
![](https://file.acs.pw/2022/03/01/7d86163e1fa6d.png)



## GitHub 认证

此功能2022-03-13后更新，新增环境变量`GITHUB_CLIENT_SECRET`和`GITHUB_CLIENT_ID`。

获取方式参考：[GitHub相关操作](/guide/setup/github.html)
