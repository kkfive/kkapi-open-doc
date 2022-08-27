# 配置数据库

::: info
此篇内容转载于[https://discuss.js.org/guide/Get-MongoDB-DataBase.html](https://discuss.js.org/guide/Get-MongoDB-DataBase.html)
:::

1. 注册[MongoDB](https://www.mongodb.com/cloud/atlas/register)账号，注册完成后会提示你创建一个组织，并且输入一个项目昵称，选择编程语言(不选也可以)，随后点击右下角的`Continue`(继续)，如果没有可以跟如下图执行，点击`Create an Organization`(创建组织)
   ![Organizations-Home](https://file.acs.pw/picGo/2022/02/26/20220226215556.png)
   ![Register-Organizations](https://file.acs.pw/picGo/2022/02/26/20220226215602.png)
   ![Create-Organization](https://file.acs.pw/picGo/2022/02/26/20220226215607.png)
   ![New-Project](https://file.acs.pw/picGo/2022/02/26/20220226215611.png)
   ![Project-Name](https://file.acs.pw/picGo/2022/02/26/20220226215614.png)
   ![Create-Project](https://file.acs.pw/picGo/2022/02/26/20220226215616.png)
   ![Build-Database](https://file.acs.pw/picGo/2022/02/26/20220226215619.png)
   ![Select-Free](https://file.acs.pw/picGo/2022/02/26/20220226215622.png)
   ![AWS-N.Virginia](https://file.acs.pw/picGo/2022/02/26/20220226215625.png)
2. 选择免费的共享数据库，随后会跳出选择地区(选择离你服务端近的即可)，点击`Create Cluster`创建
3. 随后您需要创建数据库用户，输入用户名和密码，继续向下滚动就是添加 IP 地址，最后点击下方的`Finish and Close`(完成并关闭)按钮

   ::: warning 注意
   服务器部署，则填服务器公网 IP

   `无服务器(ServerLess)`ServerLess 一般都是动态 IP，你无法得到一个固定 IP，我们建议填写`0.0.0.0`
   :::
   ![](https://file.acs.pw/picGo/2022/02/26/20220226215629.png)

4. 稍作等待创建好数据库即可，随后点击`Connect`(连接)，点击选择`Connect you application`(连接应用程序)，然后复制连接数据库字符串
   ::: warning 注意
   需要将字符串中的`<password>`替换为您在第三步创建的数据库用户密码，修改`myFirstDatabase`为你想要的数据库名称例如:`Discuss`
   :::
   ![](https://file.acs.pw/picGo/2022/02/26/20220226215632.png)
   ![](https://file.acs.pw/picGo/2022/02/26/20220226215635.png)
