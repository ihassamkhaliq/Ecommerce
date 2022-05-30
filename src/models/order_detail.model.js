module.exports = (conn,DataTypes)=>{
    const orderDetail = conn.define('order_detail',{
        detail_id:{
         type:DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
        },
        product_id:{
         type:DataTypes.INTEGER,
        },
        order_id:{
         type:DataTypes.INTEGER,
        },
        product_quantity:{
         type:DataTypes.INTEGER,
        },
        detail_discount:{
         type:DataTypes.INTEGER,
        }
    })
      return orderDetail;
    }