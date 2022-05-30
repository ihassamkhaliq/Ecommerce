const express = require('express')
const orderDetailsController = require('../controllers/order_detail.controller')
const router = express.Router()

router.route('/').
    get(orderDetailsController.findOrderDetail).
    delete(orderDetailsController.deleteAllOrderDetail)


router.route('/neworderdetails').
    post(orderDetailsController.createOrderDetail)

router.route('/:id').
    delete(orderDetailsController.deleteOrderDetail)
    .put(orderDetailsController.updateOrderDetail)
    .get(orderDetailsController.findOneOrderDetail)


module.exports = router