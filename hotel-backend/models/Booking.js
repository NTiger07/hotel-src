const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  client_name: { type: String, required: true },
  room_number: { type: Number, required: true, unique: false },
  checkInDate: { type: String, required: true },
  checkOutDate: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed", "in-progress", "cancelled"],
    default: "pending"
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
