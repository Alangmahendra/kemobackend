const Model = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

class User {

    static userSignin(req, res) {
        Model.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
                res.status({ message: err })
            } else {
                bcrypt.compare(req.body.password, user.password, (err, rows) => {
                    if (!err) {
                        let payload = {
                            _id: user._id,
                            email: user.email,
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

    static userFormSignup(req,res){
        let tanngalString = req.body.tanggalLahir.toISOString().split('-').join('')
        let serial = tanngalString.split('').splice(2,6).join('')
        let generatePass = req.body.namaDepan+serial
        console.log(generatePass)
        bcrypt.genSalt(10,(err,salt)=>{
            if(!err){
                bcrypt.hash(generatePass,salt,(err,hash)=>{
                    if(!err){
                        let obj ={
                            email:req.body.email,
                            username:req.body.username,
                            alamat:req.body.alamat,
                            notelp:req.body.notelp,
                            namaDepan:req.body.namaDepan,
                            namaBelakang:req.body.namaBelakang,
                            tanggalLahir:req.body.tanggalLahir,
                            jenisAsuransi:req.body.jenisAsuransi,
                            emergencyContact:req.body.emergencyContact,
                            kondisiKesehatan:req.body.kondisiKesehatan,
                            AgamaId:req.body.AgamaId,
                            password:hash
                        }
                        Model.create(obj,(err,rows)=>{
                            if(!err){
                                res.status(200).json({message:'user has been created',data:rows})
                            }else{
                                res.status(500).json({message:err})
                            }
                        })
                    }else{
                        res.status(500).json({message:err})
                    }
                })
            }else{
                res.status(500).json({message:err})
            }
        })
    }


}

module.exports = User