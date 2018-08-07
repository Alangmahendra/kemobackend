const express = require('express')
const router = express.Router()
const Agama = require('../controllers/Agama')
const auth = require('../auth/auth')

router.get('/all',auth.isLogin,Agama.findAll)
router.get('/:id',auth.isLogin,Agama.findOne)
router.post('/add',auth.isLogin,auth.isAdmin,Agama.create)
router.put('/:id',auth.isLogin,auth.isAdmin,Agama.update)
router.delete('/:id',auth.isLogin,auth.isAdmin,Agama.remove)

module.exports = router