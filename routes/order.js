import express from 'express';
import asyncHandler from 'express-async-handler';
import protect from '../middlewares/auth.js';
import Order from '../models/Order.js';

const router = express.Router();

router.route('/').post(
  [protect],
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippiningAddress,
      paymentMethod,
      itemsPice,
      taxPrice,
      shippiningPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error('No order items');
    } else {
      const order = new Order({
        orderItems,
        shippiningAddress,
        paymentMethod,
        itemsPice,
        taxPrice,
        shippiningPrice,
        totalPrice,
      });

      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }
  })
);

export default router;
