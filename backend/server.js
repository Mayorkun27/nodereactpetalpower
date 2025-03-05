import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDb from "./dB/connect.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import cookieParser from "cookie-parser";
import path from "path"

dotenv.config();
connectDb();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(cookieParser()) // Enable cookie parsing
app.use(express.json()) //To allow JSON data in requests

app.get("/", (req, res) => {
    res.send("Hello from Node.Js Api!")
})

app.use("/api/v1/user", userRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/order", orderRouter)
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})