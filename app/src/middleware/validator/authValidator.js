const { body, validationResult } = require("express-validator");
const User = require("../../models/userModel");

const registrationValidator = [
  body("fullname").notEmpty().withMessage("Fullname is required"),
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required").bail().isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);

      const errorMessages = errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      }));
      return res.status(400).json({
        success: false,
        errors: errorMessages,
      });
    }

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        errors: [{ field: "username", message: "Username is already taken" }],
      });
    }

    next();
  },
];

const loginValidator = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required").bail().isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      }));
      return res.status(400).json({
        success: false,
        errors: errorMessages,
      });
    }
    next();
  },
];

module.exports = {
  registrationValidator,
  loginValidator,
};
