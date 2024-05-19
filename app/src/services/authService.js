const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const userSvc = require("./userService");
require("dotenv").config("../.env");

async function register(body) {
  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    let user = new User({
      ...body,
      password: hashedPassword,
    });

    user = await user.save();
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function login(payload) {
  const { username, password } = payload;
  const user = await userSvc.findUserBy("username", username);
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    // JWT authentication
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "24h" }
    );
    return { accessToken };
  } else {
    return { message: "Invalid username or password" };
  }
}

module.exports = {
  register,
  login,
};
