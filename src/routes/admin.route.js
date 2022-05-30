const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth.controller.js')
const admin = require('../controllers/admin.controller')


router.route('/').
    get(auth.getSignIn).
    post(auth.auth, auth.signin)

router.route('/dashboard').
    get(auth.auth, admin.getDashboard)

router.route('/dashboard/categories').
    get(auth.auth, admin.getCategories)


router.route('/dashboard/categories/create').
    get(auth.auth, admin.createCategoriesPage).
    post(auth.auth, admin.fileUpload, admin.createCategories)

router.route('/dashboard/categories/view/:id').
    get(auth.auth, admin.findOneCategory)

router.route('/dashboard/categories/update/:id').
    get(auth.auth, admin.getCategoriesUpdate).
    put(auth.auth, admin.fileUpload, admin.updateCategory)

router.route('/dashboard/categories/delete/:id').
    get(auth.auth, admin.deleteCategory)


router.route('/dashboard/products').
    get(admin.getProducts)

router.route('/dashboard/products/create').
    get(auth.auth, admin.createProductsPage).
    post(auth.auth, admin.fileUpload, admin.createProducts)

router.route('/dashboard/products/view/:id').
    get(auth.auth, admin.findOneProduct)

router.route('/dashboard/products/update/:id').
    get(auth.auth, admin.getProductsUpdate).
    put(auth.auth, admin.fileUpload,admin.productsUpdate)

router.route('/dashboard/products/delete/:id').
    get(auth.auth,admin.fileUpload, admin.deleteProducts)

router.route('/logout').
    get(auth.logout)

module.exports = router