const Model = require('../models/Aliran')

class Aliran {
    static create(req,res){
        let obj = {
            nama:req.body.nama,
            agamaId:req.body.agamaId
        }
        Model.create(obj,(err,rows)=>{
            if(!err){
                res.status(200).json({message:'data aliran has been created',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static remove(req,res){
        Model.findByIdAndRemove(req.params.id,(err,rows)=>{
            if(!err){
                res.status(200).json({message:`data with id ${req.params.id} has been removed`,data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static findAll(req,res){
        Model.find({}).populate('agamaId').exec((err,rows)=>{
            if(!err){
                res.status(200).json({message:'All aliran Data',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static findOne(req,res){
        Model.findById(req.params.id).populate('agamaId').exec((err,rows)=>{
            if(!err){
                res.status(200).json({message:`data aliran with id ${req.params.id} has been finded`,data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static findByAgama(req,res){
        Model.find({agamaId:req.body.agamaId}).populate('agamaId').exec((err,rows)=>{
            if(!err){
                res.status(200).json({message:'aliran find by AgamaId',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static update(req,res){
        let obj = {
            nama:req.body.nama,
            agamaId:req.body.agamaId
        }
        Model.findByIdAndUpdate(req.params.id,obj,{new:true},(err,rows)=>{
            if(!err){
                res.status(200).json({message:`data agama with id ${req.params.id} has been update`,data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }
}
module.exports = Aliran