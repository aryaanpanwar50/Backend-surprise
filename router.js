const express = require('express')
const router = express.Router()
const {signup,showUser} = require('./controller')

router.post('/signup',signup)
router.get('/signup',showUser)

module.exports = router