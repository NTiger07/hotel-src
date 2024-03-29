const express = require("express");
const router = express.Router();
const Room = require("../models/Room");

// @desc     Add Room
// @route    POST  "/rooms/add"

router.post("/add", async (req, res) => {
  try {
    const roomLength = await Room.find();
    const newRoomData = { ...req.body, room_number: roomLength.length + 1 };
    await Room.create(newRoomData);
    res.send("Room Added");
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// @desc     Delete Room
// @route    POST  "/rooms/add"

// router.post("/delete/:room_number", async (req, res) => {
//   try {
//     await Room.findOneAndDelete({
//       room_number: req.params.room_number,
//     });
//     res.send("Room Deleted");
//     res.status(200);
//   } catch (error) {
//     console.error(error);
//     res.status(500);
//   }
// });

// @desc     Get all rooms
// @route    GET  "/rooms/all"

router.get("/all", async (req, res) => {
  try {
    let query = {};
    if (req.query.room_type) {
      query.room_type = req.query.room_type;
    }
    if (req.query.room_name) {
      query.room_name = { $regex: new RegExp(req.query.room_name, "i") };
    }
    const rooms = await Room.find(query).sort({room_number: "asc"});
    res.send(rooms);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

// @desc     Get number of rooms
// @route    GET  "/rooms/meta"

router.get("/meta", async (req, res) => {
  try {
    const rooms = await Room.find();
    const bookings = await Booking.find();
    const meta = { rooms: rooms.length, bookings: bookings.length };
    res.send(meta);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;
