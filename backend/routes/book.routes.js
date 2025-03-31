import express from "express";
import {
  handleCreateBook,
  handleGetAllBook,
  handleGetSingleBook,
} from "../controllers/book.controllers.js";

const router = express.Router();

router.get("/", handleGetAllBook);
router.get("/:book_id", handleGetSingleBook);
router.post("/create", handleCreateBook);

export default router;
