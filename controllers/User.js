const Model = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

class User {

    static userSignin(req, res) {
        Model.findOne({ username: req.body.username }, (err, user) => {
            if (err) {
                res.status({ message: err })
            } else {
                bcrypt.compare(req.body.password, user.password, (err, rows) => {
                    if (!err) {
                        let payload = {
                            _id: user._id,
                            username: user.username,
                            role: user.role
                        }
                        jwt.sign(payload,process.env.SECRET_KEY, (err, token) => {
                            if (err) {
                                res.status(500).json({ message: err })
                            } else {
                                res.status(200).json({ message: "user logged in", data: token })
                            }
                        })
                    }else{
                        res.status(500).json({message:err})
                    }
                })
            }
        })
    }


}

module.exports = User