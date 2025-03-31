import express from "express";
import { handleUserRegister } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", handleUserRegister);

export default router;
