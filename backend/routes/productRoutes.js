import express from "express";
import { param } from "express-validator";
import { uploadProduct, getAllProducts, getAProductDetails, deleteAProduct } from "../controllers/productController.js";
import handleUpload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());
router.use(express.urlencoded({extended: false}));

// Serve uploaded images as static files
router.use('/uploads', express.static('uploads'));

// Calling the image on frontend
{/* <img src={`http://localhost:5000${product.image}`} alt={product.name} /> */}

router.post(
    "/uploadproduct", 
    handleUpload.single("image"),
    uploadProduct
);

router.get(
    "/productinfo/:id", 
    [
        param("id").notEmpty().withMessage("Product Id is required"),
    ],
    getAProductDetails
);

router.delete(
    "/deleteproduct/:id", 
    [
        param("id").notEmpty().withMessage("Product Id is required"),
    ],
    deleteAProduct
);


router.get("/allproducts", getAllProducts);

export default router;