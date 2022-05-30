const express = require('express')
const productController = require('../controllers/product.controller')
const auth = require('../controllers/auth.controller')
const router = express.Router()

router.route('/').
    get(productController.findProducts).
    delete(productController.deleteAllProduct)


router.route('/newproduct').
    post(productController.newProduct)

router.route('/:id').
    delete(productController.deleteProduct).
    put(productController.updateProduct).
    get(auth.auth,productController.findOneProduct)


module.exports = router

// add categories Product
// how many order of products
// make route for default image