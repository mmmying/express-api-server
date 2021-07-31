var dbConfig = require("../db"); // 引入数据库配置
var express = require("express");
var router = express.Router();
var mysql = require("mysql");

// 连接数据库
var conn = mysql.createConnection(dbConfig.mysql);
conn.connect(function (err) {
  if (err) {
    console.log("[connect error]:" + err);
    return;
  }
  console.log("[connect succeed]");
});

// 路由
router.get("/list", (req, res) => {
  var sql = "select * from user";
  conn.query(sql, function (err, result) {
    if (err) {
      console.log("err", err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

var jsonWrite = function (res, ret) {
  if (typeof ret === "undefined") {
    res.json({
      code: "1",
      msg: "操作失败",
    });
  } else {
    res.json(ret);
  }
};

module.exports = router;
