const mongoose = require('mongoose')

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    password:{
        type:String
    },
    alamat: {
        type: String
    },
    notelp: {
        type: String
    },
    namaDepan: {
        type: String
    },
    namaBelakang: {
        type: String
    },
    tanggalLahir: {
        type: Date
    },
    jenisAsuransi: {
        type: String
    },
    emergencyContact: {
        type: String
    },
    namaEmergencyContact: {
        type: String
    },
    hubunganKekerabatan: {
        type: String
    },
    jenisKanker: {
        type: String
    },
    stadiumKanker:{
        type:String
    },
    agama: {
        type: String
    },
    aliran: {
        type: String
    },
    gender: {
        type: String
    },
    role: {
        type: String,
        required: true
    },

}, { timestamps: {} })

const userModel = mongoose.model('userModel', userSchema)

module.exports = userModel