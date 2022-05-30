const express = require('express')
const homeRoute = require('./home.route')
const adminRoute = require('./admin.route')
const authRoute = require('./auth.route')
const userRoute = require('./user.route')
const productRoute = require('./product.route')
const orderRoute = require('./orders.route')
const orderDetailRoute = require('./order_detail.route')
const categoryRoute = require('./category.route')
const router = express.Router()

const routes = [
    {
        path: '/admin',
        route: adminRoute
    },
    {
        path: '/homepage',
        route: homeRoute
    },
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/users',
        route: userRoute
    },
    {
        path: '/products',
        route: productRoute
    },
    {
        path: '/orders',
        route: orderRoute
    },
    {
        path: '/orderdetails',
        route: orderDetailRoute
    },
    {
        path: '/categories',
        route: categoryRoute
    }
]

routes.forEach((r) => {
    router.use(r.path, r.route)
})

module.exports = router