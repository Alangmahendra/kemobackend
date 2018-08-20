const mongoose = require('mongoose')
const Schema = mongoose.Schema

const agamaSchema = new Schema({
    nama:{
        type:String
    }
},{timestamps:{}})

const agamaModel = mongoose.model('agama',agamaSchema)

module.exports = agamaModel