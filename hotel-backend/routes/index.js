const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking")

// @desc     Landing page
// @route    GET  "/"

router.get("/", (req, res) => {
  res.send("Welcome to Hotel");
});


const updateStatus = async () => {
  const currentDate = new Date()
  await Booking.updateMany({ // Pending bookings
    status: "pending",
    checkInDate: { $lte: currentDate },
  }, {status: "in-progress"});

  await Booking.updateMany({
    status: "in-progress",
    checkOutDate: { $lte: currentDate },
  }, {status: "completed"});
}

setInterval(updateStatus, 1000)


module.exports = router;
