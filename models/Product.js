import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  productName: {
    type: String,
    required: true
  },

  productCode: {
    type: String,
    required: true,
    unique: true
  },

  category: {
    type: String,
    enum: ["Electronics", "Clothing", "Food", "Furniture"]
  },

  supplierName: {
    type: String,
    required: true
  },

  quantityInStock: {
    type: Number,
    min: 0
  },

  reorderLevel: {
    type: Number,
    min: 1
  },

  unitPrice: {
    type: Number,
    min: 1
  },

  manufactureDate: Date,

  productType: {
    type: String,
    enum: ["Perishable", "Non-Perishable"]
  },

  status: {
    type: String,
    enum: ["Available", "Out of Stock"],
    default: "Available"
  }

}, { timestamps: true });

export default mongoose.model("Product", productSchema);