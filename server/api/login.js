const getConnection = require("../db");
const express = require("express");
const router = express.Router();
const { generateToken } = require("../authorization");

// 路由
router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const token = generateToken({ username: username });
  const sql = `select * from user where username='${username}' and password='${password}'`;
  getConnection(sql, function (err, result) {
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
        data: { token },
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
