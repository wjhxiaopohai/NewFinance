//首页模块  ==》 动态数据
//引入express模块
const express = require("express");

//引入pool.js数据库连接池
let pool = require("../pool.js");

//创建路由器对象
let router = express.Router();

//添加接口
//接口1  加载没有图片的数据 /notImg  GET  记得展示的文章是否通过审查 ==>"1" 审查通过(0：审核中。2：审核不通过)
router.get("/notImg", function (req, res) {
    var sql = "select * from article where img_url='' or img_url is null and a_check=1  order by pubdate desc";
    pool.query(sql, (err, result) => {
        if (result.length > 0) {
            console.log(result);
            res.send(result);
        } else {
            console.log("请求没有图片的数据失败！");
            res.send({ status: 404, msg: "not img!" });
        }
    });
});


//接口2  加载含图片的数据(首次加载12条数据) /has_img   GET  记得展示的文章是否通过审查 ==>"1" 审查通过(0：审核中。2：审核不通过)
router.get("/hasImg", function (req, res) {
    var sql = "select * from article where img_url!='' and a_check=1  order by pubdate desc limit 0,12";
    pool.query(sql, (err, result) => {
        if (result.length > 0) {
            console.log(result);
            res.send(result);
        } else {
            console.log("请求包含图片的数据失败！");
            res.send({ status: 404, msg: "not newsImg!" });
        }
    });
});



//接口3   首页搜索框(搜索标题)  /index_search   GET   模糊搜索"关键词"【标题，或者作者名字包含该“关键词”】
router.get("/index_search", function (req, res) {
    var obj = req.query;
    //console.log(obj);
    var searchValue = obj.searchValue;
    var sql = "select * from article where (title like ? or writer like ?) and a_check=1 order by pubdate desc";
    pool.query(sql, ["%" + searchValue + "%", "%" + searchValue + "%"], function (err, result) {
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ status: 404, msg: 0 });
        }
    });
});


//接口4: 首页 “更多” 获取不同类型的数据  "/index_type"  GET
router.get("/index_type", (req, res) => {
    var obj = req.query;
    var sorts = obj.sorts;
    console.log(sorts);
    var sql = "select * from article where sorts = ? order by pubdate desc";
    pool.query(sql, [sorts], (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ msg: 0 })
        }

    })
})


//接口5  加载含图片的数据(首次加载12条数据，这次加载全部)   http://127.0.0.1:8080/comment/hasImgMore
router.get("/hasImgMore", function (req, res) {
    var sql = "select * from article where img_url!='' and a_check=1  order by pubdate desc";
    pool.query(sql, (err, result) => {
        if (result.length > 0) {
            console.log(result);
            res.send(result);
        } else {
            console.log("请求包含图片的数据失败！");
            res.send({ status: 404, msg: "not newsImg!" });
        }
    });
});



//接口6



//导出user.js路由器对象
module.exports = router;
















