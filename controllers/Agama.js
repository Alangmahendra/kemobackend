const Model = require('../models/Agama')

class Agama {
    static create(req,res){
        let obj = {
            nama:req.body.nama,
            aliranId:req.body.aliranId
        }
        Model.create(obj,(err,rows)=>{
            if(!err){
                res.status(200).json({message:'data Agama has been created',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static remove(req,res){
        Model.findByIdAndRemove(req.params.id,{new:true},(err,rows)=>{
            if(!err){
                res.status(200).json({message:`data with id ${req.params.id} has been removed`,data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static findAll(req,res){
        Model.find({}).populate('aliranId').exec((err,rows)=>{
            if(!err){
                res.status(200).json({message:'All agama Data',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static findOne(req,res){
        Model.findById(req.params.id).populate('aliranId').exec((err,rows)=>{
            if(!err){
                res.status(200).json({message:`data agama with id ${req.params.id} has been finded`,data:rows})
            }else{

            }
        })
    }

    static update(req,res){
        let obj = {
            nama:req.body.nama,
            aliranId:req.body.aliranId
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
module.exports = Agama