const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role_id: {
      type: Number,
      default: 1,
    },
    status_active: {
      type: Boolean,
      default: false,
    },
    company_id: {
      type: Number,
      default: 1,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
    deleted_at: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "users" }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
