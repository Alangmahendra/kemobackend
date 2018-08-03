const mongoose = require('mongoose')

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
const userSchema = new Schema({
    email : {
        type:String,
    },
    username:{
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true
    },
    alamat:{
        type:String
    },
    notelp:{
        type:Number
    },
    nama:{
        type:String
    },
    jenisAsuransi:{
        type:String
    },
    emergencyContact:{
        type:Number
    },
    kondisiKesehatan:{
        type:String
    },
    role:{
        type:String,
        required:true
    },

},{timestamps:{}})

const userModel = mongoose.model('userModel',userSchema)

module.exports = userModel