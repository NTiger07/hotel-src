const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  client_name: { type: String, required: true },
  room_number: { type: Number, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    required: true,
    enum: ["pending", "completed", "in-progress", "cancelled"],
    default: "pending"
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
