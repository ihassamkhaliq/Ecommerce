const models = require('../models/index')
const bcrypt = require('bcrypt')

const homePage = async (req,res)=>{
    try {
        const homePageData = await models.categoryModel.findAll()
        console.log(homePageData)
        
        console.log('res.locals.id is=================>>>>>>>>',res.locals.id)
        const id = res.locals.id
        const userDetail = await models.userModel.findByPk(id)
        console.log('userDetail is=================>>>>>>>>',userDetail)
        res.render('pages/mainpage', {homePageData,userDetail})
    } catch (error) {
        res.send(error)
    }
}

// -----Function for finding or getting all users from table----------

const findUsers = async (req, res) => {
    try {
        const result = await models.userModel.findAll()
        res.send(result)
        // console.log(result)
    }
    catch (error) {
        res.send(error)
    }
}
// -----Function for finding or getting one users from table----------

const findOneUsers = async (req, res) => {
    try {
        const result = await models.userModel.findOne({where: {id : req.params.id}})
        res.send(result)
        // console.log(result)
    }
    catch (error) {
        res.send(error)
    }
}

// DELETE ALL USERS

const deleteAllUsers = async (req, res) => {
    try {

        const result = await models.userModel.destroy({ truncate: true })
        console.log("result=======", result)
        // if(result){
        //      await models.userModel.destroy({truncate:true})
        // }
        res.send(result.toString())
    } catch (error) {
        res.send(error)
    }
}

// DELETE SINGLE USER

const deleteUser = async (req, res) => {
    try {

        const result = await models.userModel.destroy({ where: { id: req.params.id } })
        console.log("result ===========>>>>", result)
        res.send(result.toString())
    }
    catch (error) {
        res.send(error)
    }
}


// UPDATE USER

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const hashPassword = await bcrypt.hash(req.body.password,13)
        const result = await models.userModel.update({ password: hashPassword },
            { where: { id: id } })
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    homePage, findUsers, deleteAllUsers, deleteUser, updateUser,findOneUsers }