module.exports = (conn,DataTypes)=>{
    const orders = conn.define('orders',{
        id:{
         type:DataTypes.STRING,
         primaryKey: true,
         autoIncrement: true
        },
        user_id:{
         type:DataTypes.STRING,
        },
        date:{
         type:DataTypes.DATE,
         timestamps: true
         
        },
        address:{
         type:DataTypes.STRING,
        },
        amount:{
         type:DataTypes.INTEGER,
        }
    })
      return orders;
    }