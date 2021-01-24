import express from "express";
const router = express.Router();
import {
  orderItems,
  getOrderById,
  updatePayStatus,
  getMyOrders,
} from "../controllers/orderController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

router.use(protectRoute);

router.route("/").post(orderItems);
router.route("/myorders").get(getMyOrders);
router.route("/:id").get(getOrderById);
router.route("/:id/pay").put(updatePayStatus);

export default router;
