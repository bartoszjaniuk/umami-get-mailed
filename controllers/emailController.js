const AppError = require("../utils/appError");
const handleSendEmail = require("../utils/handleSendEmail");

exports.sendEmail = (req, res, next) => {
  console.log(req.body, "req.body");
  try {
    handleSendEmail({
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    res.status(200).json({
      status: "success",
      message: "Mail został wysłany",
    });
  } catch (err) {
    console.log({ err });
    return next(
      new AppError(
        "Podczas wysyłania wiadomości wystąpił błąd. Spróbuj ponownie później!"
      ),
      500
    );
  }
};
