const User = require("../models/user");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findUser(username, password);

  if (user) {
    res.json({ success: true, message: "Đăng nhập thành công", user });
  } else {
    res.status(401).json({ success: false, message: "Sai tài khoản hoặc mật khẩu" });
  }
};


exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ success: true, data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
};
