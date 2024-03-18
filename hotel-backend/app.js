const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const cors = require("cors");



dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 3000;

connectDB();
const app = express();

// Body Parser
app.use(express.urlencoded({ extended: false}));
app.use(express.json())

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "*",
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["X-Requested-With", "Content-Type", "Credentials"],
  })
);


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
