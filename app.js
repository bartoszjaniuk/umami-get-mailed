const express = require("express");
const emailRouter = require("./routes/emailRoutes");
const appRouter = require("./routes/appRoutes");
const AppError = require("./utils/appError");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/email", emailRouter);
app.use("/api/v1/app", appRouter);



app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server.`, 404));
});

module.exports = app;
