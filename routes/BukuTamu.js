const router = require('express').Router()
const BukuTamu = require('../controllers/BukuTamu')
const auth = require('../auth/auth')
    router.get('/list',auth.isLogin,auth.isAdmin,BukuTamu.findAll)
    router.post('/add',BukuTamu.add)

module.exports = router