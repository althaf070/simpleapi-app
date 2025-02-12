const Product = require('../models/product.model.js')

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json(products)
  } catch (error) {
    console.log(error)
    res.status(404).json(error.message)
  }
}

const getProductsById = async (req, res) => {
  try {
    const { id } = req.params
    const products = await Product.findById(id)
    res.status(200).json(products)
  } catch (error) {
    console.log(error)
    res.status(404).json(error.message)
  }
}

const createProduct = async (req, res) => {
  try {
    const prod = await Product.create(req.body)
    res.status(200).json(prod)
  } catch (error) {
    console.log(error)
    res.status(500).json({ messge: error.message })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    const updated = await Product.findById(id)
    res.status(200).json(updated)
  } catch (error) {
    console.log(error)
    res.status(500).json({ messge: error.message })
  }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params
  const product = await Product.findByIdAndDelete(id)

  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }
  const products = await Product.find({})
  res.status(200).json(products)
}

module.exports = {
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
  createProduct
}
