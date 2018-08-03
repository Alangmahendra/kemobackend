var express = require('express');
var router = express.Router();
const User = require('../controllers/User')

router.post('/signin',User.userSignin)

module.exports = router;
