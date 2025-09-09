const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "reactnative_node",
  connectionLimit: 5,
});

// Kiểm tra kết nối ngay khi start
pool.getConnection()
  .then(conn => {
    console.log("✅ Kết nối MariaDB thành công!");
    conn.release();
  })
  .catch(err => {
    console.error("❌ Lỗi kết nối MariaDB:", err);
  });

module.exports = pool;