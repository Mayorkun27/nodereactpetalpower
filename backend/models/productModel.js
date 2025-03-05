import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    prodId: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

export default mongoose.model("product", productSchema)