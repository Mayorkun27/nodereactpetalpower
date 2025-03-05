import express from "express";
import { checkOutOrder, completeOrder, getallOrders, getAUserOrder } from "../controllers/orderController.js";
import { body, param } from "express-validator";

const router = express.Router();

router.post(
    "/checkoutorder",
    [
        body("clientId").notEmpty().withMessage("Client Id is required"),
    ],
    checkOutOrder
);

router.post(
    "/completeorder/:id",
    [
        param("id").notEmpty().withMessage("Order Id is required"),
    ],
    completeOrder
);

router.get(
    "/myorders/:id",
    [
        param("id").notEmpty().withMessage("User Id is required"),
    ],
    getAUserOrder
);

router.get("/allorders", getallOrders);

export default router;