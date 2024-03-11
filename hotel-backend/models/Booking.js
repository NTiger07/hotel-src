const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  room_number: { type: Number, ref: "User", required: true, unique: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Booking", BookingSchema);
