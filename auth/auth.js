const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    isLogin: (req, res, next)=>{
        jwt.verify(req.headers.authorization,process.env.SECRET_KEY,(err,decoded)=>{
            if(!err){
                req.user = decoded
                next()
            }else{
                res.status(500).json({message:err})
            }
        })
    },

    isAdmin : (req,res,next)=>{
        const role = req.user.role
        if(role !== 'admin'){
            res.status(500).json({message:'only admin can access this fiture'})
        }else{
            res.status(200)
            next()
        }
    },

    isPatient: (req,res,next)=>{
        const user = req.user._id
        if(user === req.body.userId){
            next()
        }else{
            res.status(500).json({
                message : 'get out!!!'
            })
        }
    }
}