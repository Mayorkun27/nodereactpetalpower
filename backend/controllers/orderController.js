import userSchema from "../models/userModel.js";
import orderSchema from "../models/orderModel.js";
import productSchema from "../models/productModel.js";
import { validationResult } from "express-validator";

export const checkOutOrder = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { clientId, cart } = req.body;

        // ✅ Check if the client exists in the database
        const client = await userSchema.findById(clientId);
        if (!client) {
            return res.status(400).json({ message: "Client not found" });
        }

        // ✅ Check if clientTel and clientAddress are missing
        if (!client.phoneNumber || !client.address) {
            return res.status(400).json({
                message: "Please update your phone number and address before placing an order."
            });
        }

        const generateOrderId = async () => {
            const year = new Date().getFullYear();
            const orderCount = await orderSchema.countDocuments();
            return `ORD_${year}_${(orderCount + 1).toString().padStart(4, "0")}`;
        };

        const generatedOrderId = await generateOrderId();

        let totalCost = 0;
        let defaultOrderStatus = "pending";

        for (const cartItem of cart) {

            if (!cartItem.productId || cartItem.quantity <= 0) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid cart format or quantity for a product",
                });
            }

            const productId = cartItem.productId;
            const requestedQuantity = Number(cartItem.quantity);

            const findProductInDb = await productSchema.findOne({ prodId: productId });
            if (!findProductInDb) {
                return res.status(400).json({
                    success: false,
                    message: `Product with ID ${productId} not found`
                });
            }

            if (requestedQuantity > findProductInDb.quantity) {
                return res.status(400).json({
                    success: false,
                    message: `Insufficient stock for product: ${findProductInDb.name}. Only ${findProductInDb.quantity} left`
                });
            }

            const productCost = parseFloat(findProductInDb.price) * requestedQuantity;
            totalCost += productCost;
            const newProductQuantity = findProductInDb.quantity - requestedQuantity;

            // ✅ Update product stock in DB
            await productSchema.findOneAndUpdate(
                { prodId: productId },
                { quantity: newProductQuantity },
                { new: true }
            );

            // ✅ Save order
            const newOrder = new orderSchema({
                orderId: generatedOrderId,
                clientId: client._id,
                clientName: `${client.fName} ${client.lName}`,
                clientEmail: client.email,
                clientTel: client.phoneNumber,
                clientAddress: client.address,
                prodId: productId,
                prodName: findProductInDb.name,
                prodDesc: findProductInDb.description,
                prodPrice: findProductInDb.price,
                prodQuan: requestedQuantity,
                prodCategory: findProductInDb.category,
                orderStatus: defaultOrderStatus,
            });

            await newOrder.save();
        }

        // ✅ Send final response after all orders are processed
        res.status(201).json({
            message: "Checkout successful",
            orderId: generatedOrderId,
            totalCost: totalCost,
            "deliveryDetails" : {
                "clientId" : client._id,
                "clientName" : `${client.fName} ${client.lName}`,
                "clientTel" : client.phoneNumber,
                "clientAddress" : client.address
            }
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const completeOrder = async (req, res) => {
    
}

export const getallOrders = async (req, res) => {
    try {
        const allOrders = await orderSchema.find();
        console.log(allOrders)
        res.status(200).json({
            message: "Orders fetched successfully",
            data: allOrders,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}
