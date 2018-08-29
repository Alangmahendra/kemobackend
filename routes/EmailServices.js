const router = require('express').Router()
const Email = require('../controllers/EmailServices')

router.post('/send',Email.send)

module.exports = router