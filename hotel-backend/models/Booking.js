const mongoose = require('mongoose');

const BookingSchema = new Schema({
  roomNumber: { type: Number, required: true, unique: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Booking", ItemSchema);
