const express = require('express')
const cors = require('cors')
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const route = require('./routes')
const config = require('./config/config')
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static("public"));
app.set('view engine','ejs');
// Routes
app.use('/',route)
app.listen(config.APP.PORT,console.log("Ecommerce Site Server is running on Port:",config.APP.PORT))