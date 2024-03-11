const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Room = require("../models/Room");

// @desc     Add Booking
// @route    POST  "/bookings/add"

router.post("/add", async (req, res) => {
  try {
    await Booking.create(req.body);
    await Room.findOneAndUpdate(
      {
        roomNumber: req.body.room_number,
      },
      { availability: false },
      { new: true, runValidators: true }
    );
    res.send("Booking Added");
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;
