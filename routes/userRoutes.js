import express from "express";
import multer from "multer";
import checkAuth from "../utils/checkAuth.js";
import { updateAvatar } from "../controllers/UserController.js";
import { registerValidation } from "../validator/auth.js";
import * as UserController from "../controllers/UserController.js";

const router = express.Router();

router.post("/register", registerValidation, UserController.register);

router.post("/login", UserController.login);

router.get("/auth/me", checkAuth, UserController.getMe);

router.post(
  "/update-avatar",
  checkAuth,
  multer().single("avatar"),
  updateAvatar
);

export default router;
