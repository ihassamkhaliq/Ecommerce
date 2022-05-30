const express = require('express')
const userController = require('../controllers/user.controller')
const authController = require('../controllers/auth.controller.js')
const home = require('../controllers/home.controller')
const router = express.Router()

router.route('/home')
.get(authController.auth,home.afterLogin)


router.route('/').
    get(userController.findUsers).
    delete(userController.deleteAllUsers)

router.route('/:id').
    delete(userController.deleteUser).
    put(userController.updateUser).
    get(userController.findOneUsers)


// have to add 
module.exports = router