import productSchema from "../models/productModel.js";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid"

export const uploadProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    try {
        const { category, name, description, quantity, price } = req.body;
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null; // ✅ Get image from Multer
       
        const createNewProduct = new productSchema({
            prodId: uuidv4(), // ✅ Always generates a unique ID
            category,
            name,
            description,
            image: imagePath,
            quantity,
            price
        });
          
        await createNewProduct.save();
        res.status(201).json({
            message: "Product uploaded successfully",
            createNewProduct,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await productSchema.find();
        res.status(200).json({
            message: "Products fetched successfully",
            data: allProducts,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}
