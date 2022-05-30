const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');
const categoryModel = require('./category.model');
const conn = new Sequelize(config.CONN.dbName, config.CONN.dbUserName, config.CONN.dbPassword, {
    host: config.CONN.dbHost,
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

const db = {
    userModel: require('./user.model')(conn, DataTypes),
    productModel: require('./product.model')(conn, DataTypes),
    categoryModel: require('./category.model')(conn, DataTypes),
    ordersModel: require('./orders.model')(conn, DataTypes),
    orderDetailsModel: require('./order_detail.model')(conn, DataTypes),
    productImg : require('./product_img.model')(conn,DataTypes),
    productReviews : require('./product_reviews.model')(conn,DataTypes),

}
db.categoryModel.hasMany(db.productModel,{foreignKey: 'category_id'})
db.productModel.belongsTo(db.categoryModel,{foreignKey: 'category_id'})

db.userModel.hasMany(db.ordersModel,{foreignKey: 'user_id'})
db.ordersModel.belongsTo(db.userModel,{foreignKey: 'user_id'})

db.ordersModel.hasMany(db.orderDetailsModel,{foreignKey: 'order_id'})
db.orderDetailsModel.belongsTo(db.ordersModel,{foreignKey: 'order_id'})

db.productModel.hasMany(db.productImg,{foreignKey: 'product_id'})
db.productImg.belongsTo(db.productModel,{foreignKey: 'product_id'})

db.productModel.hasMany(db.productReviews,{foreignKey: 'product_id'})
db.productReviews.belongsTo(db.productModel,{foreignKey: 'product_id'})

db.productModel.hasMany(db.orderDetailsModel,{foreignKey: 'product_id'})
db.orderDetailsModel.belongsTo(db.productModel,{foreignKey: 'product_id'})

db.userModel.hasMany(db.productReviews,{foreignKey: 'user_id'})
db.productReviews.belongsTo(db.userModel,{foreignKey: 'user_id'})


module.exports = db;