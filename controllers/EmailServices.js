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
            to: ['javsss3@gmail.com', 'sigitsetiadi@gmail.com'],
            from: 'info@kemodijakarta.com',
            subject: 'SESEORANG MENDAFTAR DI KEMODIJAKARTA',
            text: 'hello world',
            html: `<div>
        <div>
        <label>(HAL 1). Biodata Klien</label><br/>
        Nama Depan:<strong>${data.values.namaDepan}</strong><br/>
        Nama Belakang:<strong>${data.values.namaBelakang}</strong><br/>
        Email:<strong>${data.values.email}</strong><br/>
        Agama:<strong>${data.values.agama}</strong><br/>
        Aliran Agama:<strong>${data.values.aliran}</strong><br/>
        Jenis Kelamin:<strong>${data.values.sex}</strong><br/>
        Alamat:<strong>${data.values.alamat}</strong><br/>
        Nomor Telepon:<strong>${data.values.noTelp}</strong><br/>
        <div>
        Kontak Darurat Kerabat : <strong>${data.values.namaContactDarurat}</strong>
        Hubungan Kerabat : <strong>${data.values.hubungan}</strong>
        Nomor Telepon Darurat:<strong>${data.values.noTelpDarurat}</strong><br/>
        </div>
        Asuransi:<strong>${data.values.Asuransi}</strong><br/>
        </div>
        <br/>

       <div>
       <label>(HAL 2). Kondisi Kesehatan Klien</label><br/>
       Jenis Kanker:<strong>${data.values.jenisKanker}</strong><br/>
       Stadium:<strong>${data.values.stadium}</strong><br/>
       </div><br/>
        
        <div>
        <label>(HAL 3). Kriteria Perjalanan Medis</label><br/>
        Jenis Penginapan:<strong>${data.values.homestay}</strong><br/>
        <div>
            Kamar Mandi Dalam:<strong>${data.values.kamarMandiDalam}</strong><br/>
            Tv:<strong>${data.values.Tv}</strong><br/>
        </div>
        Butuh Kunjungan Keluarga:<strong>${data.values.kunjungan}</strong><br/>
        Butuh Konseling/Siraman Rohani Sesuai Agama Dan Aliran:<strong>${data.values.konseling}</strong><br/>
        Hiburan:<strong>${data.values.hiburan}</strong><br/>
        Kebutuhan Lain:<strong>${data.values.lainLain}</strong>
        </div><br>

        <div>
        <label>(HAL 4). Budget Perjalanan Medis</label>
        <br/>
        berapa hari terapi:<strong>${data.values.jadwalTreatment}</strong><br/>
        tanggal mulai Terapi:<strong>${data.values.tanggalMulai}</strong><br/>
        tanggal selesai Terapi:<strong>${data.values.tanggalSelesai}</strong><br/>
        kota asal:<strong>${data.values.asalKota}</strong><br/>
        datang dengan metode tranportasi:<strong>${data.values.datangDengan}</strong><br/>
        rumah sakit tempat terapi:<strong>${data.values.rumahSakit}</strong><br/>
        budget yang dimiliki:<strong>Rp.${data.values.budget} Juta</strong><br/>
        </div>

        <div>
        Tanggal Pengisian <br>
        </div>

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