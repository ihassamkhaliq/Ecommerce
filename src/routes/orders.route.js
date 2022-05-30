const express = require('express')
const orderController = require('../controllers/orders.controller')
const router = express.Router()

router.route('/').
    get(orderController.findOrders).
    delete(orderController.deleteAllOrder)


router.route('/neworder').
    post(orderController.newOrder)

router.route('/:id').
    delete(orderController.deleteOrder)
    .put(orderController.updateOrder)
    .get(orderController.findOneOrder)


module.exports = router