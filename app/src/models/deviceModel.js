const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deviceSchema = new Schema(
  {
    device_name: {
      type: String,
      required: true,
    },
    device_number: {
      type: String,
      required: true,
    },
    device_code: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    status_active: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { collection: "devices" }
);

const Device = mongoose.model("device", deviceSchema);

module.exports = Device;
