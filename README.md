# 文件说明

模仿“今日头条”网站的一个小Demo，后台用Node.js的express框架搭建的Web服务器。

## 步骤

### 1、数据库

1. 我使用的是XAMPP软件里自带的MySQL数据库，newFinance.sql是我创建的数据库脚本文件；
2. 进入数据库命令：mysql -uroot -p
3. 执行SQL脚本文件：source  再拖入newFinance.sql文件

### 2、下载package.json依赖包

1. cmd命令：cd进入newfinance目录
2. npm install

### 3、服务器运行步骤

1. cmd命令：cd进入newfinance目录
2. 执行命令：node  main.js

### 4.访问网址

打开浏览器，在url中输入http://127.0.0.1:8080/index.html，访问的是首页地址。



## 目录说明

- [ ] newfinance--总目录

- [ ] --public  -->静态资源

- [ ] --routers  -->路由接口

  --main.js  -->搭建服务器

- [ ] --pool.js  -->配置数据库

- [ ] newFinance.sql  -->数据库脚本

- [ ] package.json  -->依赖包