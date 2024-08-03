const express = require('express');

const {getProducts,getProductsById,createProduct,updateProduct,deleteProduct} = require('../controller/prodeuct.controller.js')

const router = express.Router();

router.get('/',getProducts)

router.get('/:id',getProductsById)

router.post('/',createProduct)

router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)
module.exports = router