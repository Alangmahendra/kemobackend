const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AkomodasiSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'userModel'
    },
    homstay: {
        type: Schema.Types.ObjectId,
        ref: 'homstay'
    },
    rumahSakit: {
        type: Schema.Types.ObjectId,
        ref: 'rumahsakit'
    },
    fasilitas: {
        type: String
    },
    kunjunganKeluarga: {
        type: String
    },
    konseling: {
        type: String
    },
    lainLain: {
        type: String
    },
    budget:{
        type:String
    }
}, { timestamps: {} })

const akomodasiModel = mongoose.model('akomodasi', AkomodasiSchema)

module.exports = akomodasiModel