import express from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/errorHandler.js";
import CustomError from "./utils/customError.js";
import morgan from "morgan";

import bookRoutes from "./routes/book.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/books/", bookRoutes);
app.use("/api/users/", userRoutes);
app.use("*", (req, res, next) => {
  next(new CustomError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
