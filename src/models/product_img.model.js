module.exports = (conn,DataTypes)=>{
    const product_img = conn.define('product_img',{
        
        id:{
         type:DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
        },
        product_id:{
         type:DataTypes.INTEGER,
        },
        url:{
         type:DataTypes.STRING,
        },
        default_image:{
            type:DataTypes.STRING
        }
    })
      return product_img;
    }