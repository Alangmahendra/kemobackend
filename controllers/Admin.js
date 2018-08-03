const Model = require('../models/Admin')
const UserModel = require('../models/User')
const ScheduleModel = require('../models/Schedule')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

class Admin {
    static signupAdmin(req, res) {
        bcrypt.genSalt(10, function (err, hash) {
            if (!err) {
                let obj = {
                    adminName: req.body.adminName,
                    password: hash,
                    role: req.body.role || 'admin'
                }
                Model.create(obj, (err, admin) => {
                    if (err) {
                        res.status(500).json({ message: err })
                    } else {
                        res.status(200).json({ message: 'admin account has been created', data: admin })
                    }
                })
            } else {
                //console.log(err)
                res.status(500).json({ message: err })
            }
        })
    }

    static signinAdmin(req, res) {
        Model.findOne({ adminName: req.body.adminName }, (err, admin) => {
            if (err) {
                //console.log(err)
                res.status(500).json({ message: err })
            } else {
                //console.log(admin)
                bcrypt.compare(req.body.password, admin.password, (err, rows) => {
                    //console.log(rows)
                    if (!err) {
                        console.log(rows)
                        let payload = {
                            _id: admin._id,
                            adminName: admin.adminName,
                            role: admin.role
                        }
                        jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
                            if (err) {
                                //console.log(err)
                                res.status(500).json({ message: err })
                            } else {
                                //console.log('===>',token)
                                res.status(200).json({ message: 'login', data: token })
                            }
                        })
                    } else {
                        console.log(err)
                        res.status(500).json({ message: err })
                    }
                })
            }
        })
    }

    static addUser(req, res) {
        bcrypt.genSalt(10, (err, hash) => {
            if (!err) {
                let obj = {
                    email: req.body.email,
                    username: req.body.username,
                    password: hash,
                    role: req.body.role || 'user'
                }
                UserModel.create(obj, (err, user) => {
                    if (err) {
                        res.status(500).json({ message: err })
                    } else {
                        res.status(200).json({ message: `user with ${user.username} username has been created`, data: user })
                    }
                })
            }
        })
    }

    static addScheduleUser(req, res) {
        let obj = {
            patient: req.usermodel._id,
            ScheduleName: req.body.ScheduleName,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            scheduleComlplete: req.body.scheduleComlplete || false
        }
        ScheduleModel.create(obj, (err, rows) => {
            if (err) {
                res.status(500).json({ message: err })
            } else {
                res.json(200).json({ message: 'schedule has added to selected user', data: rows })
            }
        })
    }

    static removeScheduleUser(req, res) {
        ScheduleModel.findByIdAndRemove(req.params.id, { new: true }, (err, rows) => {
            if (err) {
                res.status(500).json({ message: err })
            } else {
                res.status(200).json({ message: 'schedule has been deleted', data: rows })
            }
        })
    }

    static findAllUser(req, res) {
        UserModel.find({}, (err, rows) => {
            if (err) {
                res.status(500).json({ message: err })
            } else {
                res.status(200).json({ message: "all user", data: rows })
            }
        })
    }

    static findOneUser(req, res) {
        UserModel.findById(req.params.id, (err, rows) => {
            if (err) {
                res.status(500).json({ message: err })
            } else {
                res.status(200).json({ message: "user finded", data: rows })
            }
        })
    }

}
module.exports = Admin