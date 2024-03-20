import express from "express";
import * as ProductController from "../controllers/ProductController.js";
import checkAuth from "../utils/checkAuth.js";

const router = express.Router();

router.post("/create", checkAuth, ProductController.createProduct);
router.put("/update/:id", checkAuth, ProductController.updateProduct);
router.delete("/delete/:id", checkAuth, ProductController.deleteProduct);

export default router;
