const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aliranSchema = new Schema({
    namaAliran:{
        type:String
    }
},{timestamps:{}})

const aliranModel = mongoose.model('aliran',aliranSchema)

module.exports = aliranModel