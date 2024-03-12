const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  room_number: { type: Number, ref: "User", required: true, unique: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", BookingSchema);
