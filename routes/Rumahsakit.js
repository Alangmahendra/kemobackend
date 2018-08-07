const express = require('express')
const router = express.Router()
const Rumahsakit = require('../controllers/Rumahsakit')
const auth  = require('../auth/auth')

    router.get('/all',auth.isLogin,Rumahsakit.findAll)
    router.get('/:id',auth.isLogin,Rumahsakit.findOne)
    router.post('/add',auth.isLogin,auth.isAdmin,Rumahsakit.create)
    router.delete('/:id',auth.isLogin,auth.isAdmin,Rumahsakit.remove)
    router.put('/:id',auth.isLogin,auth.isAdmin,Rumahsakit.update)

module.exports = router