const dotEnv = require('dotenv')
const path = require('path')

dotEnv.config({ path: path.join(__dirname, '../../.env') })

const config = {
    APP: {
        PORT: process.env.PORT
    },
    CONN: {
        dbName: process.env.DB_NAME,
        dbUserName: process.env.DB_USER_NAME,
        dbHost: process.env.DB_HOST,
        dbPassword: process.env.DB_PASSWORD,
    }
}

module.exports = config