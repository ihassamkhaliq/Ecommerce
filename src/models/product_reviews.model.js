module.exports = (conn,DataTypes)=>{
    const product_reviews = conn.define('product_reviews',{
        
        id:{
         type:DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
        },
        product_id:{
         type:DataTypes.INTEGER,
        },
        reviews:{
         type:DataTypes.STRING,
        },
        user_id:{
         type:DataTypes.INTEGER,
        }
    })
      return product_reviews;
    }