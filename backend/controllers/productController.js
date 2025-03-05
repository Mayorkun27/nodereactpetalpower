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

export const getAProductDetails = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const productId = req.params.id;
    
        const findThisProductDetailsInDb = await productSchema.findOne({ prodId: productId });
        if (!findThisProductDetailsInDb) {
            return res.status(404).json({
                success: false,
                message: `Product with ID ${productId} not found`
            });
        }

        res.status(200).json({ 
            success: true, 
            message: `Details of product with ID of ${productId} fetched successfully`,
            producdetails: findThisProductDetailsInDb
        });

    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message,
        });
    }
}

export const deleteAProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const productId = req.params.id;
    
        const findAndDeleteThisProductInDb = await productSchema.findOneAndDelete({ prodId: productId });
        if (!findAndDeleteThisProductInDb) {
            return res.status(400).json({
                success: false,
                message: `No Product found with ID ${productId} not found`
            });
        }

        res.status(200).json({ 
            success: true, 
            message: `Product with ID of ${productId} deleted successfully`,
            deletedProduct: findAndDeleteThisProductInDb
        });

    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error: error.message,
        });
    }
}
