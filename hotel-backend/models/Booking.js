const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  client_name: { type: String, required: true },
  room_number: { type: Number, required: true, unique: true },
  // room_name: { type: String, required: false },
  // room_type: {
  //   type: String,
  //   enum: ["basic", "luxury", "family", "suite"],
  // },
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
