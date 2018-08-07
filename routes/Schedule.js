const router = require('express').Router()
const Schedule = require('../controllers/Schedule')
const auth = require('../auth/auth')

    router.get('/all',auth.isLogin,auth.isAdmin,Schedule.findAll)
    router.get('/userSchedule,',auth.isLogin,Schedule.findByUser)
    router.put('/updateSchedule/:id',auth.isLogin,auth.isAdmin,Schedule.update)
    router.put('/scheduleStatus/:id',auth.isLogin,Schedule.updateStatus)
    router.post('/add',auth.isLogin,Schedule.create)

module.exports = router