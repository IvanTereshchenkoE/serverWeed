// index.js
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js"; // Добавили маршрут для продуктов
import multer from "multer";
import * as UserController from "./controllers/UserController.js";
import checkAuth from "./utils/checkAuth.js";
import { registerValidation } from "./validator/auth.js";

const stripeSecretKey =
  "sk_test_51OYrtZDvU6GIsUSDCEewSI495VfTjI2W0nFtNr9N6vp9pNuhDAP25QztS7z5uU0dWOv75BhKxvwdnM8RZyKico1L00gBbk2Lm9";
import stripeLib from "stripe";
const stripe = stripeLib(stripeSecretKey);

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Разрешить запросы с любого источника
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Разрешенные HTTP-методы
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Разрешенные заголовки
  next();
});

app.use(express.json());

// Эндпоинты пользователя
app.use("/users", userRouter);

// Эндпоинты продуктов
app.use("/products", productRouter);

// Эндпоинт для изменения аватара
app.post(
  "/users/update-avatar",
  checkAuth,
  multer().single("avatar"),
  UserController.updateAvatar
);

app.post("/create-payment-intent", checkAuth, async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 4444;

mongoose
  .connect(
    "mongodb+srv://johnnsnopkz:78245199g@weedshop.tyv39o7.mongodb.net/blog?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));
