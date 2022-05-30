const models = require('../models/index')

// TO FIND ALL Orders
const findOrders = async (req, res) => {
    try {
        const result = await models.ordersModel.findAll()
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

// -----Function for finding or getting one products from table----------

const findOneOrder = async (req, res) => {
    try {
        const result = await models.ordersModel.findOne({where: {id : req.params.id}})
        res.send(result)
        // console.log(result)
    }
    catch (error) {
        res.send(error)
    }
}

//  TO CREATE NEW Orders 
const newOrder = async (req, res) => {
    try {
        const result = await models.ordersModel.create({
               user_id: req.body.user_id,
               address: req.body.order_address,
               amount: req.body.order_amount
               })
               res.send(result)
        }
    catch (error) {
        res.send(error)
    }
}

// TO DELETE ALL THE Orders IN TABLE
const deleteAllOrder = async (req, res) => {
    try {
        const result = await models.ordersModel.destroy({ truncate: true })
        console.log("result=======", result)
        res.send(result.toString())
    } catch (error) {
        res.send(error)
    }
}

// TO DELETE SPECIFIC Order IN TABLE
const deleteOrder = async (req, res) => {
    try {
        const result = await models.ordersModel.destroy({ where: { id: req.params.id } })
        console.log("result ===========>>>>", result)
        res.send("Order is Deleted")
    } catch (error) {
        res.send(error)
    }
}

// TO UPDATE SPECIFIC FIELD IN TABLE
const updateOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await models.ordersModel.update({ amount: req.body.amount },
            { where: { order_id: id } })
        res.send("Your Order is Updated")
    } catch (error) {
        res.send(error)
    }
}
module.exports = { findOrders, newOrder, deleteAllOrder, deleteOrder, updateOrder , findOneOrder }