const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require('./config/keys_development').mongoURI;
const users = require("./routes/api/users");
const comments = require('./routes/api/comments');
const games = require("./routes/api/games");
const User = require("./models/User");
const bodyParser = require("body-parser");
const passport = require("passport");
const getGameOdds = require('./util/odds');
const getGameResults = require('./util/games');
const Game = require('./models/Game');
const bets = require('./routes/api/bets');
const path = require('path');
const resolveBets = require('./util/resolveBets');
const lockBets = require('./util/lockBets');
const router = require('express').Router();
const cors = require("cors");
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin: "*",
}));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(express.static("frontend/build"));


const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// Routes
app.use("/api/users", users);
app.use("/api/games", games);
app.use("/api/bets", bets);
app.use("/api/comments", comments);


app.get("/", (req, res) => res.send("Hello World!!"));

const port = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });


});
getGameResults(); // Move this line inside the connectDB().then() block