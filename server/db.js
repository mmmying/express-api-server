var mysql = require("mysql");

const dbConfig = {
  mysql: {
    host: "localhost",
    user: "admin3",
    password: "123456",
    database: "management_db",
    port: "3306",
  },
};

// 连接数据库
const conn = mysql.createConnection(dbConfig.mysql);
conn.connect(function (err) {
  if (err) {
    console.log("[connect error]:" + err);
    return;
  }
  console.log("[connect succeed]");
});

module.exports = conn;
