import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true,
    },
    clientId: { 
        type: String, 
        optional: true 
    },
    clientName: { 
        type: String, 
        optional: true 
    },
    clientEmail: { 
        type: String, 
        optional: true
    },
    clientTel: { 
        type: String 
    },
    clientAddress: { 
        type: String 
    },
    prodId: {
        type: String,
        required: true,
        trim: true,
    },
    prodName: {
        type: String,
        required: true,
    },
    prodDesc: {
        type: String,
        required: true,
    },
    prodPrice: {
        type: Number,
        required: true
    },
    prodQuan: {
        type: Number,
        required: true,
    },
    prodCategory: {
        type: String,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export default mongoose.model("order", orderSchema)