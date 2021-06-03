require("dotenv").config(); //this sets up the env variables from .env file in system so that we can use process.env to access the environmenmt variables
const dbg = require("debug")("development");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//database
const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb://${process.env.MONGO_DB_USER}:27017/${process.env.MONGO_DB_DATABASE}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then((res) => {
    dbg("\n\n\nconnection to mongod successful....");
  })
  .catch((err) => {
    dbg("error:", err);
  });

// const User = require("./models/user.js");
// const _user = new User({
//   firstName: "kartikeya",
//   lastName: "pise",
//   username: "karstiassadk",
//   email: "xyqsz@gmail.com",
//   hash_password: "mole",
//   role: "user",
//   contactNumber: "787897979",
//   pofilePicture: "dsaads",
// }).then((res) => {
//   dbg(res.hash_password, res.password, res.fullname);
// });
//======================================middlewares
app.use(bodyParser()); //middleware for json content parsing
const router_user = require("./routes/user.js");
app.use("/api", router_user);

//======================================middlewares

//======================================endpoints

//======================================endpoints
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
