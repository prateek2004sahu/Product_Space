// Global Error Handler
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Sequelize validation error
  if (err.name === "SequelizeValidationError") {
    statusCode = 400;
    message = err.errors.map(e => e.message).join(", ");
  }

  // Sequelize unique constraint error
  if (err.name === "SequelizeUniqueConstraintError") {
    statusCode = 400;
    message = "Duplicate field value entered";
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired";
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;