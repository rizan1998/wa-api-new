const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deviceSchema = new Schema(
  {
    device_name: {
      type: String,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
    whatsapp_id: {
      type: String,
      required: true,
    },
    status_active: {
      type: Boolean,
      required: true,
    },
  },
  { collection: "devices" }
);

const Device = mongoose.model("device", deviceSchema);

module.exports = Device;
