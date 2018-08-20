const Model = require('../models/BukuTamu')

class BukuTamu{
    static add(req,res){
        let obj = {
            email:req.body.email,
            nama:req.body.nama,
            pesan:req.body.pesan
        }
        Model.create(obj,(err,rows)=>{
            if(!err){
                res.status(200).json({message:"buku tamu has added one list",data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static findAll(req,res){
        Model.find({},(err,rows)=>{
            if(!err){
                res.status(200).json({message:"all of buku tamu data",data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }
}
module.exports = BukuTamu