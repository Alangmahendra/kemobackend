const Model = require('../models/Schedule')

class Schedule{
    static create(req,res){
        let obj = {
            userId:req.user._id,
            ScheduleName:req.body.ScheduleName,
            detail:req.body.detail,
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            scheduleComplete:req.body.scheduleComplete || false
        }
        Model.create(obj,(err,rows)=>{
            if(!err){
                res.status(200).json({message:'schedule for user created',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static updateStatus(req,res){
        let obj = {
            scheduleComplete : true
        }
        Model.findByIdAndUpdate(req.params.id,obj,{new:true},(err,rows)=>{
            if(!err){
                res.status(200).json({message:'schedule for user created',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }

    static update(req,res){
        let obj = {
            userId:req.user._id,
            ScheduleName:req.body.ScheduleName,
            detail:req.body.detail,
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            scheduleComplete:req.body.scheduleComplete || false
        }
        Model.findByIdAndUpdate(req.params.id,obj,{new:true},(err,rows)=>{
            if(!err){
                res.status(200).json({message:'schedule for user created',data:rows})
            }else{
                res.status(500).json({message:err})
            }
        })
    }
}

module.exports = Schedule