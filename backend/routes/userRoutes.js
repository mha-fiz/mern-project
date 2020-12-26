import {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protectRoute } from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", loginUser);
router
  .route("/profile")
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

export default router;
