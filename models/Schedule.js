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
    tangalMulain:{
        type:Date,
    },
    tanggalSelesai:{
        type:Date,
    },
    scheduleComplete:Boolean
},{timestamps:{}})

const scheduleModel = mongoose.model('scheduleModel',scheduleSchema)
module.exports = scheduleModel