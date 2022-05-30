const models = require('../models/index')

const beforeLogin = async (req, res) => {
    try {
        const foundCategories = await models.categoryModel.findAll()
        const foundProducts = await models.productModel.findAll()
        // res.send(result)
        res.render('pages/homepage',{foundCategories,foundProducts})
    } catch (error) {
        res.send(error)
    }
}

const afterLogin = async (req, res) => {
    try {
        const foundCategories = await models.categoryModel.findAll()
        console.log(foundCategories)
        
        console.log('res.locals.id is=================>>>>>>>>',res.locals.id)
        const id = res.locals.id
        const userDetail = await models.userModel.findByPk(id)
        console.log('userDetail is=================>>>>>>>>',userDetail)
        const foundProducts = await models.productModel.findAll()
        // res.send(result)
        res.render('pages/mainpage',{foundCategories,foundProducts,userDetail})
    } catch (error) {
        res.send(error)
    }
}



module.exports = {beforeLogin,afterLogin}