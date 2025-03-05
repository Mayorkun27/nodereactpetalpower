import express from "express";
import { checkOutOrder, getallOrders } from "../controllers/orderController.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
    "/checkoutorder",
    [
        body("clientId").notEmpty().withMessage("Client Id is required"),
    ],
    checkOutOrder
);

router.get("/allorders", getallOrders);

export default router;