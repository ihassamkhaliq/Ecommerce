const models = require('../models/index')

// TO FIND ALL OrderDetail
const findOrderDetail = async (req, res) => {
    try {
        const result = await models.orderDetailsModel.findAll()
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

// 

const findOneOrderDetail = async (req, res) => {
    try {
        const result = await models.orderDetailsModel.findAll({where:{detail_id: req.params.id}})
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

//  TO CREATE NEW OrderDetail 
const createOrderDetail = async (req, res) => {
    try {
        const result = await models.orderDetailsModel.create({
               product_id: req.body.product_id,
               order_id: req.body.order_id,
               product_quantity: req.body.product_quantity,
               detail_discount: req.body.detail_discount
               })
               res.send(result)
        }
    catch (error) {
        res.send(error)
    }
}

// TO DELETE ALL THE OrderDetail IN TABLE
const deleteAllOrderDetail = async (req, res) => {
    try {
        const result = await models.orderDetailsModel.destroy({ truncate: true })
        console.log("result=======", result)
        res.send(result.toString())
    } catch (error) {
        res.send(error)
    }
}

// TO DELETE SPECIFIC Order IN TABLE
const deleteOrderDetail = async (req, res) => {
    try {
        const result = await models.orderDetailsModel.destroy({ where: { detail_id: req.params.id } })
        console.log("result ===========>>>>", result)
        res.send("Order is Deleted")
    } catch (error) {
        res.send(error)
    }
}

// TO UPDATE SPECIFIC FIELD IN TABLE
const updateOrderDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await models.orderDetailsModel.update({ product_quantity: req.body.product_quantity },
            { where: { detail_id: id } })
        res.send("Your Order is Updated")
    } catch (error) {
        res.send(error)
    }
}
module.exports = { findOrderDetail, createOrderDetail, deleteAllOrderDetail, deleteOrderDetail, updateOrderDetail, findOneOrderDetail }