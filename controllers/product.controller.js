const mongoose = require("mongoose");
const Product = require("../models/Product");
const createProduct = async (req, res) => {
  try {
    const { name, price, imageUrl, description } = req.body;
    const newProduct = new Product({
      name,
      price,
      imageUrl,
      description,
    });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getProducts = async (req,res)=>
{
    try {
        const products = await Product.find();
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const updateProduct = async (req,res)=>
{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
          return res.status(404).json("product not found");
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
}
const deleteProduct = async (req,res)=>
{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product)
        {
            return res.status(404).json("product not found");
        }
        res.status(200).json(product);
    }
    catch
    {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}
module.exports ={
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}