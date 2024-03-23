const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking")

// @desc     Landing page
// @route    GET  "/"

router.get("/", (req, res) => {
  res.send("Welcome to Hotel");
});





module.exports = router;
