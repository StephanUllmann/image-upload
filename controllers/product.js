const Product = require('../models/products.js');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate({
      path: 'owner',
    });
    if (!products || products.length === 0)
      return res.status(404).json({ error: 'No products found' });
    else res.status(200).json({ data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, image, owner } = req.body;
    console.log('body: ', req.body);
    console.log('file: ', req.file);
    // const product = await Product.create({ name, price, image, owner });
    // console.log(product);
    // res.status(201).json({ data: product });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const okify = (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.status(200).send('alright');
};

module.exports = { createProduct, okify, getAllProducts };
