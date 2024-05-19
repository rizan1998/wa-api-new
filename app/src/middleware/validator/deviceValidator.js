const { body, validationResult } = require("express-validator");
const Device = require("../../models/deviceModel");

const createDeviceValidator = [
  body("device_name").notEmpty().withMessage("Device name is required"),
  body("device_number").notEmpty().withMessage("Device number is required"),
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

    let number = req.body.device_number;
    number = number.replace(/^08/, "+62");
    console.log(number);

    const deviceNumber = await Device.findOne({ device_number: number });
    if (deviceNumber) {
      return res.status(400).json({
        success: false,
        errors: [{ field: "device_number", message: "number is already taken" }],
      });
    }

    next();
  },
];

module.exports = {
  createDeviceValidator,
};
