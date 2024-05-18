const mongoose = require("mongoose");
const config = require("../config/config");

async function connect() {
  try {
    console.log("dbConnect");
    await mongoose.connect(config.dbUrl, { authSource: "admin" });
  } catch (error) {
    console.log("dbDisConnect");
    throw new Error(error.message);
  }
}
module.exports = connect;
