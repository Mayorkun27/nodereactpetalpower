import userSchema from "../models/userModel.js";
import { validationResult } from "express-validator";
import generateToken from "../helper/generateToken.js";
import { hashPassword, passwordCompare } from "../helper/hashPassword.js";

export const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    try {
        const { fName, lName, email, phoneNumber, address, password, subscribe, role } = req.body;

        // Find existing email
        const findEmailInDb = await userSchema.findOne({ email });
        if (findEmailInDb) {
            return res.status(400).json({
                message: "Email already in use"
            })
        };

        // Hash Password
        const hashedPassword = await hashPassword(password)

        // Create new user
        const createNewUser = new userSchema({
            fName, 
            lName, 
            email, 
            phoneNumber, 
            address, 
            password : hashedPassword, 
            subscribe, 
            role
        });
        await createNewUser.save();
        res.status(201).json({
            message: "User created successfully",
            createNewUser,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

export const loginUser = async (req, res) => {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    };

    try {
        const { email, password } = req.body;

        const findUserByemail = await userSchema.findOne({ email });
        if (!findUserByemail) {
            return res.status(400).json({
                message : "Invalid Credentials",
            })
        };

        const isMatch = await passwordCompare(password, findUserByemail.password);
        if (!isMatch) {
            return res.status(400).json({
                message : "Incorrect Password",
            })
        };

        if (findUserByemail && isMatch) {
            const token = generateToken(findUserByemail._id);

            // ✅ Send token in HTTP-Only Cookie
            res.cookie("jwt", token, {
                httpOnly: true, // Prevents JavaScript access (XSS protection)
                secure: process.env.NODE_ENV === "production", // Use HTTPS in production
                sameSite: "strict", // Prevent CSRF attacks
                maxAge: 24 * 60 * 60 * 1000, // 1 day
            });

            res.status(200).json({
                message: "Login Successful",
                user : findUserByemail,
                token
            })
            
        }

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export const getallUsers = async (req, res) => {
    try {
        const allUsers = await userSchema.find();
        console.log(allUsers)
        res.status(201).json({
            message: "Users fetched successfully",
            data: allUsers,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}
