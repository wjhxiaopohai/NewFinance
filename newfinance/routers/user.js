//用户模块
//引入express模块
const express = require("express");

//引入pool.js数据库连接池
let pool = require("../pool.js");

//创建路由器对象
let router = express.Router();

//添加接口
//接口1  注册接口（发送短信） "/user_reg" post


//接口2  登录接口  "/user_login"  get
router.get("/user_login", function (req, res) {
    var obj = req.query;
    //"账号" 或 "邮箱"
    var $user = obj.user;
    //“密码”
    var $pwd = obj.pwd;

    console.log(obj);
    //console.log(typeof(obj));
    console.log("账号:" + $user);
    console.log("密码:" + $pwd);
    //res.send({msg:"响应的数据：666"});

    //验证账号密码  与 数据库数据的比较
    pool.query("select * from user where (phone=? or email=?) and upwd=?", [$user, $user, $pwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            console.log("登录成功！");
            console.log(result)
            res.send(result);
            ////账号密码正确时，判断该账号是否被冻结【本方法：已在前端验证冻结：前端根据响应的is_freeze的值进行判断，此处省略。问题：缺陷：若在前端被人修改，那还是会进去登录页的】
            //if(result[0]["is_freeze"] == "1"){
            //    console.log("该账号被冻结，登录失败！");
            //    res.send({is_freeze:1});
            //}else{
            //    console.log("登录成功！");
            //    console.log(result);
            //    //console.log("冻结状态："+result[0]["is_freeze"]);
            //    //console.log("冻结状态："+result[0].is_freeze);
            //    //登录成功，url重定向。
            //    res.send(result);

            //待参考方法一：登录成功，url重定向。（此处难题已被解决，
            //无需再考虑）
        } else {
            console.log("登录失败！");
            res.send({ msg: 0 });
        }
    })
});


//接口3：  用户发表“新鲜事”； "user_send"  POST
router.post("/user_send", (req, res) => {
    //默认：审查状态、种类为："其他"
    var obj = req.body;

    var title = obj.title;
    var dateTime = obj.dateTime;
    var uname = obj.uname;
    var a_check = 1;
    var sorts = "其他";
    console.log(obj);
    var sql = "insert into article(writer,title,pubdate,a_check,sorts) values(?,?,?,?,?)";
    pool.query(sql, [uname, title, dateTime, a_check, sorts], (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result.affectedRows > 0) {
            res.send({ msg: 1 });
        } else {
            res.send({ msg: 0 })
        }
    })
})


//接口4  获取用户信息 /user_info   
router.get("/user_info", (req, res) => {
    var obj = req.query;
    var uid = obj.uid;
    let sql = "select * from user where u_id=?";
    pool.query(sql, [uid], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            console.log("获取用户数据成功");
            res.send({ code: 1, msg: "成功", result: result });
        } else {
            console.log("获取用户数据失败");
            res.send({ code: -1, msg: "失败" });
        }
    })
})



//接口5  用户获取自己发布的新鲜事 user_article
router.get("/user_article", (req, res) => {
    var obj = req.query;
    var uname = obj.uname;
    //	console.log(uname);
    let sql = "select * from article where writer=? order by pubdate desc";
    pool.query(sql, [uname], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            console.log("用户查询自己说说成功");
            res.send({ result: result });
        }
    })
})


//接口6



//导出user.js路由器对象
module.exports = router;
















