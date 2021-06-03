const dbg = require("debug")("development");
const express = require("express");
const router = express.Router();
const { signup } = require("../controller/user.js");

router.post("/signup", signup);

router.post("/signin", function (req, res) {
  res.status(200).json({ message: req.body });
});

module.exports = router;
