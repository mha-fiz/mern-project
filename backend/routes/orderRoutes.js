import express from "express";
const router = express.Router();
import { orderItems } from "../controllers/orderController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

router.route("/").post(protectRoute, orderItems);

export default router;
