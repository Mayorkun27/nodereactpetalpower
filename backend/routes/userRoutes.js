import express from "express";
import { body } from "express-validator";
import { registerUser, getallUsers, loginUser } from "../controllers/userController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("fName").notEmpty().withMessage("First name is required"),
    body("lName").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("confPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords must match");
      }
      return true;
    }),
  ],
  registerUser
);

router.post("/login", 
  [
    body("email").notEmpty().isEmail().withMessage("Please enter a valid email"),
    body("password").not().isEmpty().withMessage("Password is required"),
  ],
  loginUser
)

router.get("/session", protectRoute, (req, res) => {
  res.status(200).json({ 
      message: "Profile fetched successfully", user: req.user 
  });
});

router.post("/logout", (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Logged out successfully" });
});

router.get("/allusers", getallUsers)

export default router;