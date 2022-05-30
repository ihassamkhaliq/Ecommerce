const models = require('../models/index')

// TO FIND ALL PRODUCTS
const findProducts = async (req, res) => {
    try {
        const foundProducts = await models.productModel.findAll()
        res.render('pages/mainpage',{foundProducts})
    } catch (error) {
        res.send(error)
    }

}

// -----Function for finding or getting one products from table----------

const findOneProduct = async (req, res) => {
    try {
        const id = res.locals.id
        const userDetail = await models.userModel.findByPk(id)
        const singleProduct = await models.productModel.findOne({where: {id : req.params.id}})
        // res.send(result)
        res.render('pages/product',{singleProduct,userDetail})
        // console.log(result)
    }
    catch (error) {
        res.send(error)
    }
}

//  TO CREATE NEW PRODUCTS 
const newProduct = async (req, res) => {
    try {
        const result = await models.productModel.create({
            name: req.body.name,
            category_id: req.body.category_id,
            price: req.body.price,
            description: req.body.des,
            product_image: req.body.product_image
        })
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

// TO DELETE ALL THE PRODUCTS IN TABLE
const deleteAllProduct = async (req, res) => {
    try {
        const result = await models.productModel.destroy({ truncate: true })
        console.log("result=======", result)
        res.send(result.toString())
    } catch (error) {
        res.send(error)
    }
}

// TO DELETE SPECIFIC PRODUCT IN TABLE
const deleteProduct = async (req, res) => {
    try {
        const result = await models.productModel.destroy({ where: { id: req.params.id } })
        console.log("result ===========>>>>", result)
        res.send("Product is Deleted")
    } catch (error) {
        res.send(error)
    }
}

// TO UPDATE SPECIFIC FIELD IN TABLE
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await models.productModel.update({ name: req.body.name },
            { where: { id: id } })
        res.send("Your Product is Updated")
    } catch (error) {
        res.send(error)
    }
}
module.exports = { findProducts, newProduct, deleteAllProduct, deleteProduct, updateProduct, findOneProduct }