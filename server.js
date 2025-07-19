import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your actual cluster name and DB
// const mongoURL = `mongodb+srv://${dbUser}:${dbPass}@cluster0.qjxhv.mongodb.net/merncafe?retryWrites=true&w=majority`;

mongoose.connect(process.env.mongoURL)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(8080, () => {
      console.log("🚀 Server running on http://localhost:8080");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
console.log(process.env.mongoURL);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
