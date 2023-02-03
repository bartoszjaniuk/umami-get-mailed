const AppError = require("../utils/appError");

exports.initialize = (req, res, next) => {
  try {
    res.status(200).json({});
  } catch (err) {
    return next(
      new AppError(
        "Podczas wysyłania wiadomości wystąpił błąd. Spróbuj ponownie później!"
      ),
      500
    );
  }
};
