const mongoose = require('mongoose')

const Schema = mongoose.Schema

const emailServicesSchema = new Schema({
    namaDepan:String,
    namaBelakang:String,
    email:String,
    gender:String,
    noTelp:String,
    emergencyContact:String,
    alamat:String,
    jenisAsuransi:String,
    agama:String,
    aliran:String,
    kondisiKesehatan:String,
    vegetarian:Boolean,
    suplemen:String,
    rumahSakit:String,
    durasiPerjalanan:String,
    homestay:String,
    tranportasi:String,
    kebersihan:String,
    konseling:Boolean,
    kunjunganKeluarga:Boolean,
    hiburan:String,
    fasilitas:String,
    lainLain:String,
    budget:String,
},{timestamps:{}})

const emailServicesModel = mongoose.model('emailservices',emailServicesSchema)

module.export = emailServicesModel