import express from "express";
import { handleGetAllBook } from "../controllers/book.controllers.js";

const routes = express.Router();

routes.get("/", handleGetAllBook);

export default routes;
