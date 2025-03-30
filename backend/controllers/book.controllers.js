import bookModel from "../models/book.model.js";
import CustomError from "../utils/customError.js";

export const handleGetAllBook = async (req, res, next) => {
  try {
    const books = await bookModel.find().populate("category", "name");

    if (books.length == 0) {
      return next(new CustomError("Books not found", 404));
    }

    return res.status(200).json({
      message: "Get all book successfully",
      data: books,
      isSuccess: true,
      isError: false,
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    next("Internal server error", 500);
  }
};
