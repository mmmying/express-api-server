var mysql = require("mysql");

const dbConfig = {
  host: "localhost",
  user: "admin3",
  password: "123456",
  database: "management_db",
  port: "3306",
  connectionLimit: 10,
};

// 连接数据库
let pool = mysql.createPool(dbConfig);
function getConnection(sql, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      throw err;
    }
    conn.query(sql, callback);
  });
}

module.exports = getConnection;
