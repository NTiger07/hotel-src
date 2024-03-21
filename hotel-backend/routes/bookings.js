const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Room = require("../models/Room");


router.post("/add", async (req, res) => {
  try {
    await Booking.create(req.body);
    await Room.findOneAndUpdate(
      {
        room_number: req.body.room_number,
      },
      { status: "booked" },
      { new: true, runValidators: true }
    );
    res.send("Booking Added");
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// @desc     Get all Bookings
// @route    GET  "/bookings/all"

router.get("/all", async (req, res) => {
  try {
     let query = {};
     if (req.query.status) {
       query.status = req.query.status;
     }
     if (req.query.client_name) {
       query.client_name = { $regex: new RegExp(req.query.client_name, "i") };
     }
    const bookings = await Booking.find(query).sort({createdAt: "desc"});
    const bookingsWithRooms = [];
    for (const booking of bookings) {
      const room = await Room.findOne({ room_number: booking.room_number });
      if (room) {
        bookingsWithRooms.push({ booking, room });
      }
    }
    res.send(bookingsWithRooms);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// @desc     Get Booking history
// @route    GET  "/bookings/:room_number"

router.get("/:room_number", async (req, res) => {
  try {
    const bookings = await Booking.find({
      room_number: req.params.room_number,
    });
    const bookingsWithRooms = [];
    for (const booking of bookings) {
      const room = await Room.findOne({ room_number: booking.room_number });
      if (room) {
        bookingsWithRooms.push({ booking, room });
      }
    }
    res.send(bookingsWithRooms);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// @desc     Cancel Booking
// @route    POST  "/bookings/cancel"

router.post("/cancel/:booking_id", async (req, res) => {
  try {
    await Booking.findOneAndUpdate(
      {
        room_number: req.params.room_number,
      },
      { status: "cancelled" }
    );
    await Room.findOneAndUpdate(
      {
        room_number: req.body.room_number,
      },
      { status: "available" },
      { new: true, runValidators: true }
    );
    res.send("Booking Cancelled");
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;
