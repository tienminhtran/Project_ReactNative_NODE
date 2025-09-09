const pool = require("../config/db");

exports.findUser = async (username, password) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT * FROM users WHERE username=? AND password=?",
      [username, password]
    );
    return rows.length > 0 ? rows[0] : null;
  } finally {
    if (conn) conn.release();
  }
};


exports.findAll = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT id, username FROM users");
    return rows;
  } finally {
    if (conn) conn.release();
  }
};
