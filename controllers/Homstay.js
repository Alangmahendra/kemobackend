const Model = require('../models/Homstay')

class Rumahsakit {
    static add(req, res) {
        let obj = {
            nama: req.body.nama,
            alamat: req.body.alamat
        }
        Model.create(obj, (err, rows) => {
            if (!err) {
                res.status(200).json({ message: 'homestay', data: rows })
            } else {
                res.status(500).json({ message: err })
            }
        })
    }

    static findAll(req,res){
        Model.find({},(err,rows)=>{
            if(!err){
                res.status(200).json({message:'all homestay',data:rows})
            }else{
                res.status(500).json({ message: err })
            }
        })
    }

    static update(req, res) {
        let obj = {
            nama: req.body.nama,
            alamat: req.body.alamat
        }
        Model.findByIdAndUpdate(req.params.id,obj,{new:true}, (err, rows) => {
            if (!err) {
                res.status(200).json({ message: 'rumah sakit', data: rows })
            } else {
                res.status(500).json({ message: err })
            }
        })
    }
}

module.exports = Rumahsakit