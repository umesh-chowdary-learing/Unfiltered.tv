const errorMiddleware = (err, req, res, next) => {
    // Log the error (could use a logging library here like winston or morgan)
    console.error(err);
  
    // Respond with a generic error message
    res.status(err.statusCode || 500).json({
      message: err.message || "Something went wrong!",
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
  };
  
  module.exports = errorMiddleware;
  