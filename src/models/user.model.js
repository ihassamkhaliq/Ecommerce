module.exports = (conn, DataTypes) => {
  const user = conn.define('user', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
     },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.BOOLEAN,
    }
  })
  return user;
}