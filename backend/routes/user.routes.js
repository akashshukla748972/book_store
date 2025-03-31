import express from "express";
import {
  handleGetUserData,
  handleUserLogin,
  handleUserRegister,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", handleUserRegister);
router.post("/login", handleUserLogin);
router.get("/:user_id", handleGetUserData);

export default router;
