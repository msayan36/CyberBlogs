import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

// Configs
const port = process.env.PORT || 5000;
dotenv.config();
connectDB();

// App Initialized
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("Blog API Running");
});
app.use("/api/users", userRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// App Listening
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
