import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId(),
      ref: "book_category",
    },
    price: {
      type: String,
      default: 0,
    },
    poster: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    book: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const bookModel = model("book", bookSchema);
export default bookModel;
