const express = require("express");
const emailRouter = require("./routes/emailRoutes");
const AppError = require("./utils/appError");
const bodyParser = require("body-parser");
const cors = require("cors");
const schedule = require("node-schedule");
const ping = require("ping");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/email", emailRouter);

const job = schedule.scheduleJob("*/1 * * * *", async function (fireDate) {
  const result = await ping.promise.probe("www.dietetyk-umami.pl", {
    timeout: 10,
    extra: ["-i", "2"],
  });

  console.log(result);
});

app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server.`, 404));
});

module.exports = app;
