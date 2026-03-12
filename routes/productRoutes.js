import express from "express";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProduct,
  filterCategory
} from "../controllers/productController.js";

const router = express.Router();

router.post("/products", createProduct);

router.get("/products", getProducts);

// specific routes FIRST
router.get("/products/search", searchProduct);

router.get("/products/category", filterCategory);

// dynamic routes LAST
router.get("/products/:id", getProductById);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

export default router;