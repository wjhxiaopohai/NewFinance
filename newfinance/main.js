//搭建服务器
//引入expres
const express = require("express");


//引入user.js模块
let userRouter = require("./routers/user.js");
//引入comment.js模块 ==> 首页加载资源的接口
let commentRouter = require("./routers/comment.js");
//引入发送短信的第三方的文件MainSender.js文件


//引入第三方模块body-parser中间件
let bodyParser = require("body-parser");

//创建web服务器
let app = express();

//设置监听号
app.listen(8080, () => {
	console.log("http://127.0.0.1:8080...")
});

//托管静态资源  到public目录
app.use(express.static("public"));

//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));


//挂载user.js路由器对象到web服务器  访问时多添加/user
app.use("/user", userRouter);
//挂载comment.js路由器对象到web服务器，访问时多加/comment
app.use("/comment", commentRouter);



















