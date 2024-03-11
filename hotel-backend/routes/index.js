const express = require("express");
const router = express.Router();

// @desc     Login/Landin page
// @route    GET  "/"

router.get("/", (req, res) => {
  res.send("Welcome to Hotel");
});



module.exports = router;
