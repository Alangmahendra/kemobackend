const mongoose = require('mongoose')

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const adminSchema = new Schema({
    name :{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:{}})

const adminModel = mongoose.model('adminModel',adminSchema)

module.exports = adminModel