const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AkomodasiSchema = new Schema({
    fasilitas:{
        type:String
    },
    kebersihan:{
        type:String
    },
    transportasi:{
        type:String
    },
    kunjunganKeluarga:{
        type:Boolean
    },
    hiburan:{
        type:String
    },
    konseling:{
        type:Boolean
    },
    lainLain:{
        type:String
    },
    dietDanSuplemen:{
        type:String
    }
},{timestamps:{}})

const akomodasiModel = mongoose.model('akomodasi',AkomodasiSchema)

module.exports = akomodasiModel