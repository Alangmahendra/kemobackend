const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AkomodasiSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'userModel'
    },
    homstay: {
        type: String
    },
    rumahSakit: {
        type: String
    },
    fasilitas: {
        type: String
    },
    lainLain: {
        type: String
    },
    jadwalTreatment:{
        type:String
    },
    tanggalMulai:{
        type:String
    },
    tanggalSelesai:{
        type:String
    },
    asalKota:{
        type:String
    },
    datangDengan:{
        type:String
    },
    budget:{
        type:String
    }
}, { timestamps: {} })

const akomodasiModel = mongoose.model('akomodasi', AkomodasiSchema)

module.exports = akomodasiModel