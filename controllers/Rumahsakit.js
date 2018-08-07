const Model = require('../models/Rumahsakit')

class Rumahsakit {
    static create(req, res) {
        let obj = {
            nama: req.body.nama,
            alamat: req.body.alamat
        }
        Model.create(obj, (err, rows) => {
            if (!err) {
                res.status(200).json({ message: 'rumah sakit', data: rows })
            } else {
                res.status(500).json({ message: err })
            }
        })
    }

    static remove(req, res) {
        Model.findByIdAndRemove(req.params.id, (err, rows) => {
            if (!err) {
                res.status(200).json({ message: 'remove rumah sakit', data: rows })
            } else {
                res.status(500).json({ message: err })
            }
        })
    }

    static findOne(req, res) {
        Model.findById(req.params.id, (err, rows) => {
            if (!err) {
                res.status(200).json({ message: 'find one rumah sakit', data: rows })
            } else {
                res.status(500).json({ message: err })
            }
        })
    }

    static findAll(req, res) {
        Model.find({}, (err, rows) => {
            if (!err) {
                res.status(200).json({ message: 'all rumah sakit', data: rows })
            } else {
                res.status(500).json({ message: err })
            }
        })
    }

    static update(req, res) {
        let obj = {
            nama: req.body.nama,
            alamat: req.body.alamat
        }
        Model.findByIdAndUpdate(req.params.id, obj, { new: true }, (err, rows) => {
            if (!err) {
                res.status(200).json({ message: 'rumah sakit', data: rows })
            } else {
                res.status(500).json({ message: err })
            }
        })
    }
}

module.exports = Rumahsakit