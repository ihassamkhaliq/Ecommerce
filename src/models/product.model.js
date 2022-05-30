module.exports = (conn,DataTypes)=>{
    const product = conn.define('products',{
        
        id:{
         type:DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
        },
        name:{
         type:DataTypes.STRING,
        },
        category_id:{
         type:DataTypes.INTEGER,
        },
        price:{
         type:DataTypes.INTEGER,
        },
        description:{
         type:DataTypes.STRING,
        },
        product_image:{
            type:DataTypes.STRING
        }
    })
      return product;
    }