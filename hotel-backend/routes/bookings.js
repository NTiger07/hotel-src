const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Room = require("../models/Room");
const { truncate } = require("fs-extra");

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


// @desc     Get all Bookings
// @route    GET  "/bookings/all"

router.get("/all", async (req, res) => {
  try {
    const bookings = await Booking.find()
    res.send(bookings);
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
      room_number: req.params.room_number
    })
    res.send(bookings);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});




// @desc     Cnacel Booking
// @route    POST  "/bookings/cancel"

router.post("/cancel/:room_number", async (req, res) => {
  try {
    await Booking.findOneAndDelete({
      room_number: req.params.room_number
    })
    await Room.findOneAndUpdate(
      {
        roomNumber: req.body.room_number,
      },
      { availability: true },
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
