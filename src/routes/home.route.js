const express = require('express')
const router = express.Router()
const home = require('../controllers/home.controller')
const auth = require('../controllers/auth.controller.js')

router.route('/').
get(home.beforeLogin)



module.exports = router