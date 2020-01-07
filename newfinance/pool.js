//创建连接池
//引入mysql模块
const mysql = require("mysql");

//创建连接池对象
let pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "newFinance",
  connectionLimit: 20
});

//导入连接池对象
module.exports = pool;









