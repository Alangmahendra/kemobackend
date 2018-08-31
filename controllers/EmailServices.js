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
            to: ['javsss3@gmail.com', 'sigitsetiadi@gmail.com', 'alangmahendra@gmail.com'],
            from: 'info@kemodijakarta.com',
            subject: 'SESEORANG MENDAFTAR DI KEMODIJAKARTA',
            text: 'hello world',
            html: `<div>
        <div>
        <label>informasi pribadi pasien</label><br/>
        nama depan:<strong>${data.values.namaDepan}</strong><br/>
        nama belakang:<strong>${data.values.namaBelakang}</strong><br/>
        email:<strong>${data.values.email}</strong><br/>
        agama:<strong>${data.values.agama}</strong><br/>
        aliran agama:<strong>${data.values.aliran}</strong><br/>
        jenis kelamin:<strong>${data.values.sex}</strong><br/>
        alamat:<strong>${data.values.alamat}</strong><br/>
        nomor telepon:<strong>${data.values.noTelp}</strong><br/>
        <div>
        Kontak Darurat Kerabat : <strong>${data.values.namaContactDarurat}</strong>
        Hubungan Kerabat : <strong>${data.values.hubungan}</strong>
        nomor telepon darurat:<strong>${data.values.noTelpDarurat}</strong><br/>
        </div>
        asuransi:<strong>${data.values.Asuransi}</strong><br/>
        </div>
        <br/>

       <div>
       <label>kondisi kesehatan</label><br/>
       Jenis kanker:<strong>${data.values.jenisKanker}</strong><br/>
       Stadium:<strong>${data.values.stadium}</strong><br/>
       </div><br/>
        
        <div>
        <label>jasa dan layanan perjalanan medis</label>
        jenis penginapan:<strong>${data.values.homestay}</strong><br/>
        <div>
            <label>fasilitas yang diinginkan pasien</label>
            kamar mandi dalam:<strong>${data.values.kamarMandiDalam}</strong><br/>
            tv:<strong>${data.values.Tv}</strong><br/>
        </div>
        butuh kunjungan keluarga:<strong>${data.values.kunjungan}</strong><br/>
        butuh konseling/siraman rohani sesuai agama dan aliran:<strong>${data.values.konseling}</strong><br/>
        hiburan:<strong>${data.values.hiburan}</strong><br/>
        kebutuhan lain:<strong>${data.values.lainLain}</strong>
        </div><br>

        <div>
        <label>keterangan budget dll</label>
        <br/>
        berapa hari terapi:<strong>${data.values.jadwalTreatment}</strong><br/>
        tanggal mulai Terapi:<strong>${data.values.tanggalMulai}</strong><br/>
        tanggal selesai Terapi:<strong>${data.values.tanggalSelesai}</strong><br/>
        kota asal:<strong>${data.values.asalKota}</strong><br/>
        datang dengan metode tranportasi:<strong>${data.values.datangDengan}</strong><br/>
        rumah sakit tempat terapi:<strong>${data.values.rumahSakit}</strong><br/>
        budget yang dimiliki:<strong>${data.values.budget}</strong><br/>
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