const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
// const passport = require("passport");
// const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);
const connectDB = require("./config/db");
// const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config/config.env" });
// require("./config/passport")(passport); // Passport config
const PORT = process.env.PORT || 3000;

connectDB();
const app = express();

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


app.listen(
  PORT,
  console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode`)
);
