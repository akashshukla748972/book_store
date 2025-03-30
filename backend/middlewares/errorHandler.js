const globalErrorHandler = (err, req, res, next) => {
  console.error("ERROR 💥:", err);

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      message: err.message,
      status: err.status,
      isSuccess: false,
      isError: true,
    });
  }

  return res.status(500).json({
    message: "Something went wrong! Please try again later.",
    status: "error",
    isSuccess: false,
    isError: true,
  });
};

export default globalErrorHandler;
