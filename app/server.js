const app = require("./app");
const dayjs = require("dayjs");
const runningOn = dayjs().format("YYYY-MM-DD HH:mm:ss");
require("dotenv").config("../.env");

const port = process.env.PORT ? process.env.PORT : 3000;
app.listen(process.env.PORT, () => {
  console.log(`application listen on http://localhost:${port}`, runningOn);
});
