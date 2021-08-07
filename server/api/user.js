const getConnection = require("../db");
const express = require("express");
const router = express.Router();
// 路由
router.get("/list", (req, res) => {
  const sql = "select * from user";
  getConnection(sql, function (err, result) {
    if (err) {
      console.log("err", err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  });
});

const jsonWrite = function (res, ret) {
  if (typeof ret === "undefined") {
    res.json({
      code: "1",
      msg: "操作失败",
    });
  } else {
    res.json({
      code: 200,
      msg: "success",
      data: ret,
    });
  }
};

module.exports = router;
