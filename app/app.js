const express = require("express");
const cors = require("cors");
const connectDB = require("./src/database");
const bodyParser = require("body-parser");

// routes
const routesv1 = require("./src/routes/v1routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();

app.use("/api/v1", routesv1);

app
  .route("*")
  .get((req, res) => {
    res.send("you're inside fallback route");
  })
  .post((req, res) => {
    res.send("you're inside fallback route");
  })
  .put((req, res) => {
    res.send("you're inside fallback route");
  })
  .delete((req, res) => {
    res.send("you're inside fallback route");
  });

module.exports = app;
