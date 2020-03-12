const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const createError = require('http-errors');
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const infoRouter = require("./routes/info");
const adminRouter = require("./routes/admin");
const authRouter = require("./routes/auth");
const trelloRouter = require("./test/auth/Trello/Trello");
const githubRouter = require("./test/auth/Github/Github");
const yammerRouter = require("./test/auth/Yammer/Yammer");
const twitchRouter = require("./test/auth/Twitch/Twitch");
const slackRouter = require("./test/auth/Slack/Slack");
const facebookRouter = require('./test/auth/Facebook/Facebook');

const reactionTrello = require("./reaction/trello");
const reactionGithub = require("./reaction/github");
const reactionSlack = require("./reaction/slack");
const weather = require("./test/weather/Weather");

const zapSaveRouter = require("./action/save");
const slackAction = require("./action/slack");
const initAction = require("./action/init");

const nasa = require("./test/weather/Nasa");

const timer = require("./test/weather/Timer");


const app = express();

app.use(cors());

dotenv.config();

// Mongoose connect

mongoose
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch(err => {
    console.log("Error while DB connecting");
    console.log(err);
  });

initAction();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/info", infoRouter);
app.use("/users", usersRouter);
app.use("/api/user", authRouter);
app.use("/link", trelloRouter);
app.use("/link", slackRouter);
app.use("/link", githubRouter);
app.use("/link", twitchRouter);
app.use("/link", yammerRouter);
app.use("/link", facebookRouter);
app.use("/reaction", reactionGithub);
app.use("/reaction", reactionSlack);
app.use("/reaction", reactionTrello);
app.use("/action", slackAction);
app.use("/zap", zapSaveRouter)
app.use("/widget", weather);

app.use("/widget", nasa);

app.use("/widget", timer);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
