import express from "express";
import {
	addOrderItens,
	getOrderById,
	updateOrderToPaid,
	updateOrderToDelivered,
	getMyOrders,
	getOrders,
} from "../controllers/orderController";

const router = express.Router();

router.route("/").post(addOrderItens);
router.route("/:id").get(getOrderById);
router.route("/:id/pay").get(updateOrderToPaid);
router.route("/:id/deliver").get(updateOrderToDelivered);
router.route("/myorders").get(getMyOrders);
router.route("/").get(getOrders);

export default router;