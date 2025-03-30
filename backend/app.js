import express from "express";
import globalErrorHandler from "./middlewares/errorHandler.js";
import CustomError from "./utils/customError.js";

import bookRouts from "./routes/book.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books/", bookRouts);
app.use("*", (req, res, next) => {
  next(new CustomError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
