require("dotenv").config("../.env");
const mongoUrl = process.env.mongoUrl;

module.exports = {
  dbUrl: mongoUrl,
};
