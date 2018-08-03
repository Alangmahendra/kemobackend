var express = require('express');
var router = express.Router();
const Admin = require('../controllers/Admin')
const auth = require('../auth/auth')

router.get('/oneuser/:id', auth.isLogin, auth.isAdmin, Admin.findOneUser)
router.post('/addschedule/user/:id', auth.isLogin, auth.isAdmin, Admin.addScheduleUser)
router.delete('/removeschedule/user/:id', auth.isLogin, auth.isAdmin, Admin.removeScheduleUser)
router.post('/signup', Admin.signupAdmin)
router.post('/signin', Admin.signinAdmin)
router.post('/adduser', auth.isLogin, auth.isAdmin, Admin.addUser)
router.get('/alluser', auth.isLogin, auth.isAdmin, Admin.findAllUser)

module.exports = router;
