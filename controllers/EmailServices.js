const ModelEmail = require('../models/EmailServices')
const ModelAkomodasi = require('../models/Akomodasi')
const ModelUser = require('../models/User')

const sgMail = require('@sendgrid/mail')
require('dotenv').config()


class EmailServices {
    static send(req, res) {
        sgMail.setApiKey(process.env.SENDGRID_KEY)
        const data = req.body
        // console.log('ini data biasa', data, 'ini stringify', JSON.stringify(data))
        const msg = {
            to: ['javsss3@gmail.com','sigitsetiadi@gmail.com'],
            from: 'info@kemodijakarta.com',
            subject: 'SESEORANG MENDAFTAR DI KEMODIJAKARTA',
            text: 'hello world',
        html: `<div>
        nama depan:<srtong>${data.values.namaDepan}</strong><br/>
        nama belakang:<srtong>${data.values.namaBelakang}</strong><br/>
        email:<srtong>${data.values.email}</strong><br/>
        agama:<srtong>${data.values.agama}</strong><br/>
        aliran agama:<srtong>${data.values.aliran}</strong><br/>
        jenis kelamin:<srtong>${data.values.sex}</strong><br/>
        alamat:<srtong>${data.values.alamat}</strong><br/>
        nomor telepon:<srtong>${data.values.noTelp}</strong><br/>
        nomor telepon darurat:<srtong>${data.values.noTelpDarurat}</strong><br/>
        asuransi:<srtong>${data.values.Asuransi}</strong><br/>
        kondisi kesehatan:<srtong>${data.values.kondisi}</strong><br/>
        vegetarian:<srtong>${data.values.diet}</strong><br/>
        minum suplement:<srtong>${data.values.suplemen}</strong><br/>
        jenis penginapan:<srtong>${data.values.homestay}</strong><br/>
        fasiltas penginapan:<srtong>${data.values.fasilitas}</strong><br/>
        layanan kebersihan:<srtong>${data.values.kebersihan}</strong><br/>
        transportasi:<srtong>${data.values.transportasi}</strong><br/>
        butuh kunjungan keluarga:<srtong>${data.values.kunjungan}</strong><br/>
        butuh konseling/siraman rohani sesuai agama dan aliran:<srtong>${data.values.konseling}</strong><br/>
        hiburan:<srtong>${data.values.hiburan}</strong><br/>
        rumah sakit tempat terapi:<srtong>${data.values.rumahSakit}</strong><br/>
        budget yang dimiliki:<srtong>${data.values.budget}</strong><br/>
        <br>dari alang mahendra,developer.
        </div>`
        }
        sgMail.send(msg).then(() => {
            res.status(200).json({ message: "email terkirim" })
        }).catch(() => {
            res.status(500).json({ message: 'error' })
        })
    }
}

module.exports = EmailServices