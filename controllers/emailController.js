const AppError = require("../utils/appError");
const handleSendEmail = require("../utils/handleSendEmail");

exports.sendEmail = (req, res, next) => {
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
    // res.status(400).json({
    //   status: "fail",
    //   message: "Nie udało się przesłać wiadomości. Spróbuj ponownie później.",
    // });

    return next(
      new AppError(
        "Podczas wysyłania wiadomości wystąpił błąd. Spróbuj ponownie później!"
      ),
      500
    );
  }
};
