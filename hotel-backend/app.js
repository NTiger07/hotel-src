const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 3000;

connectDB();
const app = express();

// Body Parser
app.use(express.urlencoded({ extended: false}));
app.use(express.json())

app.options("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", [
    "X-Requested-With",
    "content-type",
    "credentials",
  ]);
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.status(200);
  next();
});


if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}


// Routes
app.use("/", require("./routes/index"))
app.use("/rooms", require("./routes/rooms"))
app.use("/bookings", require("./routes/bookings"))

app.listen(
  PORT,
  console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode`)
);
