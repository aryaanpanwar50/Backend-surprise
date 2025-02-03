const {createUser,showUsers} =  require("../controller/userController");
const express = require('express');
const router = express.Router();

router.post('/signup',createUser);
router.get('/signup',showUsers)

module.exports = router