const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Room = require("../models/Room");

// async function updateRoomAvailability() {
//   try {
//     const currentTime = new Date();

//     const activeBookings = await Booking.find({
//       checkInDate: { $lte: currentTime },
//       checkOutDate: { $gte: currentTime },
//     });

//     for (const booking of activeBookings) {
//       await Booking.findOneAndUpdate(
//         {
//           _id: booking._id,
//         },
//         { status: "in-progress" }
//       );
//       await Room.findOneAndUpdate(
//         { roomNumber: booking.room_number },
//         { status: "occupied" }
//       );
//       console.log("Updated booking " + booking._id);
//     }

//     const endedBookings = await Booking.find({
//       checkOutDate: { $lt: currentTime },
//     });

//     for (const booking of endedBookings) {
//       await Booking.findOneAndUpdate(
//         {
//           _id: booking._id,
//         },
//         { status: "completed" }
//       );
//       await Room.findOneAndUpdate(
//         { roomNumber: booking.room_number },
//         { status: "available" }
//       );
//       console.log("Updated booking " + booking._id);
//     }
//   } catch (error) {
//     console.error("Error updating room availability:", error);
//   }
// }

// setInterval(updateRoomAvailability, 60000);

// @desc     Add Booking
// @route    POST  "/bookings/add"

router.post("/add", async (req, res) => {
  try {
    await Booking.create(req.body);
    await Room.findOneAndUpdate(
      {
        roomNumber: req.body.room_number,
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
    const bookings = await Booking.find();
    const bookingsWithRooms = [];
    for (const booking of bookings) {
      const room = await Room.findOne({ roomNumber: booking.room_number });
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
      const room = await Room.findOne({ roomNumber: booking.room_number });
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
        roomNumber: req.body.room_number,
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
