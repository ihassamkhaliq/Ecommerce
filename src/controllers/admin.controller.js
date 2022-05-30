const express = require('express')
const multer =require('multer')
const models = require('../models/index')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/admin/upload')
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1]
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext)
    }
  })
  
  const upload = multer({ storage: storage })

  const fileUpload = upload.single('image')
  
  
  
  
  const getDashboard = async(req,res)=>{
      try {
          res.render('admin/dashboard')
        } catch (error) {
            res.send(error)
        }
    }

const getCategoriesUpdate = async(req,res)=>{
    try {
        console.log("I'm Updating Categories=============>>",req.params.id )
        const updateCategory = await models.categoryModel.findByPk(req.params.id)
        res.render('admin/updateCategories',{updateCategory})
    } catch (error) {
        res.send(error)
    }
}

const updateCategory = async (req, res) => {
    try {
        console.log("Category is Updated")
        const id = req.params.id;
        const editCategory = await models.categoryModel.update({ name: req.body.name ,
            image: req.file.filename
        },
            { where: { id: id } })
            console.log("I'm at 50")
        res.status(200).json({
            status:true
        })
        // res.redirect('http://localhost:3500/admin/dashboard/categories')
    } catch (error) {
        res.send(error)
    }
}

const getCategories = async(req,res)=>{
    try {
        const gotCategories = await models.categoryModel.findAll()
        res.render('admin/viewCategories',{gotCategories})
    } catch (error) {
        res.send(error)
    }
}

const createCategoriesPage = async(req,res)=>{
    try {
        console.log("I'm Creating for admin=========>>>>>>>>>>")
        res.render('admin/createCategories')
    } catch (error) {
        res.send(error)
    }
}

const createCategories = async(req,res)=>{
    try {
        console.log("I'm Posting Categories")
        console.log(req.file)
        if(req.body.name){
        const newCategory = await models.categoryModel.create({
            name: req.body.name,
            image : req.file.filename
        })
        res.json({newCategory,status: true})
        
    }else{
        res.json({status: false})
    }
    }
    catch (error) {
        res.send(error)
    }
}

const getProducts = async(req,res)=>{
    try {
        const gotCategories = await models.categoryModel.findAll()
        const gotProducts = await models.productModel.findAll(
            {
            include : models.categoryModel})
        // res.json(gotProducts[0].category)
        res.render('admin/viewProducts',{gotProducts,gotCategories})
    } catch (error) {
        res.send(error)
    }
}

    const findOneCategory = async (req, res) => {
        try {
            const gotOneCategory = await models.categoryModel.findByPk(req.params.id)
            res.render('admin/oneCategory',{gotOneCategory})
        } catch (error) {
            res.send(error)
        }
    }
    
    const deleteCategory = async (req, res) => {
        try {
            const deleted = await models.categoryModel.destroy({ where: { id: req.params.id } })
            res.redirect('http://localhost:3500/admin/dashboard/categories')
        } catch (error) {
            res.send(error)
        }
    }

    const findOneProduct = async (req, res) => {
        try {
            const id = res.locals.id
            const gotCategories = await models.categoryModel.findAll()
            const gotOneProduct = await models.productModel.findByPk(req.params.id,
           { include : models.categoryModel}
           )
            // res.send(result)
            res.render('admin/oneProduct',{gotOneProduct,gotCategories})
            // console.log(result)
        }
        catch (error) {
            res.send(error)
        }
    }

    const getProductsUpdate = async(req,res)=>{
        try {
            const gotCategories = await models.categoryModel.findAll()
            const id = res.locals.id
            const userDetail = await models.userModel.findByPk(id)
            const updateProducts = await models.productModel.findByPk(req.params.id,
           { include : models.categoryModel}
           )
           res.render('admin/updateProducts',{updateProducts,gotCategories})
        }
         catch (error) {
            res.send(error)
        }}

    const createProductsPage = async(req,res)=>{
        try {
            const gotCategories = await models.categoryModel.findAll()
            console.log("I'm Creating Products for admin=========>>>>>>>>>>")
            res.render('admin/createProducts',{gotCategories})
        } catch (error) {
            res.send(error)
        }
    }

    const createProducts = async (req, res) => {
        try {
            console.log("I'm Creating the Products")
            const productCreated = await models.productModel.create({
                name: req.body.name,
                category_id: req.body.dropdown,
                price: req.body.price,
                description: req.body.description,
                product_image: req.file.filename
            })
            res.status(200).json({productCreated,status:true})
        } catch (error) {
            res.send(error)
        }
    }

    const productsUpdate = async (req, res) => {
        try {
            const id = req.params.id;
            console.log(id)
            console.log(req.file)
            const updateProduct = await models.productModel.update({ 
                name: req.body.name,
                category_id: req.body.dropdown,
                price: req.body.price,
                description: req.body.description,
                product_image: req.file.filename },
                { where: { id: id } })
            res.status(200).json({updateProduct,status:true})
        } catch (error) {
            res.send(error)
        }
    }

    const deleteProducts = async (req, res) => {
        try {
            console.log("I'm in the Products")
            const productdeleted = await models.productModel.destroy({ where: { id: req.params.id } })
            res.redirect('http://localhost:3500/admin/dashboard/products')
        } catch (error) {
            res.send(error)
        }
    }

module.exports = {getDashboard,getCategories,getProducts,createCategoriesPage,createCategories,getCategoriesUpdate,updateCategory,findOneCategory,deleteCategory,fileUpload,findOneProduct,getProductsUpdate,createProductsPage,createProducts,productsUpdate,deleteProducts}