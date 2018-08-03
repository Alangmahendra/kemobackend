const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KepercayaanSchema = new Schema({
    namaKepercayaan:{
        type:String
    },
    aliranKepercayaanId:{
        type:Schema.Types.ObjectId,
        ref:'aliran'
    }
},{timestamps:{}})

const kepercayaanModel = mongoose.model('kepercayaan',KepercayaanSchema)

module.exports = kepercayaanModel