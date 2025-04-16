// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv"
// import connectDb from "./dB/connect.js";
// import userRouter from "./routes/userRoutes.js";
// import productRouter from "./routes/productRoutes.js";
// import orderRouter from "./routes/orderRoutes.js";
// import cookieParser from "cookie-parser";
// import path from "path"

// dotenv.config();
// connectDb();

// const app = express();
// app.use(cors({ origin: "http://localhost:5173", credentials: true }))
// app.use(cookieParser()) // Enable cookie parsing
// app.use(express.json()) //To allow JSON data in requests

// app.get("/", (req, res) => {
//     res.send("Hello from Node.Js Api!")
// })

// app.use("/api/v1/user", userRouter)
// app.use("/api/v1/product", productRouter)
// app.use("/api/v1/order", orderRouter)
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//     console.log(`server running at http://localhost:${PORT}`);
// })


// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import userRouter from "./routes/userRoutes.js";
// import productRouter from "./routes/productRoutes.js";
// import orderRouter from "./routes/orderRoutes.js";
// import connectDb from "./dB/connect.js";

// dotenv.config();
// connectDb();

// const app = express();

// app.use(
//   cors({
//     origin: ["http://localhost:5173/#/", "https://medaid.com.ng/"],
//     credentials: true,
//   })
// );
// app.use(cookieParser());
// app.use(express.json());

// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/product", productRouter);
// app.use("/api/v1/order", orderRouter);

// app.get("/", (req, res) => {
//   res.send("API running");
// });

// export default app;

// server.js or api/index.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "../routes/userRoutes.js";
import productRouter from "../routes/productRoutes.js";
import orderRouter from "../routes/orderRoutes.js";
import connectDb from "../dB/connect.js";
import path from "path";
// import { handler } from 'vercel-node-serverless'; // This line is just for clarity, not actual import

dotenv.config();
connectDb();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://medaid.com.ng"],
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is live");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/order", orderRouter);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ✅ Export a serverless handler for Vercel
import { createServer } from "http";
import { parse } from "url";

const server = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  app(req, res);
});

export default server;