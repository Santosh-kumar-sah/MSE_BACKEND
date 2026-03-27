import Product from "../models/Product.js";



export const createProduct = async (req, res) => {

  try {

    const product = await Product.create(req.body);

    res.status(201).json(product);

  } catch (error) {

    res.status(400).json({ message: error.message });

  }

};




export const getProducts = async (req, res) => {

  try {

    const products = await Product.find();

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};




export const getProductById = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};



export const updateProduct = async (req, res) => {

  try {

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};




export const deleteProduct = async (req, res) => {

  try {

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Product Deleted" });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};




export const searchProduct = async (req, res) => {

  try {

    const name = req.query.name;

    const products = await Product.find({
      productName: { $regex: name, $options: "i" }
    });

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};




export const filterCategory = async (req, res) => {

  try {

    const category = req.query.cat;

    const products = await Product.find({ category });

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};