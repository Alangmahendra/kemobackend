const express = require('express')
const router = express.Router()
const Aliran = require('../controllers/Aliran')
const auth = require('../auth/auth')

router.get('/all',Aliran.findAll)
router.get('/:id',Aliran.findOne)
router.get('/agamaId/:id',auth.isLogin,Aliran.findByAgama)
router.post('/add',auth.isLogin,auth.isAdmin,Aliran.create)
router.put('/:id',auth.isLogin,auth.isAdmin,Aliran.update)
router.delete('/:id',auth.isLogin,auth.isAdmin,Aliran.remove)

module.exports = router