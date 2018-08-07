const express = require('express')
const router = express.Router()
const Akomodasi = require('../controllers/Akomodasi')
const auth = require('../auth/auth')

    router.post('/add',auth.isLogin,Akomodasi.create)
    router.get('/akomodasi-saya',auth.isLogin,Akomodasi.findByUser)
    router.put('/:id',auth.isLogin,auth.isAdmin,Akomodasi.update)

module.exports = router