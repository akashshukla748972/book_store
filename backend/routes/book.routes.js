import express from "express";
import {
  handleGetAllBook,
  handleGetSingleBook,
} from "../controllers/book.controllers.js";

const routes = express.Router();

routes.get("/", handleGetAllBook);
routes.get("/:book_id", handleGetSingleBook);

export default routes;

