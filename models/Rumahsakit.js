const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rumahSakitSchema = new Schema({
    nama:{
        type:String,
        required:true
    },
    alamat:{
        type:String,
        required:true
    }
},{timestamps:{}})

const rumahSakitModel = mongoose.model('rumahsakit',rumahSakitSchema)

module.exports = rumahSakitModel