const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth.controller.js')

router.route('/signup').
get(auth.getSignup).
post(auth.createUser)

router.route('/signin').
    get(auth.getSignIn).
    post(auth.signin)

router.route('/logout').
get(auth.logout)

module.exports = router