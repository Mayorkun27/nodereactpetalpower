import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
        trim: true,
    },
    lName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        sparse: true // ✅ Allows multiple null values without uniqueness constraint
    },
    address: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    subscribe: {
        type: Boolean,
        default: false,
    },
    role: {
        type: Number,
        default: 0,
    }
}, {timestamps: true});

export default mongoose.model("user", userSchema)