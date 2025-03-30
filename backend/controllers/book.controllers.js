import mongoose from "mongoose";
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
    next(new CustomError("Internal Server Error", 500));
  }
};

export const handleGetSingleBook = async (req, res, next) => {
  try {
    const { book_id } = req.params;

    if (!mongoose.isValidObjectId(book_id)) {
      return next(new CustomError("Invalid book id", 400));
    }

    const book = await bookModel.findById(book_id);

    if (!book) {
      return next(new CustomError("Book not found", 404));
    }

    return res.status(200).json({
      message: "Get book successfully",
      data: book,
      isSuccess: true,
      isError: false,
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    next(new CustomError("Internal Server Error", 500));
  }
};
