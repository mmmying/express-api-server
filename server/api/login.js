var conn = require("../db");
var express = require("express");
var router = express.Router();

// 路由
router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  var sql = `select * from user where username='${username}' and password='${password}'`;
  conn.query(sql, function (err, result) {
    if (err) {
      res.json({
        code: 404,
        msg: "未知错误：" + err,
      });
    }
    if (result && result.length) {
      res.json({
        code: 200,
        msg: "登录成功",
      });
    } else {
      res.json({
        code: 1001,
        msg: "用户名或密码错误",
      });
    }
  });
});

module.exports = router;
