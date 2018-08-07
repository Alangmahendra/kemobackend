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
    kebersihan: {
        type: String
    },
    transportasi: {
        type: String
    },
    kunjunganKeluarga: {
        type: Boolean
    },
    hiburan: {
        type: String
    },
    konseling: {
        type: Boolean
    },
    lainLain: {
        type: String
    },
    dietDanSuplemen: {
        type: String
    }
}, { timestamps: {} })

const akomodasiModel = mongoose.model('akomodasi', AkomodasiSchema)

module.exports = akomodasiModel