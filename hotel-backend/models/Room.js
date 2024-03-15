const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  roomNumber: { type: Number, required: true, unique: true },
  room_name: { type: String, required: true },
  room_type: {
    type: String,
    enum: ["basic", "family", "luxury", "suite"],
  },
  price: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: ["available", "booked", "occupied"],
    default: "available",
  },
});

module.exports = mongoose.model("Room", RoomSchema);
