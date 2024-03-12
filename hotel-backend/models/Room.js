const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  roomNumber: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: ["available", "booked", "occupied"],
    default: "available",
  },
});

module.exports = mongoose.model("Room", RoomSchema);
