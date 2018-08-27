const Model = require('../models/Akomodasi')

class Akomodasi{
    static create(req,res){
        let obj = {
            userId:req.user._id,
            homestay:req.body.homestay,
            rumahSakit:req.body.rumahSakit,
            fasilitas:req.body.fasilitas,
            kebersihan:req.body.kebersihan,
            transportasi:req.body.transportasi,
            kunjunganKeluarga:req.body.kunjunganKeluarga,
            hiburan:req.body.hiburan,
            konseling:req.body.konseling,
            suplement:req.body.suplement,
            vegetarian:req.body.vegetarian,
            lainLain:req.body.lainLain,
            budget:req.body.budget
        }
        Model.create(obj,(err,rows)=>{
            if(!err){
                res.status(200).json({message:'akomodasi has been created',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static update(req,res){
        let obj = {
            userId:req.user._id,
            homestay:req.body.homestay,
            rumahSakit:req.body.rumahSakit,
            fasilitas:req.body.fasilitas,
            kebersihan:req.body.kebersihan,
            transportasi:req.body.transportasi,
            kunjunganKeluarga:req.body.kunjunganKeluarga,
            hiburan:req.body.hiburan,
            konseling:req.body.konseling,
            dietDanSuplement:req.body.dietDanSuplement,
            lainLain:req.body.lainLain
        }
        Model.findByIdAndUpdate(obj,{new:true},(err,rows)=>{
            if(!err){
                res.status(200).json({message:'akomodasi has been created',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static findByUser(req,res){
        Model.find({userId:req.user._id}).populate('userId').populate('homestay').populate('rumahSakit').exec((err,rows)=>{
            if(!err){
                res.status(200).json({message:'akomodasi data for this user',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }
}

module.exports = Akomodasi