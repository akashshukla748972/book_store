import express from "express";
import {
  handleCreateBook,
  handleGetAllBook,
  handleGetSingleBook,
} from "../controllers/book.controllers.js";

const routes = express.Router();

routes.get("/", handleGetAllBook);
routes.get("/:book_id", handleGetSingleBook);
routes.post("/create", handleCreateBook);

export default routes;
