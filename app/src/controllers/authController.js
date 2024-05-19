const authSvc = require("../services/authService");
const userSvc = require("../services/userService");

async function login(req, res) {
  const { username } = req.body;

  const findUser = await userSvc.findUserBy("username", username);
  if (findUser) {
    if (findUser.status_active) {
      const login = await authSvc.login(req.body);
      res.send(login);
    } else {
      return res.status(401).json({ message: "User not active" });
    }
  } else {
    return res.status(401).json({ message: "User not registered" });
  }
}

async function register(req, res) {
  const register = await authSvc.register(req.body);
  res.send(register);
}

module.exports = {
  login,
  register,
};
