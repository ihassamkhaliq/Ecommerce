module.exports = (conn,DataTypes)=>{
    const category = conn.define('category',{
        id:{
         type:DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
        },
        name:{
         type:DataTypes.STRING,
        },
        image:{
         type:DataTypes.STRING,
        },
    })
      return category;
    }