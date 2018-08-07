const express = require('express')
const router = express.Router()
const Homestay = require('../controllers/Homstay')
const auth  = require('../auth/auth')

    router.get('/all',auth.isLogin,Homestay.findAll)
    router.get('/:id',auth.isLogin,Homestay.findOne)
    router.post('/add',auth.isLogin,auth.isAdmin,Homestay.create)
    router.delete('/:id',auth.isLogin,auth.isAdmin,Homestay.remove)
    router.put('/:id',auth.isLogin,auth.isAdmin,Homestay.update)

module.exports = router