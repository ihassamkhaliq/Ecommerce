const express = require('express')
const categoryController = require('../controllers/category.controller')
const productController = require('../controllers/product.controller')
const auth = require('../controllers/auth.controller')
const router = express.Router()

router.route('/').
    get(categoryController.findCategory).
    delete(categoryController.deleteAllCategory)


    router.route('/newcategory').
        post(categoryController.newCategory)

    router.route('/:id').
        delete(categoryController.deleteCategory)
        .put(categoryController.updateCategory)
        .get(categoryController.findOneCategory)
    
router.route('/:id/products').
    get(auth.auth,categoryController.getProductsByCategories)

    router.route('/:id/products/:id').
    get(auth.auth,productController.findOneProduct)




module.exports = router