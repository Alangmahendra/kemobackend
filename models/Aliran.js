const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aliranSchema = new Schema({
    nama:{
        type:String
    },
    agamaId:{
        type:Schema.Types.ObjectId,
        ref:'agama'
    }
},{timestamps:{}})

const aliranModel = mongoose.model('aliran',aliranSchema)

module.exports = aliranModel