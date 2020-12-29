import asyncHandler from "express-async-handler";
import Order from "../models/OrderModel.js";

export const orderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentMethod,
    shippingAddress,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("no order found");
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paymentMethod,
      shippingAddress,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});
