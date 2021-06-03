const dbg = require("debug")("development");
const User = require("../models/user.js");

module.exports.signup = function (req, res) {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        message: "user already registered",
      });
    }
  });
  const { firstName, lastName, email, username, password } = req.body;
  const _user = new User({ firstName, lastName, email, username, password });
  dbg("this is body", _user.fullName);
  _user.save((err, user) => {
    if (err)
      return res.status(400).json({
        messsage: "something went wrong",
      });
    if (user)
      return res.status(200).json({
        messsage: "registered successfully",
        user,
      });
  });
};
