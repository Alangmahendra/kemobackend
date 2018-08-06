const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KepercayaanSchema = new Schema({
    nama:{
        type:String
    },
    aliranId:{
        type:Schema.Types.ObjectId,
        ref:'aliran'
    }
},{timestamps:{}})

const kepercayaanModel = mongoose.model('kepercayaan',KepercayaanSchema)

module.exports = kepercayaanModel