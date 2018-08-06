const mongoose = require('mongoose')

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const scheduleSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'userModel'
    },
    ScheduleName:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    scheduleComplete:Boolean
},{timestamps:{}})

const scheduleModel = mongoose.model('scheduleModel',scheduleSchema)
module.exports = scheduleModel