const mongoose = require('mongoose')
const Schema = mongoose.Schema

const homeStaySchema = new Schema({
    nama:{
        type:String,
        required:true
    },
    alamat:{
        type:String,
        required:true
    }
},{timestamps:{}})

const homeStayModel = mongoose.model('homestay',homeStaySchema)

module.exports = homeStayModel