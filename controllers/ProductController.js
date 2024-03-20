import Product from "../models/Product.js";
import Role from "../models/Role.js";

export const createProduct = async (req, res) => {
  try {
    const adminRole = await Role.findOne({ name: "admin" });
    if (!adminRole) {
      return res.status(403).json({ message: "Нет доступа" });
    }

    const productData = req.body;
    const newProduct = await Product.create(productData);

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const adminRole = await Role.findOne({ name: "admin" });
    if (!adminRole) {
      return res.status(403).json({ message: "Нет доступа" });
    }
    const productId = req.params.id;
    const productData = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, productData, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: "Продукт не найден" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const adminRole = await Role.findOne({ name: "admin" });
    if (!adminRole) {
      return res.status(403).json({ message: "Нет доступа" });
    }
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Продукт не найден" });
    }

    res.status(200).json({ message: "Продукт успешно удален" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
