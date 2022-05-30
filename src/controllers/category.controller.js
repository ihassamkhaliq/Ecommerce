const models = require('../models/index')

// TO FIND ALL category
const findCategory = async (req, res) => {
    try {
        const result = await models.categoryModel.findAll()
        res.send(result)
        // res.render('pages/mainpage',{result})
        // res.render('admin/viewCategories',{result})
    } catch (error) {
        res.send(error)
    }
}

// TO FIND A CATEGORY
const findOneCategory = async (req, res) => {
    try {
        const result = await models.categoryModel.findByPk(req.params.id)
    //    res.send(result)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

//  TO CREATE NEW category 
const newCategory = async (req, res) => {
    try {
        const result = await models.categoryModel.create({
            name: req.body.name
        })
        res.send(result)
    }
    catch (error) {
        res.send(error)
    }
}

// TO DELETE ALL THE category IN TABLE
const deleteAllCategory = async (req, res) => {
    try {
        const result = await models.categoryModel.destroy({ truncate: true })
        console.log("result=======", result)
        res.send("Categories are deleted Successfully")
    } catch (error) {
        res.send('error')
    }
}

// TO DELETE SPECIFIC Order IN TABLE
const deleteCategory = async (req, res) => {
    try {
        const result = await models.categoryModel.destroy({ where: { id: req.params.id } })
        console.log("result ===========>>>>", result)
        res.send("Order is Deleted")
    } catch (error) {
        res.send(error)
    }
}

// TO UPDATE SPECIFIC FIELD IN TABLE
const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await models.categoryModel.update({ name: req.body.name },
            { where: { id: id } })
        res.send("Your Category is Updated")
    } catch (error) {
        res.send(error)
    }
}

const getProductsByCategories = async (req, res) => {
    try {
        const id = res.locals.id
        const userDetail = await models.userModel.findByPk(id)
        if (req.params.id=='all') {
            const category = await models.categoryModel.findAll({ include: models.productModel });
            if (category) {
                res.send(category)
            } else {
                res.render("pages/categorizeProducts" , {category,userDetail})
            }
        }
        else {
            const category = await models.categoryModel.findByPk(req.params.id, { include: models.productModel });
            console.log(category.products)
            if (category) {
                res.render("pages/categorizeProducts" , {category,userDetail})
                }
                else {
                    res.send("category not found")
                }
            }
    }
    catch (error) {
        res.send(error)
    }
}

module.exports = { findCategory, newCategory, deleteAllCategory, deleteCategory, updateCategory, findOneCategory, getProductsByCategories }