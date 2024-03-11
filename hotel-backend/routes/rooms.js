const express = require('express');
const router = express.Router();
const Room = require('../models/Room') 


// @desc     Add Room
// @route    POST  "/rooms/add"

router.post("/add",  async (req, res) => {
  try {
    await Room.create(req.body);
    res.send("Room Added")
    res.status(200)
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router