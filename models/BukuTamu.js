const mongoose = require('mongoose')

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const BukuTamuSchema = new Schema({
    nama :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pesan:{
        type:String,
        required:true
    }
},{timestamps:{}})

const BukuTamuModel = mongoose.model('bukutamu',BukuTamuSchema)

module.exports = BukuTamuModel