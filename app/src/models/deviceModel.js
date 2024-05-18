const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deviceSchema = new Schema(
  {
    device_name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    hotel_id: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
  },
  { collection: "devices" }
);

const Device = mongoose.model("device", deviceSchema);

module.exports = Device;
